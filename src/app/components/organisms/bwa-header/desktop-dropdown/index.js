/**
 * `@wordpress dependencies`
 */
/**
 * WordPress dependencies
 */
import { Dropdown } from '@wordpress/components';
/**
 * `Project dependencies`
 */
/**
 * External dependencies
 */
import { UserIcon } from '@/assets';

/**
 * `Component dependencies`
 */
/**
 * Internal dependencies
 */
import './style.scss';
import userMenuItems from '../user-menu';
/**
 * 
 */
const DesktopDropdown = () => (
	<Dropdown
		className="bluehost-nav-wrap-element user-menu"
		contentClassName="bluehost-nav-popup"
		position="120px 24px"
		renderToggle={ ( { isOpen, onToggle } ) => (
			<UserIcon onClick={ onToggle } aria-expanded={ isOpen } />
		) }
		renderContent={ () => (
			<div id="bluehost-nav-popup-wrap">
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
		) }
	/>
);

export default DesktopDropdown;
