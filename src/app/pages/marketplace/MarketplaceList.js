import MarketplaceItem from "./MarketplaceItem";

const MarketplaceList = ({ products }) => {
    return (
        <div className="wppb-app-marketplace-list yst-grid yst-gap-6 yst-grid-cols-1 md:yst-grid-cols-2 xl:yst-grid-cols-3">
            {products.map((product) => (<MarketplaceItem key={product.id} product={product} />))}
        </div>
    );
}

export default MarketplaceList;