import { compose } from '@wordpress/compose';
import { withSelect, withDispatch } from '@wordpress/data';
import { Component, Fragment } from '@wordpress/element';
import filter from 'lodash/filter';
import { sendEvent } from '@app/functions';

class Notice extends Component {

	constructor(props) {
		super(props);

		// Set component ref
		this.component = null;
		this.setComponentRef = (element) => {
			this.component = element;
		}

		// Close handler
		this.onClose = (e) => {
			e.preventDefault();
			this.props.onDismiss(this.props.id);
		}

		// Button handler
		this.onButtonClick = (e) => {
			sendEvent(
				{
					action: 'bluehost-notification-click',
					data: {
						element: 'button',
						label: e.target.innerText,
						notificationId: props.id,
					}
				}
			)
		}

		// Link handler
		this.onLinkClick = (e) => {
			sendEvent(
				{
					action: 'bluehost-notification-click',
					data: {
						element: 'a',
						href: e.target.getAttribute('href'),
						label: e.target.innerText,
						notificationId: props.id,
					}
				}
			)
		}

	}

	componentDidMount() {
		if (this.component) {

			// Handle close action
			const closeButton = this.component.querySelector('[data-action="close"]');
			if (closeButton) {
				closeButton.addEventListener('click', this.onClose);
			}

			// Handle button clicks
			const buttons = Array.from(this.component.querySelectorAll('button'));
			if (buttons.length) {
				buttons.forEach(
					button => {
						if (button.getAttribute('data-action') !== 'close') {
							button.addEventListener('click', this.onButtonClick);
						}
					}
				)
			}

			// Handle links clicks
			const links = Array.from(this.component.querySelectorAll('a'));
			if (links.length) {
				links.forEach(
					link => {
						if (link.getAttribute('data-action') !== 'close') {
							link.addEventListener('click', this.onLinkClick);
						}
					}
				)
			}

		}
	}

	componentWillUnmount() {
		if (this.component) {

			// Remove close handler
			const closeButton = this.component.querySelector('[data-action="close"]')
			if (closeButton) {
				closeButton.removeEventListener('click', this.onClose);
			}

			// Remove button handlers
			const buttons = Array.from(this.component.querySelectorAll('button'));
			if (buttons.length) {
				buttons.forEach(
					button => {
						if (button.getAttribute('data-action') !== 'close') {
							button.removeEventListener('click', this.onButtonClick);
						}
					}
				)
			}

			// Remove link handlers
			const links = Array.from(this.component.querySelectorAll('a'));
			if (links.length) {
				links.forEach(
					link => {
						if (link.getAttribute('data-action') !== 'close') {
							link.removeEventListener('click', this.onLinkClick);
						}
					}
				)
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
