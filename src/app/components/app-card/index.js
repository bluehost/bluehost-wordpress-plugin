/**
 * Internal dependencies
 */
import './style.scss';
/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';
import { Dashicon } from '@wordpress/components';

export default class AppCard extends Component {
	render() {
		const { icon, title, desc, className, children, isCentered } = this.props;
		const cardClass = className ? 'bluehost-card ' + className : 'bluehost-card';
		const centeredClass = isCentered ? ' is-centered' : '';
		const iconSize = isCentered ? 48 : 28;
		return (
			<div className={ cardClass + centeredClass }>
				<h3><Dashicon icon={ icon ? icon : '' } size={ iconSize } /> <span className={ 'title' }>{ title }</span></h3>
				<p>{ desc }</p>
				{ children }
			</div>
		);
	}
}
