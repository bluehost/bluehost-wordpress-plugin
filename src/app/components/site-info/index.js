import { LockClosedIcon, LockOpenIcon } from "@heroicons/react/24/outline";
import { Button } from "@yoast/ui-library";
import { BluehostIcon, WordPressIcon } from "../icons";

export const SiteInfoBar = () => {
    const { siteurl, sitetitle } = window.WPPB;
    const parsedUrl = new URL(siteurl);
    const siteDomain = parsedUrl.hostname;
    const hasSSL = parsedUrl.protocol.includes("https");

    const renderPadLock = () => {
        if (hasSSL) {
            return <LockClosedIcon className="yst-w-auto yst-h-3.5 yst-text-[#1CD67D]" />
        }

        return <LockOpenIcon className="yst-w-auto yst-h-3.5 yst-text-[#d61c1c]" />
    }

    return (
        <div className="wppb-app-site-info yst-bg-[#212936] yst-w-full yst-py-6 yst-px-8 yst-mb-8 yst-border yst-border-line yst-rounded-lg">
            <div className="yst-flex yst-items-center yst-gap-4">

                <div className="yst-grow yst-flex yst-flex-col yst-gap-1.5">
                    <h3 className="yst-text-white yst-text-2xl yst-font-semibold">{sitetitle}</h3>
                    <div className="yst-flex yst-items-center yst-gap-3 yst-font-medium">
                        <div className="yst-flex yst-items-center yst-gap-1">
                            {renderPadLock()}
                            <span className="yst-text-white yst-text-tiny">{siteDomain}</span>
                        </div>
                    </div>
                </div>

                <div className="yst-grow yst-flex yst-items-center yst-justify-end yst-gap-3">
                    <Button 
                        as="a"
                        href="https://www.bluehost.com/web-hosting/cplogin"
                        target="_blank"
                        variant="primary" 
                        className="yst-bg-[#383F4A] yst-text-tiny">
                        <BluehostIcon />
                        Bluehost Account
                    </Button>
                    <Button 
                        as="a" 
                        href={siteurl} 
                        target="_blank" 
                        variant="primary" 
                        className="yst-bg-white yst-text-[#212936] yst-text-tiny"
                    >
                        <WordPressIcon />
                        View Site
                    </Button>
                </div>
                
            </div>
        </div>
    );
}