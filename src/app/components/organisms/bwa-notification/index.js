import { compose } from '@wordpress/compose';
import { withSelect, withDispatch } from '@wordpress/data';
import { Component, Fragment } from '@wordpress/element';
import filter from 'lodash/filter';

class Notice extends Component {

	constructor(props) {
		super(props);
		this.component = null;
		this.setComponentRef = (element) => {
			this.component = element;
		}
		this.onClose = (e) => {
			e.preventDefault();
			this.props.onDismiss(this.props.id);
		}
	}

	componentDidMount() {
		if (this.component) {
			const closeButton = this.component.querySelector('[data-action="close"]')
			if (closeButton) {
				closeButton.addEventListener('click', this.onClose);
			}
		}
	}

	componentWillUnmount() {
		if (this.component) {
			const closeButton = this.component.querySelector('[data-action="close"]')
			if (closeButton) {
				closeButton.removeEventListener('click', this.onClose);
			}
		}
	}

	filterLocations(locations) {
		return filter(
			locations,
			({context, pages}) => {
				return (
					context === 'bluehost-plugin' &&
					(
						typeof pages === 'string' ||
						(
							Array.isArray(pages) &&
							pages.includes(window.location.hash)
						)
					)
				)
			}
		);
	}

	render() {

		const {id, content} = this.props;
		const locations = this.filterLocations(this.props.locations);

		// If there are no applicable locations, don't render anything.
		if (!locations || !locations.length) {
			return false;
		}

		// If the current context is valid, render the notice.
		return (
			<div
				className="bluehost-notice"
				dangerouslySetInnerHTML={ {__html: content} }
				key={ id }
				ref={ this.setComponentRef }
			/>
		);
	}

}

const Notification = ({notifications, onDismiss}) => {
	return (
		<Fragment>
			{
				notifications.map(
					notification => (
						<Notice
							{ ...notification }
							key={ notification.id }
							onDismiss={ onDismiss }
						/>
					)
				)
			}
		</Fragment>
	);
}

export default compose(
	withSelect((select) => ({
		notifications: select('bluehost/plugin').getNotifications(),
	})),
	withDispatch((dispatch) => ({
		onDismiss: dispatch('bluehost/plugin').dismissNotification,
	})),
)(Notification);
