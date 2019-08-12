import './style.scss';
import { __ } from '@wordpress/i18n';
import { AppButton as Button } from '@/components';
import { Component } from '@wordpress/element';
import { ReactComponent as WarningIcon } from '@/assets/warning.svg';
import { ReactComponent as ErrorStateIllustration } from '@/assets/error-state.svg';

class AppError extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <div id="app-error">
                <div className="warning-icon-wrap">
                    <WarningIcon className="animated heartBeat" />
                </div>
                <h3 className="animated fadeIn">{__( 'There was a problem loading the Bluehost Plugin.')}</h3>
                <p className="cta-wrap animated fadeIn">{__( 'This usually happens when another plugin is out-of-date or incompatible.')}<br />{__('Get in touch and we\'ll sort out the issue.')}</p>
                <div className="cta-wrap animated fadeIn">
                    <Button href="https://bluehost.com/support" isPrimary>{__('Contact Support')}</Button>
                </div>
                {this.props.errorLogged && (
                    <div>
                        Error logged!.
                    </div>
                )}
                <div className="error-illustration-wrap animated fadeIn">
                    <ErrorStateIllustration />
                </div>
            </div>
        );
    }
}

export default AppError;