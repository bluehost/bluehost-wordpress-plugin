import { __, sprintf } from '@wordpress/i18n';
import BaseStep from '../base';
import { BWAButton, BWASpinner } from '@app/components/atoms';
import launchUrl from '@app/assets/illustrations/launch.svg';
import welcomeUrl from '@app/assets/illustrations/welcome.svg';

import { useDispatch, useSelect } from '@wordpress/data';
import { useState, useEffect } from '@wordpress/element';

import { userTrigger } from '@app/functions';
import { Fragment } from 'react';

export const LaunchStep = () => {
    const [isLaunching, setIsLaunching] = useState(false);
    const comingSoon = useSelect((select) => {
		return select('bluehost/plugin').getSetting('comingSoon');
	}, []);

    const { toggleSetting } = useDispatch('bluehost/plugin');
    const toggleComingSoon = event => { 
        userTrigger(event, () => {
            setIsLaunching(true)
            toggleSetting('comingSoon').then( () => {
                setIsLaunching(false);
            })
        })
    }

    const buttonText = () => {
        if ( isLaunching ) {
            return comingSoon ? __('Launching...', 'bluehost-wordpress-plugin') : __('Reverting...', 'bluehost-wordpress-plugin');
        }

        return comingSoon ? __('Launch your site', 'bluehost-wordpress-plugin') : __('Restore Coming Soon', 'bluehost-wordpress-plugin');
    }

    useEffect(() => {
        const adminBar = document.getElementById('wp-admin-bar-mojo-home');
        if ( adminBar ) {
            adminBar.style.display = ! comingSoon ? 'none' : 'block';
        }
	}, [comingSoon]);

    const ComingSoon = () => {
        return (
            <Fragment>
                <img className="illustration" src={launchUrl} alt={__("Person on spaceship with laptop.", 'bluehost-wordpress-plugin')} />
                <p>{__("Your site has a \"coming soon\" message, which lets people know you're working on it. Wondering if you’re ready to launch? Check out", 'bluehost-wordpress-plugin')} <a href='https://www.bluehost.com/help/article/website-publish-checklist?utm_content=onboarding_site_publish_checklist&utm_term=website%20pre-publishing&utm_source=wp-admin%2Fadmin.php%3Fpage%3Dbluehost%23%2Fhome%2Fonboarding&utm_medium=bluehost_plugin' target="_blank">{__('our website pre-publishing checklist', 'bluehost-wordpress-plugin')}</a> {__("and then launch with confidence!", 'bluehost-wordpress-plugin')}</p>
            </Fragment>
        )
    }

    const LiveSite = () => {
        return (
            <Fragment>
                <img className="illustration" src={welcomeUrl} alt={__("People jumping and celebrating.", 'bluehost-wordpress-plugin')} />
                <p>{__("Nice going! Your website is now live to the internet for everyone to visit. Reach out anytime you need help or have questions about next steps!", 'bluehost-wordpress-plugin')}</p>
            </Fragment>
        )
    }


    const StepContents = () => {
        if ( comingSoon ) {
            return <ComingSoon />
        }
        
        return <LiveSite />
    }

    return(
        <BaseStep>
           <StepContents />
           <BWAButton 
                isPrimary 
                onClick={toggleComingSoon} 
                onKeyDown={toggleComingSoon}
                disabled={isLaunching}
            >
                {sprintf('%s', buttonText)}
            </BWAButton>            
        </BaseStep>
    );
}

export default LaunchStep;