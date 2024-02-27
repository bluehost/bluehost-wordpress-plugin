import { useEffect, useState } from '@wordpress/element';
import { useViewportMatch } from '@wordpress/compose';
import { Modal, SidebarNavigation } from '@newfold/ui-component-library';
import { NavLink, useLocation } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { topRoutes, utilityRoutes } from 'App/data/routes';
import { handleHelpLinksClick } from '../../util/helpers';
import Logo from './logo';

export const SideNavHeader = () => {
	return (
		<header className="nfd-pt-2 nfd-px-3 nfd-mb-6 nfd-space-y-6">
			<Logo />
		</header>
	);
};

export const SideNavMenu = () => {
	const location = useLocation();

	const primaryMenu = () => {
		return (
			<ul className="nfd-flex nfd-flex-col nfd-gap-1.5">
				{ topRoutes.map( ( page ) => (
					true === page.condition && (
						<SideNavMenuItem
							key={ page.name }
							label={ page.title }
							name={ page.name }
							icon={ page.Icon }
							path={ page.name }
							action={ page.action }
							subItems={ page.subRoutes }
						/>
					)
				) ) }
			</ul>
		);
	};

	const secondaryMenu = () => {
		return (
			<ul className="nfd-flex nfd-flex-col nfd-gap-1.5 nfd-mt-4 nfd-pt-4 nfd-border-t nfd-border-[#D8DEE4]">
				{ utilityRoutes.map( ( page ) => (
					<SideNavMenuItem
						key={ page.name }
						label={ page.title }
						name={ page.name }
						icon={ page.Icon }
						path={ page.name }
						action={ page.action }
						subItems={ page.subRoutes }
					/>
				) ) }
			</ul>
		);
	};

	const SubMenusManager = () => {
		// close any open submenus
		const subMenus = document.querySelectorAll(
			'.wppbh-app-navitem-submenu'
		);
		subMenus.forEach( ( subMenu ) => {
			subMenu.classList.add( 'nfd-hidden' );
		} );

		// open active's submenu if it exists
		const activeMenu = document.querySelector(
			'.wppbh-app-sidenav .active'
		);
		if (
			activeMenu &&
			null !== activeMenu.nextSibling &&
			activeMenu.nextSibling.classList.contains(
				'wppbh-app-navitem-submenu'
			)
		) {
			activeMenu.nextSibling.classList.remove( 'nfd-hidden' );
		}
	};

	useEffect( () => {
		SubMenusManager();
		document.onclick = SubMenusManager;
	}, [ location ] );

	return (
		<div className="nfd-px-0.5 nfd-space-y-6">
			{ primaryMenu() }
			{ secondaryMenu() }
		</div>
	);
};

export const SideNavMenuItem = ( {
	label,
	icon: Icon = null,
	path,
	action,
	subItems,
} ) => {
	return (
		<li className="nfd-mb-0">
			<NavLink
				onClick={ action && action instanceof Function ? action : null }
				to={ path }
				className={ `wppbh-app-navitem wppbh-app-navitem-${ label } nfd-flex nfd-items-center nfd-gap-3 nfd-px-3 nfd-py-2 nfd-rounded-md nfd-text-sm nfd-font-medium nfd-text-title leading-none hover:nfd-bg-slate-50 [&.active]:nfd-bg-[#E2E8F0]` }
			>
				{ Icon && (
					<Icon className="nfd-flex-shrink-0 nfd--ml-1 nfd-h-6 nfd-w-6" />
				) }
				{ label }
			</NavLink>

			{ subItems && subItems.length > 0 && (
				<ul className="wppbh-app-navitem-submenu nfd-hidden nfd-ml-8 nfd-m-2 nfd-space-y-1.5">
					{ subItems.map( ( subItem ) => (
						<SideNavMenuSubItem
							key={ subItem.name }
							label={ subItem.title }
							name={ subItem.name }
							path={ subItem.name }
							action={ subItem.action }
						/>
					) ) }
				</ul>
			) }
		</li>
	);
};

export const SideNavMenuSubItem = ( { label, path, action } ) => {
	return (
		<li className="nfd-m-0 nfd-pb-1">
			<NavLink
				onClick={ action && action instanceof Function ? action : null }
				to={ path }
				className={ `wppbh-app-subnavitem wppbh-app-subnavitem-${ label } nfd-flex nfd-items-center nfd-gap-3 nfd-px-3 nfd-py-2 nfd-rounded-md nfd-text-sm nfd-font-medium nfd-text-body leading-none hover:nfd-bg-slate-50 [&.active]:nfd-bg-[#E2E8F0] [&.active]:nfd-text-title` }
			>
				{ label }
			</NavLink>
		</li>
	);
};

export const SideNav = () => {
	return (
		<aside className="wppbh-app-sidenav nfd-shrink-0 nfd-hidden min-[783px]:nfd-block nfd-pb-6 nfd-bottom-0 nfd-w-56">
			<SidebarNavigation>
				<SidebarNavigation.Sidebar>
					<SideNavHeader />
					<SideNavMenu />
				</SidebarNavigation.Sidebar>
			</SidebarNavigation>
		</aside>
	);
};

export const MobileNav = () => {
	const [ isOpen, setIsOpen ] = useState( false );

	const location = useLocation();
	// Close mobile nav when location changes
	useEffect( () => {
		setIsOpen( false );
	}, [ location ] );

	return (
		<header className="nfd-sticky nfd-z-30 nfd-top-0 min-[600px]:nfd-top-[46px] nfd-border-b nfd-border-line">
			<div className="nfd-flex nfd-justify-between nfd-items-center nfd-bg-white">
				<div className="nfd-px-4">
					<Logo />
				</div>
				<button
					className="nfd-h-16 nfd-px-4 nfd-text-body nfd-flex nfd-items-center focus:nfd-outline-none focus:nfd-ring-2 focus:nfd-ring-inset focus:nfd-ring-primary"
					onClick={ () => {
						setIsOpen( true );
					} }
				>
					<span className="nfd-sr-only">Open Navingation Menu</span>
					<Bars3Icon className="nfd-w-6 nfd-h-6" />
				</button>

				<Modal
					isOpen={ isOpen }
					onClose={ () => setIsOpen( false ) }
					className="wppbh-app-sidenav-mobile nfd-z-40"
					initialFocus
				>
					<Modal.Panel className="nfd-p-0 nfd-overflow-visible">
						<div className="wppbh-app-sidenav nfd-p-5 nfd-max-h-[70vh] nfd-overflow-y-auto">
							<SideNavMenu />
						</div>
					</Modal.Panel>
				</Modal>
			</div>
		</header>
	);
};

export const AppNav = () => {
	const isLargeViewport = useViewportMatch( 'medium' );
	handleHelpLinksClick();

	return <>{ ( isLargeViewport && <SideNav /> ) || <MobileNav /> }</>;
};
