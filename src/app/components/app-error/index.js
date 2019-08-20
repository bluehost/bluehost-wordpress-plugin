import './style.scss';
import { __ } from '@wordpress/i18n';
import { AppButton as Button } from '@/components';
import { ReactComponent as WarningIcon } from '@/assets/warning.svg';
import { ReactComponent as ErrorStateIllustration } from '@/assets/error-state.svg';

const AppError = () => (
    <div id="app-error">
        <div className="warning-icon-wrap">
            <WarningIcon className="animated heartBeat" />
        </div>
        <h3 className="animated fadeIn">{__( 'There was a problem loading the Bluehost Plugin.')}</h3>
        <p className="animated fadeIn">{__('Get in touch and we\'ll sort out the issue for you.')}</p>
        <div className="animated fadeIn" style={{textAlign: 'center', margin: '1rem auto 80px'}}>
            <Button href="https://bluehost.com/support" isPrimary>{__('Contact Support')}</Button>
        </div>
        <div className="error-illustration-wrap animated fadeIn">
            <ErrorStateIllustration />
        </div>
    </div>
);

export default AppError;