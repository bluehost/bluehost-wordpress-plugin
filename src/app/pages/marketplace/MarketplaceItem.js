import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Button, Card, Link, Title } from "@newfold/ui-component-library";

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
            <Card.Header className="nfd-h-auto nfd-p-0">
                <img src={product.productThumbnailUrl} alt={product.name + ' thumbnail'} className="nfd-w-full nfd-aspect-video marketplace-item-image" />
            </Card.Header>

            <Card.Content className="nfd-flex nfd-flex-col nfd-gap-3">
                <Title as="h3" size="4" className="marketplace-item-title">
                    {product.name}
                </Title>
                <p>{product.description}</p>
                {product.secondaryCallToAction &&
                    <Link as="a" href={product.secondaryUrl} target="_blank" className="nfd-inline-flex nfd-items-center nfd-gap-1.5 nfd-w-max nfd-no-underline">
                        <span className="nfd-text-primary">{product.secondaryCallToAction}</span>
                        <ArrowRightIcon className="nfd-text-[#18181B] nfd-w-3" />
                    </Link>
                }
            </Card.Content>

            <Card.Footer className="nfd-flex nfd-justify-between nfd-items-baseline nfd-flex-wrap nfd-gap-2 marketplace-item-footer">
                <div className="nfd-flex nfd-flex-col nfd-items-center nfd-gap-2 nfd-text-[#1E293B] nfd-font-medium">
                    { product.price > 0 && product.price_formatted &&
                        <span className="nfd-bg-[#E2E8F0] nfd-py-1 nfd-px-3 nfd-rounded-full marketplace-item-price">{product.price_formatted}</span>
                    }
                    {/* full price */}
                    {product.full_price_formatted &&
                        <span className="nfd-line-through marketplace-item-fullprice">{product.full_price_formatted}</span>
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