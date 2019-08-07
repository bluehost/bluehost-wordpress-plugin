/**
 * WordPress dependencies
 */
import { Speak } from '@wordpress/a11y';
import { Component } from '@wordpress/element';
/**
 * External dependencies
 */
import { withRouter } from 'react-router-dom';

/**
 * Internal dependencies
 */
import './style.scss';

class BluehostPage extends Component {
	componentDidMount() {
		const { location } = this.props;
		if ( location.state && location.state.setFocus ) {
			this.container.focus( { preventScroll: true } );
		}
	}

	render() {
		return (
			<section
				tabIndex="-1"
				ref={ ( container ) => ( this.container = container ) }
				className="bluehost-page">
				{ this.props.children }
			</section>
		);
	}
}

export default withRouter( BluehostPage );
