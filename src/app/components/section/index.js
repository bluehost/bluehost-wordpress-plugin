import { Button, Title } from "@newfold/ui-component-library";
import classNames from "classnames";

export const SectionContainer = ({ className, children }) => {
    return (
        <div className={classNames("wppbh-app-section-container nfd-bg-white nfd-w-full nfd-rounded-lg nfd-shadow", className)}>
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
                    "wppbh-app-section-header nfd-p-8 nfd-border-b nfd-border-line nfd-flex nfd-flex-col xl:nfd-flex-row nfd-items-baseline nfd-gap-4",
                    className)
            }>
            <div className="xl:nfd-w-7/12 nfd-flex nfd-flex-col nfd-gap-3">
                {title && <h2 className="nfd-text-2xl nfd-font-medium nfd-text-title">{title}</h2>}
                {subTitle && <p>{subTitle}</p>}
            </div>
            {(primaryAction.title || secondaryAction.title) &&
                <div className="xl:nfd-w-5/12 nfd-flex nfd-flex-row-reverse nfd-flex-wrap nfd-gap-3">
                    {primaryAction.title &&
                        <Button
                            as="button"
                            variant="primary"
                            className={classNames("nfd-w-full min-[400px]:nfd-w-auto", primaryAction.className)}
                            onClick={primaryAction.onClick}
                        >
                            {primaryAction.title}
                        </Button>
                    }
                    {secondaryAction.title &&
                        <Button
                            as="button"
                            variant="secondary"
                            className={classNames("nfd-w-full min-[400px]:nfd-w-auto", secondaryAction.className)}
                            onClick={secondaryAction.onClick}
                        >
                            {secondaryAction.title}
                        </Button>
                    }
                </div>
            }

        </div>
    );
}

export const SectionContent = ({ separator = false, className, children }) => {
    return (
        <div className={classNames("wppbh-app-section-content nfd-p-8 nfd-pb-0", className)}>
            <div className={
                classNames(
                    "nfd-pb-8",
                    separator && "nfd-border-b nfd-border-[#CBD5E1]"
                )
            }>
                {children}
            </div>
        </div>
    );
}

export const SectionSettings = ({ className, children, title, description }) => {
    return (
        <section className={classNames("nfd-grid xl:nfd-grid-cols-3 xl:nfd-gap-12", className)}>
            <div className="nfd-col-span-1">
                <div className="nfd-max-w-screen-sm">
                    <Title as="h3" size="4">
                        {title}
                    </Title>
                    {description && <div className="nfd-mt-2">{description}</div>}
                </div>
            </div>

            <fieldset className="nfd-min-w-0 nfd-mt-8 xl:nfd-mt-0 xl:nfd-col-span-2">
                <legend className="nfd-sr-only">{title}</legend>
                <div className="st-space-y-8">
                    {children}
                </div>
            </fieldset>
        </section>
    );
}