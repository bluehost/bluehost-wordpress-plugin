/**
 * WordPress dependencies
 */
import { Component } from '@wordpress/element';

export default class HomeSection extends Component {
	render() {
		const { title, className, children } = this.props;
		if ( !children ) {
			return null;
		}
		return (
			<section className={ 'home-section ' + className }>
				<h2>{ title }</h2>
				<section className="bordered-box">
					{ children }
				</section>
			</section>
		);
	}
}
