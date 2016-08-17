#!/bin/bash

function auth {
	TOKEN=`wp transient get staging_auth_token`
	if [ "$1" != "$TOKEN" || -z "$TOKEN" ]
		then
		echo \{\"status\":\"error\",\"message\":\"Unable to authenticate the action.\"\}
		wp transient delete staging_auth --quiet
		exit
	fi
	wp transient delete staging_auth
}

function create {
	cd $PRODUCTION_DIR || error 'Unable to move to production directory.'
	WP_VER=`wp core version`
	mkdir -p $STAGING_DIR || error 'Unable to create staging directory.'
	wp db export $STAGING_DIR/export.sql --add-drop-table --skip-themes --skip-plugins || error 'Unable to export database.'
	wp option update staging_environment production --autoload=false || error 'Unable to set environment.'
	cd $STAGING_DIR || error 'Unable to move to staging directory.'
	echo 'wp-config.php' > .gitignore
	echo '.gitignore' >> .gitignore
	git init || error 'Unable to initialize git.'
	move_files $PRODUCTION_DIR $STAGING_DIR
	wp core download --version=$WP_VER --force || error 'Unable to install WordPress in staging directory.'
	DB_PREFIX=`wp eval 'global $wpdb;echo $wpdb->prefix;' --path=$PRODUCTION_DIR`
	wp core config --dbname=$DB --dbuser=$DB_USER --dbpass=$DB_PASS --dbprefix=$DB_PREFIX --skip-themes --skip-plugins || error 'Unable to configure WordPress.'
	git config --global user.email "staging@domain.com"
	git config --global user.name "Endurance Staging"
	wp db reset --yes --skip-themes --skip-plugins || error 'Unable to reset database.'
	wp db import $STAGING_DIR/export.sql --skip-themes --skip-plugins || error 'Unable to import database.'
	rm $STAGING_DIR/export.sql --force
	save_state 'Create Staging Environment'
	wp option update staging_environment staging --autoload=false || error 'Unable to set environment.'
	wp search-replace $PRODUCTION_URL $STAGING_URL --skip-themes --skip-plugins || error 'Unable to update URL on staging.'
	wp option update staging_config "$CONFIG" --format=json --path=$STAGING_DIR || error 'Unable to import global config on staging.'
	wp option update mm_coming_soon 'true' --path=$STAGING_DIR || error 'Unable to enable the coming soon page on staging.'
	wp rewrite flush --path=$STAGING_DIR || error 'Unable to flush rewrite rules.'
	#fire email here from mojo cli to site admin
	clear
	echo \{\"status\" :\"success\",\"message\":\"Staging website created successfully.\",\"reload\":\"true\"\}
}

function clone {
	cd $PRODUCTION_DIR || error 'Unable to move to production directory.'
	wp db export $STAGING_DIR/export.sql --add-drop-table || error 'Unable to export database.'
	WP_VER=`wp core version`
	cd $STAGING_DIR || error 'Unable to move to staging directory.'
	wp db reset --yes --skip-themes --skip-plugins || error 'Unable to reset database.'
	wp db import $STAGING_DIR/export.sql --skip-themes --skip-plugins || error 'Unable to import database.'
	rm $STAGING_DIR/export.sql --force
	wp option update staging_environment staging --autoload=false || error 'Unable to set environment.'
	move_files $PRODUCTION_DIR $STAGING_DIR
	wp core download --version=$WP_VER --force || error 'Unable to install WordPress in staging directory.'
	wp search-replace $PRODUCTION_URL $STAGING_URL --skip-themes --skip-plugins || error 'Unable to update URL on staging.'
	wp option update staging_config "$CONFIG" --format=json --path=$STAGING_DIR || error 'Unable to import global config on staging.'
	wp option update mm_coming_soon 'true' --path=$STAGING_DIR || error 'Unable to enable the coming soon page on staging.'
	wp rewrite flush --path=$STAGING_DIR || error 'Unable to flush rewrite rules.'
	save_state 'Clone From Production'
	clear
	echo \{\"status\" :\"success\",\"message\":\"Website cloned successfully.\"\}
}

function deploy_files {
	cd $STAGING_DIR
	WP_VER=`wp core version`
	save_state 'Save then Deploy Files'
	rm -r $PRODUCTION_DIR/wp-content/themes --force || error 'Unable to remove themes on production.'
	rm -r $PRODUCTION_DIR/wp-content/plugins --force || error 'Unable to remove plugins on production.'
	wp core download --version=$WP_VER --force --path=$PRODUCTION_DIR || error 'Unable to move WordPress files.'
	move_files $STAGING_DIR $PRODUCTION_DIR
	clear
	echo \{\"status\" :\"success\",\"message\":\"Files deployed successfully.\"\}
}

function deploy_db {
	cd $STAGING_DIR || error 'Unable to staging directory.'
	save_state 'Save then Deploy Database'
	wp db export $STAGING_DIR/export.sql --add-drop-table || error 'Unable to export database.'
	wp db import $STAGING_DIR/export.sql --path=$PRODUCTION_DIR || error 'Unable to import database.'
	wp search-replace "$STAGING_URL" "$PRODUCTION_URL" --path=$PRODUCTION_DIR || error 'Unable to update URL on production.'
	rm $STAGING_DIR/export.sql --force
	wp option update staging_environment production --autoload=false --path=$PRODUCTION_DIR || error 'Unable to set environment.'
	wp option update staging_config "$CONFIG" --format=json --path=$PRODUCTION_DIR || error 'Unable to import global config on production.'
	wp option delete mm_coming_soon --path=$PRODUCTION_DIR || error 'Unable to disable coming soon page.'
	clear
	echo \{\"status\" :\"success\",\"message\":\"Database deployed successfully.\"\}
}

function deploy_files_db {
	deploy_files
	deploy_db
	clear
	echo \{\"status\" :\"success\",\"message\":\"Files and Database deployed successfully.\"\}
}

function deploy_files_dbmerge {
	clear
	# echo \{\"status\" :\"success\",\"message\":\"Files deployed and DB merged successfully.\"\}
}

function destroy {
	cd $PRODUCTION_DIR
	if test -d $STAGING_DIR
		then
		wp db reset --yes --path=$STAGING_DIR || error 'Unable to reset staging database.'
		wp option delete staging_environment --path=$PRODUCTION_DIR || error 'Unable to reset staging environment in production.'
		wp option delete staging_config --path=$PRODUCTION_DIR || error 'Unable to remove global staging config.'
		rm -r $STAGING_DIR --force || error 'Unable to remove staging files.'
		mkdir -p $STAGING_DIR
		echo "<script type='text/javascript'>window.location = '$PRODUCTION_URL';</script>" > $STAGING_DIR/index.php
		clear
		echo \{\"status\":\"success\",\"message\":\"Staging website destroyed.\",\"reload\":\"true\"\}
	fi
}

function move_files {
	FROM="$1"
	TO="$2"
	mkdir -p $TO/wp-content/uploads || error 'Unable to create uploads folder.'
	mkdir -p $TO/wp-content/themes || error 'Unable to create themes folder.'
	mkdir -p $TO/wp-content/plugins || error 'Unable to create plugins folder.'
	rsync -r --exclude=.git $FROM/wp-content/uploads/* $TO/wp-content/uploads || error 'Unable to move uploads folder.'
	rsync -r --exclude=.git $FROM/wp-content/themes/* $TO/wp-content/themes || error 'Unable to move themes folder.'
	rsync -r --exclude=.git $FROM/wp-content/plugins/* $TO/wp-content/plugins || error 'Unable to move plugins folder.'
}

function save_state {
	cd $STAGING_DIR || error 'Unable to move to staging directory.'
	wp db export $STAGING_DIR/export.sql --add-drop-table --path=$STAGING_DIR || error 'Unable to export database to save point.'
	git add . || error 'Unable to add files to git.'
	if [ -z "$1" ]
		then
			MESSAGE='Staging Save State'
		else
			MESSAGE="$1"
	fi
	git commit -m "$MESSAGE"
	rm $STAGING_DIR/export.sql --force
	clear
	echo \{\"status\" :\"success\",\"message\":\"Restoration point added.\",\"callback\":\"mm_load_revisions\"\}
}

function restore_state {
	if [ -z "$1" ]
		then
			error 'No revision provided.'
		else
			EXIST=`git cat-file -t $1`
			if [ "$EXIST" == "commit" ]
				then
					SESSIONS=`wp user meta get $USER_ID session_tokens --format=json`
					git checkout $1 || error 'Unable to restore files from revision.'
					wp db import $STAGING_DIR/export.sql --path=$STAGING_DIR || error 'Unable to import database from save point.'
					rm $STAGING_DIR/export.sql --force
					wp user meta update $USER_ID session_tokens $SESSIONS --format=json
					echo \{\"status\" :\"success\",\"message\":\"State restored successfully...\",\"callback\":\"mm_load_revisions\"\}
				else
					error 'Unable to locate revision.'
			fi
	fi
}

function revisions {
	clear
	cd $STAGING_DIR
	LOG=`git log --pretty=format:'%h,%ad,%s;' -10`
	echo $LOG
}

function sso_staging {
	if [ -z $1 ]
		then
		error 'No user provided.'
	fi
	LINK=`wp mojo sso --url-only --id=$1 --path=$STAGING_DIR`
	echo \{\"status\":\"success\",\"new_tab\":\"$LINK\&redirect=admin.php\?page=mojo-staging\"\}
}

function sso_production {
	if [ -z $1 ]
		then
		error 'No user provided.'
	fi
	LINK=`wp mojo sso --url-only --id=$1 --path=$PRODUCTION_DIR`
	echo \{\"status\":\"success\",\"new_tab\":\"$LINK\&redirect=admin.php\?page=mojo-staging\"\}
}

function error {
	echo \{\"status\":\"error\",\"message\":\"$1\"\}
	wp transient delete mm_staging_lock --path=$PRODUCTION_DIR --quiet
	exit
}

function lock_check {
	LOCK=`wp transient get mm_staging_lock --path=$PRODUCTION_DIR --quiet`
	if [ -n "$LOCK" ]
		then
		error 'Staging action is locked by another command'
	fi
}

function compatibility_check {
	if [ -z `type wp` ]
		then
		error 'WPCLI is not available'
	fi

	if [ -z `type git` ]
		then
		error 'Git is not available'
	fi
}

#everything must auth.
auth $2
lock_check
compatibility_check

PRODUCTION_DIR=$3
STAGING_DIR=$4
PRODUCTION_URL=$5
STAGING_URL=$6
USER_ID=$7
CONFIG=`wp option get staging_config --format=json --path=$PRODUCTION_DIR`

DB="wordpress_trunk"
DB_USER="wp"
DB_PASS="wp"



wp transient set mm_staging_lock "$@" 120 --path=$PRODUCTION_DIR --quiet

$1 "$8"

wp transient delete mm_staging_lock --path=$PRODUCTION_DIR --quiet

# $1 is function
# $2 is auth TOKEN
# $3 is production dir
# $4 is staging dir
# $5 is production url
# $6 is staging url
# $7 is current user id
# $8 is function param 1