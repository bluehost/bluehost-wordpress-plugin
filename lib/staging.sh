#!/bin/bash

function create {
	cd $PRODUCTION_DIR
	WP_VER=`wp core version`
	mkdir -p $STAGING_DIR
	wp db export $STAGING_DIR/export.sql --add-drop-table --skip-themes --skip-plugins
	wp option update staging_environment production --autoload=false
	cd $STAGING_DIR
	echo 'wp-config.php' > .gitignore
	echo '.gitignore' >> .gitignore
	echo '*.sql' >> .gitignore
	git init
	rsync -r --exclude=.git $PRODUCTION_DIR/wp-content/* $STAGING_DIR/wp-content
	wp core download --version=$WP_VER --force
	git add .
	DB_PREFIX=`wp eval 'global $wpdb;echo $wpdb->prefix;' --path=$PRODUCTION_DIR`
	wp core config --dbname=$DB --dbuser=$DB_USER --dbpass=$DB_PASS --dbprefix=$DB_PREFIX --skip-themes --skip-plugins
	git config --global user.email "staging@domain.com"
	git config --global user.name "Endurance Staging"
	git commit -m 'Create Staging Environment' --quiet
	wp db reset --yes --skip-themes --skip-plugins
	wp db import $STAGING_DIR/export.sql --skip-themes --skip-plugins
	rm $STAGING_DIR/export.sql --force
	wp option update staging_environment staging --autoload=false
	wp search-replace $PRODUCTION_URL $STAGING_URL --skip-themes --skip-plugins
	wp option update staging_config "$CONFIG" --format=json --path=$STAGING_DIR
	#fire email here from mojo cli to site admin
	clear
	echo \{\"status\" :\"success\",\"message\":\"Staging website created successfully.\",\"reload\":\"true\"\}
}

function clone {
	cd $PRODUCTION_DIR
	wp db export $STAGING_DIR/export.sql --add-drop-table
	WP_VER=`wp core version`
	cd $STAGING_DIR
	wp db reset --yes
	wp db import $STAGING_DIR/export.sql --skip-themes --skip-plugins
	rm $STAGING_DIR/export.sql --force
	wp option update staging_environment staging --autoload=false
	rsync -r --exclude=.git $PRODUCTION_DIR/wp-content/* $STAGING_DIR/wp-content
	wp core download --version=$WP_VER --force
	wp search-replace $PRODUCTION_URL $STAGING_URL --skip-themes --skip-plugins
	wp option update staging_config "$CONFIG" --format=json --path=$STAGING_DIR
	git add .
	git commit -m 'Clone From Production' --quiet
	clear
	echo \{\"status\" :\"success\",\"message\":\"Website cloned successfully.\"\}
}

function deploy_files {
	cd $STAGING_DIR
	WP_VER=`wp core version`
	git add .
	git commit -m 'Save Then Deploy' --quiet
	rm -r $PRODUCTION_DIR/wp-content/themes --force
	rm -r $PRODUCTION_DIR/wp-content/plugins --force
	wp core download --version=$WP_VER --force --path=$PRODUCTION_DIR
	rsync -r --exclude=.git $STAGING_DIR/wp-content/* $PRODUCTION_DIR/wp-content/
	clear
	echo \{\"status\" :\"success\",\"message\":\"Files deployed successfully.\"\}
}

function deploy_files_db {
	cd $STAGING_DIR

	WP_VER=`wp core version`
	git add .
	git commit -m 'Save Then Deploy' --quiet
	wp core download --version=$WP_VER --force --path=$PRODUCTION_DIR
	rm -r $PRODUCTION_DIR/wp-content/themes --force
	rm -r $PRODUCTION_DIR/wp-content/plugins --force
	rsync -r --exclude=.git $STAGING_DIR/wp-content/* $PRODUCTION_DIR/wp-content/

	wp db export $STAGING_DIR/export.sql --add-drop-table --path=$STAGING_DIR
	wp db import $STAGING_DIR/export.sql --path=$PRODUCTION_DIR
	rm $STAGING_DIR/export.sql --force
	wp option update staging_environment production --autoload=false --path=$PRODUCTION_DIR
	wp search-replace $STAGING_URL $PRODUCTION_URL --path=$PRODUCTION_DIR
	wp option update staging_config "$CONFIG" --format=json --path=$STAGING_DIR

	clear
	echo \{\"status\" :\"success\",\"message\":\"Files and DB deployed successfully.\"\}
}

function deploy_db {
	cd $STAGING_DIR

	wp db export $STAGING_DIR/export.sql --add-drop-table
	wp db import $STAGING_DIR/export.sql --path=$PRODUCTION_DIR
	wp search-replace "$STAGING_URL" "$PRODUCTION_URL" --path=$PRODUCTION_DIR
	rm $STAGING_DIR/export.sql --force
	wp option update staging_environment production --autoload=false --path=$PRODUCTION_DIR
	wp option update staging_config "$CONFIG" --format=json --path=$PRODUCTION_DIR
	#clear
	echo \{\"status\" :\"success\",\"message\":\"Database deployed successfully.\"\}
}

function deploy_files_dbmerge {
	# cd $STAGING_DIR
	# WP_VER=`wp core version`
	# git add .
	# git commit -m 'Save Then Deploy' --quiet
	# #deploy files
	# rm -r $PRODUCTION_DIR/wp-content/themes --force
	# rm -r $PRODUCTION_DIR/wp-content/plugins --force
	# rsync -r --exclude=.git $STAGING_DIR/wp-content/* $PRODUCTION_DIR/wp-content/
	# wp core download --version=$WP_VER --force --path=$PRODUCTION_DIR
	# #deploy files & merge db
	# #there needs to be a merge.sql file
	# wp db import $STAGING_DIR/merge.sql --path=$PRODUCTION_DIR
	# rm $STAGING_DIR/export.sql --force
	# wp option update staging_environment production --autoload=false

	# #wp search-replace staging.$DOMAIN $DOMAIN --path=$PRODUCTION_DIR
	# wp search-replace local.wordpress-trunk.dev local.wordpress.dev --path=$PRODUCTION_DIR

	clear
	# echo \{\"status\" :\"success\",\"message\":\"Files deployed and DB merged successfully.\"\}
}

function destroy {
	cd $PRODUCTION_DIR
	if test -d $STAGING_DIR
		then
		wp db reset --yes --path=$STAGING_DIR
		wp option delete staging_environment --path=$PRODUCTION_DIR
		wp option delete staging_config --path=$PRODUCTION_DIR
		rm -r $STAGING_DIR --force
		mkdir -p $STAGING_DIR
		echo "<script type='text/javascript'>window.location = '$PRODUCTION_URL';</script>" > $STAGING_DIR/index.php
		clear
		echo \{\"status\":\"success\",\"message\":\"Staging website destroyed.\",\"reload\":\"true\"\}
	fi
}

function save_state {
	cd $STAGING_DIR
	git add .
	git commit -m "Save State"
	clear
	echo \{\"status\" :\"success\",\"message\":\"Restoration point added.\"\}
}

function restore_state {
	clear
	echo \{\"status\" :\"success\",\"message\":\"State restored successfully ....\"\}
}

function revisions {
	clear
	cd $STAGING_DIR
	git log --pretty=oneline -10
}

function sso_staging {
	LINK=`wp mojo sso --url-only --path=$STAGING_DIR`
	echo \{\"status\":\"success\",\"new_tab\":\"$LINK\&redirect=admin.php\?page=mojo-staging\"\}
}

function sso_production {
	LINK=`wp mojo sso --url-only --path=$PRODUCTION_DIR`
	echo \{\"status\":\"success\",\"new_tab\":\"$LINK\&redirect=admin.php\?page=mojo-staging\"\}
}

function auth {
	TOKEN=`wp transient get staging_auth_token`
	if [ "$1" != "$TOKEN" ]
		then
		echo \{\"status\":\"error\",\"message\":\"Unable to authenticate the action.\"\}
		wp transient delete staging_auth
		exit
	fi
	wp transient delete staging_auth
}
#everything must auth.
auth $2

PRODUCTION_DIR=$3
STAGING_DIR=$4
PRODUCTION_URL=$5
STAGING_URL=$6
CONFIG=`wp option get staging_config --format=json --path=$PRODUCTION_DIR`

DB="wordpress_trunk"
DB_USER="wp"
DB_PASS="wp"


$1


# $1 is function
# $2 is auth TOKEN
# $3 is production dir
# $4 is staging dir
# $5 is production url
# $6 is staging url
