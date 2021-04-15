import { __ } from  '@wordpress/i18n';
export const Error = () => {
    return (
        <div>
            <p>{__('Oops, something wen\'t wrong', 'bluehost-wordpress-plugin')}</p>
        </div>
    )
}

export default Error;