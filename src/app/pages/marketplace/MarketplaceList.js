import MarketplaceItem from "./MarketplaceItem";

const MarketplaceList = ({ products }) => {
    return (
        <div className="wppbh-app-marketplace-list yst-grid yst-gap-6 yst-grid-cols-1 min-[1120px]:yst-grid-cols-2 min-[1400px]:yst-grid-cols-3">
            {products.map((product) => (<MarketplaceItem key={product.id} product={product} />))}
        </div>
    );
}

export default MarketplaceList;