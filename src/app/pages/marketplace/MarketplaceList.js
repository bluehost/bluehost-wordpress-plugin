import MarketplaceItem from "./MarketplaceItem";

const MarketplaceList = ({ category }) => {
    const products = [1, 2, 3, 4, 5, 6, 7, 8];
    
    return (
        <div className="wppb-app-marketplace-list yst-grid yst-gap-6 yst-grid-cols-1 md:yst-grid-cols-2 xl:yst-grid-cols-3">
            {products.map((product) => (<MarketplaceItem key={product} />))}
        </div>
    );
}

export default MarketplaceList;