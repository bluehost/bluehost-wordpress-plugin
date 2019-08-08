/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';
import { Dashicon } from '@wordpress/components';

/**
 * Internal dependencies
 */
import './style.scss';

export default class HomeSectionRow extends Component {

	getIcon( icon, iconSize ) {
		if ( typeof icon === 'string' ) {
			return ( <Dashicon icon={ icon ? icon : '' } size={ iconSize } /> );
		}
		return icon;
	}

	render() {
		const { icon, iconSize, title, desc, className, children } = this.props;
		const rowIcon = this.getIcon( icon, iconSize );
		return (
			<div className={ 'bluehost-home-section-row pure-g ' + className }>
				<div className="pure-u-1 pure-u-sm-1-2 details">
					<h3>{rowIcon} <span className={ 'title' }>{ title }</span></h3>
					<p>{ desc }</p>
				</div>
				<div className="pure-u-1 pure-u-sm-1-2 action">{ children }</div>
			</div>
		);
	}
}
