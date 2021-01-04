import './style.scss';

import { Notice } from '@wordpress/components';
import classNames from 'classnames';

const BWANotice = ( { status, className = '', ...props } ) => {
	return (
		<Notice { ...props } className={ classNames( {
			bluehost: true,
			'bordered-box': true,
			[ className ]: className.length,
			'is-warning': 'warning' === status,
			'is-success': 'success' === status,
		} ) } />
	);
};

export default BWANotice;
