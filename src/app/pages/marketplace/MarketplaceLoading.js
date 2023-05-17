import { Spinner } from "@yoast/ui-library";

const MarketplaceLoading = () => {
    return (
        <div className="yst-h-96 yst-flex yst-justify-center yst-items-center yst-text-primary">
            <Spinner size="8" />
        </div>
    );
}

export default MarketplaceLoading;