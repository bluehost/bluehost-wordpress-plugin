import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Button, Card, Link, Title } from "@yoast/ui-library";

const MarketplaceItem = ({ product }) => {
    const renderPrimaryCTA = () => {
        const supportsCTB = 'undefined' !== typeof nfdctb ? nfdctb.supportsCTB : false;

        if (supportsCTB && product.clickToBuyId) {
            return (
                <Button
                    as="a"
                    href={product.primaryUrl}
                    target="_blank"
                    data-action="load-nfd-ctb"
                    data-ctb-id={product.clickToBuyId}
                >
                    {product.primaryCallToAction}
                </Button>
            );
        } else {
            return (
                <Button
                    as="a"
                    href={product.primaryUrl}
                    target="_blank"
                >
                    {product.primaryCallToAction}
                </Button>
            );
        }
    };

    return (
        <Card className="wppbh-app-marketplace-item marketplace-item" id={`marketplace-item-${ product.id }`}>
            <Card.Header className="yst-h-auto yst-p-0">
                <img src={product.productThumbnailUrl} alt={product.name + ' thumbnail'} className="yst-w-full yst-aspect-video marketplace-item-image" />
            </Card.Header>

            <Card.Content className="yst-flex yst-flex-col yst-gap-3">
                <Title as="h3" size="4" className="marketplace-item-title">
                    {product.name}
                </Title>
                <p>{product.description}</p>
                {product.secondaryCallToAction &&
                    <Link as="a" href={product.secondaryUrl} target="_blank" className="yst-inline-flex yst-items-center yst-gap-1.5 yst-w-max yst-no-underline">
                        <span className="yst-text-primary">{product.secondaryCallToAction}</span>
                        <ArrowRightIcon className="yst-text-[#18181B] yst-w-3" />
                    </Link>
                }
            </Card.Content>

            <Card.Footer className="yst-flex yst-justify-between yst-items-baseline yst-flex-wrap yst-gap-2 marketplace-item-footer">
                <div className="yst-flex yst-flex-col yst-items-center yst-gap-2 yst-text-[#1E293B] yst-font-medium">
                    { product.price > 0 && product.price_formatted &&
                        <span className="yst-bg-[#E2E8F0] yst-py-1 yst-px-3 yst-rounded-full marketplace-item-price">{product.price_formatted}</span>
                    }
                    {/* full price */}
                    {product.full_price_formatted &&
                        <span className="yst-line-through marketplace-item-fullprice">{product.full_price_formatted}</span>
                    }
                </div>

                {product.primaryCallToAction && product.primaryUrl &&
                   renderPrimaryCTA()
                }
            </Card.Footer>
        </Card >
    );
}

export default MarketplaceItem;