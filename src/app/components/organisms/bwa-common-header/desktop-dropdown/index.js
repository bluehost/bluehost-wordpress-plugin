import './style.scss';

import { __ } from '@wordpress/i18n';
import { Dropdown, Button, Tooltip } from '@wordpress/components';
import { UserIcon } from '@app/assets';
import userMenuItems from '../user-menu';

const Contents = () => (
	<div id="bluehost-nav-popup-wrap" data-testid="desktop-dropdown-content">
		<div id="bluehost-nav-popup-inner">
			<ul>
				{ userMenuItems.map( ( item ) => (
					<li key={ item.href }>
						<a href={ item.href }>
							<span className={ [ 'bluehost-nav-popup-nav-icon' ] }>
								<span className={ [ 'menu-item-icon is-svg-' + item.color ] }><item.icon /></span> { item.label }
							</span>
						</a>
					</li>
				) ) }
			</ul>
		</div>
	</div>
)

const DesktopDropdown = () => {
	return (
		<Dropdown
			className="bluehost-nav-wrap-element user-menu"
			contentClassName="bluehost-nav-popup"
			position="top left"
			renderToggle={ ( { isOpen, onToggle, onClose } ) => {
				// console.log('renderToggle isOpen: ' + isOpen);
				return (
					<Tooltip text={__('Hosting Account Menu', 'bluehost-wordpress-plugin')}>
						<Button 
							onClick={ ! isOpen ? onToggle : onClose } 
							aria-expanded={ isOpen } 
							aria-label={__('Hosting Account Menu', 'bluehost-wordpress-plugin')}
							data-testid="desktop-dropdown-toggle"
						>
								<UserIcon />
						</Button>
					</Tooltip>
				)
			} }
			renderContent={ () => <Contents /> }
		/>
	)
};

export default DesktopDropdown;
