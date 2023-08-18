import { Spinner } from "@newfold/ui-component-library";

const MarketplaceLoading = () => {
    return (
        <div className="nfd-h-96 nfd-flex nfd-justify-center nfd-items-center nfd-text-primary">
            <Spinner size="8" />
        </div>
    );
}

export default MarketplaceLoading;