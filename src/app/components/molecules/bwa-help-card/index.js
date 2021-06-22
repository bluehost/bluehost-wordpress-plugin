import { __ } from '@wordpress/i18n';
import { SupportUrl } from '@app/assets';
import { BWABox, BWAButton, BWAHeading } from '@app/components/atoms';

import './style.scss'

const BWAHelpCard = ({ headingSize = 4}) => (
    <BWABox className="component-help-card">
        <BWAHeading level="h3" size={headingSize}>{__("Need some help?", 'bluehost-wordpress-plugin')}</BWAHeading>
        <img className="illustration" src={SupportUrl} alt={__('Support agent on headset and chat', 'bluehost-wordpress-plugin')} />
        <BWAHeading level="h4" size={4} style={{ textAlign: 'center' }}>{__('From DIY to full-service help', 'bluehost-wordpress-plugin')}</BWAHeading>
        <p className="description">{__('Call or chat 24/7 for support or let our experts to make your site.', 'bluehost-wordpress-plugin')}</p>
        <div className="cta">
            <BWAButton isSecondary href="#/card/help">Help Me</BWAButton>
        </div>
    </BWABox>
)

export default BWAHelpCard;