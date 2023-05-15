import { Button } from "@yoast/ui-library";
import classNames from "classnames";

export const SectionContainer = ({ className, children }) => {
    return (
        <div className={classNames("wppb-app-section-container yst-w-full yst-shadow", className)}>
            {children}
        </div>
    );
}

export const SectionHeader = ({
    title,
    subTitle,
    className,
    primaryAction = { title: false, className: false, onClick: false },
    secondaryAction = { title: false, className: false, onClick: false }
}) => {
    return (
        <div
            className={
                classNames(
                    "wppb-app-section-header yst-p-8 yst-bg-white yst-border-b yst-border-line yst-rounded-t-lg yst-flex yst-items-baseline yst-gap-4",
                    className)
            }>
            <div className="yst-w-7/12 yst-flex yst-flex-col yst-gap-3">
                {title && <h2 className="yst-text-2xl yst-font-medium yst-text-title">{title}</h2>}
                {subTitle && <p className="yst-text-body">{subTitle}</p>}
            </div>
            <div className="yst-w-5/12 yst-flex yst-flex-row-reverse yst-gap-3">
                {primaryAction.title && <Button as="button" variant="primary" className={primaryAction.className} onClick={primaryAction.onClick}>{primaryAction.title}</Button>}
                {secondaryAction.title && <Button as="button" variant="secondary" className={secondaryAction.className} onClick={secondaryAction.onClick}>{secondaryAction.title}</Button>}
            </div>
        </div>
    );
}

export const SectionContent = ({ separator = false, className, children }) => {
    return (
        <div className={classNames("wppb-app-section-content yst-p-8 yst-pb-0 yst-bg-white", className)}>
            <div className={
                classNames(
                    "yst-pb-8",
                    separator && "yst-border-b yst-border-[#CBD5E1]"
                )
                }>
                {children}
            </div>
        </div>
    );
}