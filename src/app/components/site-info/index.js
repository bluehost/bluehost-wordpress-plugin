import { LockClosedIcon, LockOpenIcon } from "@heroicons/react/24/outline";
import { Button, Link } from "@yoast/ui-library";

export const SiteInfoBar = () => {
    const siteTitle = "The Wild Fig";
    const siteDomain = "ezu.slf.mybluehost.me";
    const isTempDomain = true;
    const hasSSL = true;

    const renderPadLock = () => {
        if (hasSSL) {
            return <LockClosedIcon className="yst-w-auto yst-h-3.5 yst-text-[#1CD67D]" />
        }

        return <LockOpenIcon className="yst-w-auto yst-h-3.5 yst-text-[#d61c1c]" />
    }

    return (
        <div className="wppb-app-site-info yst-bg-[#212936] yst-w-full yst-py-6 yst-px-8 yst-mb-8 yst-border yst-border-[#E2E8F0] yst-rounded-lg">
            <div className="yst-flex yst-items-center yst-gap-4">

                <div className="yst-grow yst-flex yst-flex-col yst-gap-1.5">
                    <h3 className="yst-text-white yst-text-2xl yst-font-semibold">{siteTitle}</h3>
                    <div className="yst-flex yst-items-center yst-gap-3 yst-font-medium">
                        <div className="yst-flex yst-items-center yst-gap-1">
                            {renderPadLock()}
                            <span className="yst-text-white yst-text-tiny">{siteDomain}</span>
                        </div>
                        {isTempDomain &&
                            <Link 
                                href="https://bluehost.com" 
                                target="_blank"
                                className="yst-text-[#D2D5DA] yst-text-tiny"
                            >
                                <span>Purchase a Domain</span>
                            </Link>
                        }
                    </div>
                </div>

                <div className="yst-grow yst-flex yst-items-center yst-justify-end yst-gap-3">
                    <Button variant="primary">Bluehost Account</Button>
                    <Button variant="primary">View Site</Button>
                </div>
            </div>
        </div>
    );
}