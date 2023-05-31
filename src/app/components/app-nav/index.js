import { Modal, SidebarNavigation } from "@yoast/ui-library"
import { NavLink, useLocation } from 'react-router-dom';
import { useViewportMatch } from '@wordpress/compose';
import Logo from "./logo";
import { topRoutes, utilityRoutes } from "../../data/routes";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useEffect } from 'react';
import { handleHelpLinksClick } from "../../util/helpers";

export const SideNavHeader = () => {
    return (
        <header className="yst-pt-2 yst-px-3 yst-mb-6 yst-space-y-6">
            <Logo />
        </header>
    );
}

export const SideNavMenu = () => {
    const primaryMenu = () => {
        return (
            <ul className="yst-flex yst-flex-col yst-gap-1.5">
                {topRoutes.map((page) => (

                    <SideNavMenuItem
                        key={page.name}
                        label={page.title}
                        name={page.name}
                        icon={page.Icon}
                        path={page.name}
                        action={page.action}
                        subItems={page.subRoutes}
                    />

                ))}
            </ul>
        );
    }

    const secondaryMenu = () => {
        return (
            <ul className="yst-flex yst-flex-col yst-gap-1.5 yst-mt-4 yst-pt-4 yst-border-t yst-border-[#D8DEE4]">
                {utilityRoutes.map((page) => (

                    <SideNavMenuItem
                        key={page.name}
                        label={page.title}
                        name={page.name}
                        icon={page.Icon}
                        path={page.name}
                        action={page.action}
                        subItems={page.subRoutes}
                    />

                ))}
            </ul>
        );
    }

    const SubMenusManager = () => {
        // close any open submenus
        const subMenus = document.querySelectorAll('.wppbh-app-navitem-submenu');
        subMenus.forEach((subMenu) => {
            subMenu.classList.add('yst-hidden');
        });

        // open active's submenu if it exists
        const activeMenu = document.querySelector('.wppbh-app-sidenav .active');
        if (activeMenu && null !== activeMenu.nextSibling && activeMenu.nextSibling.classList.contains('wppbh-app-navitem-submenu')) {
            activeMenu.nextSibling.classList.toggle('yst-hidden');
        }
    }

    useEffect(() => {
        SubMenusManager();
        document.onclick = SubMenusManager;
    });

    return (
        <div className="yst-px-0.5 yst-space-y-6">
            {primaryMenu()}
            {secondaryMenu()}
        </div>
    );
}

export const SideNavMenuItem = ({ label, name, icon: Icon = null, path, action, subItems }) => {
    return (
        <li className="yst-mb-0">
            <NavLink
                onClick={(action && action instanceof Function) ? action : null}
                to={path}
                className={`wppbh-app-navitem wppbh-app-navitem-${label} yst-flex yst-items-center yst-gap-3 yst-px-3 yst-py-2 yst-rounded-md yst-text-sm yst-font-medium yst-text-title leading-none hover:yst-bg-slate-50 [&.active]:yst-bg-[#E2E8F0]`}
            >
                {Icon &&
                    <Icon className="yst-flex-shrink-0 yst--ml-1 yst-h-6 yst-w-6" />
                }
                {label}
            </NavLink>

            {subItems && subItems.length > 0 &&
                <ul className="wppbh-app-navitem-submenu yst-hidden yst-ml-8 yst-m-2 yst-space-y-1.5">
                    {subItems.map((subItem) => (
                        <SideNavMenuSubItem
                            label={subItem.title}
                            name={subItem.name}
                            path={subItem.name}
                            action={subItem.action}
                        />
                    ))}
                </ul>
            }
        </li>
    );
}

export const SideNavMenuSubItem = ({ label, name, path, action }) => {
    return (
        <li className="yst-m-0 yst-pb-1">
            <NavLink
                onClick={(action && action instanceof Function) ? action : null}
                to={path} 
                className={`wppbh-app-subnavitem wppbh-app-subnavitem-${label} yst-flex yst-items-center yst-gap-3 yst-px-3 yst-py-2 yst-rounded-md yst-text-sm yst-font-medium yst-text-body leading-none hover:yst-bg-slate-50 [&.active]:yst-bg-[#E2E8F0] [&.active]:yst-text-title`}
            >
                {label}
            </NavLink>
        </li>
    );
}

export const SideNav = () => {
    return (
        <aside className="wppbh-app-sidenav yst-shrink-0 yst-hidden min-[783px]:yst-block yst-pb-6 yst-bottom-0 yst-w-56">
            <SidebarNavigation>
                <SidebarNavigation.Sidebar>
                    <SideNavHeader />
                    <SideNavMenu />
                </SidebarNavigation.Sidebar>
            </SidebarNavigation>
        </aside>
    );
}

export const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    let location = useLocation();
    // Close mobile nav when location changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <header className="yst-sticky yst-z-30 yst-top-0 min-[600px]:yst-top-[46px] yst-border-b yst-border-line">
            <div className="yst-flex yst-justify-between yst-items-center yst-bg-white">

                <div className="yst-px-4">
                    <Logo />
                </div>
                <button
                    role="button"
                    className="yst-h-16 yst-px-4 yst-text-body yst-flex yst-items-center focus:yst-outline-none focus:yst-ring-2 focus:yst-ring-inset focus:yst-ring-primary"
                    onClick={() => { setIsOpen(true) }}
                >
                    <span className="yst-sr-only">Open Navingation Menu</span>
                    <Bars3Icon className="yst-w-6 yst-h-6" />
                </button>

                <Modal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    className="wppbh-app-sidenav-mobile yst-z-40"
                    initialFocus
                >
                    <Modal.Panel className="yst-p-0 yst-overflow-visible">
                        <div className="wppbh-app-sidenav yst-p-5 yst-max-h-[70vh] yst-overflow-y-auto">
                            <SideNavMenu />
                        </div>
                    </Modal.Panel>
                </Modal>

            </div>
        </header>
    );
}

export const AppNav = () => {
    const isLargeViewport = useViewportMatch('medium');
    handleHelpLinksClick();

    return (
        <>
            {(isLargeViewport && <SideNav />) || <MobileNav />}
        </>

    );
}