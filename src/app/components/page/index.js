import classNames from "classnames";

export const Page = ({ className, children }) => {
    return (
        <div className={
            classNames(
                "wppb-page", 
                className,
                "yst-flex yst-flex-col yst-gap-8",
            )
        }>
            {children}
        </div>
    );
}