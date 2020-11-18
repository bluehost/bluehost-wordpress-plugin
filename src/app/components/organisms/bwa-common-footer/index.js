/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

const BWACommonFooter = ({ ...props}) => (
	<footer { ...props } tabIndex="-1" style={{ position: 'absolute', bottom: '5px', marginTop: '4rem', width: '100%'}}>
	</footer>
);

export default BWACommonFooter;
