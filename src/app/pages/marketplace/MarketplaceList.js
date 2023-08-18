import MarketplaceItem from "./MarketplaceItem";

const MarketplaceList = ({ products }) => {
    return (
        <div className="wppbh-app-marketplace-list nfd-grid nfd-gap-6 nfd-grid-cols-1 min-[1120px]:nfd-grid-cols-2 min-[1400px]:nfd-grid-cols-3">
            {products.map((product) => (<MarketplaceItem key={product.id} product={product} />))}
        </div>
    );
}

export default MarketplaceList;