import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Button, Card, Link, Title } from "@yoast/ui-library";

const MarketplaceItem = (product) => {
    return (
            <Card className="wppb-app-marketplace-item">
                <Card.Header className="yst-h-auto yst-p-0">
                    <img src="https://picsum.photos/238/133" className="yst-w-full yst-aspect-video" />
                </Card.Header>

                <Card.Content className="yst-flex yst-flex-col yst-gap-3">
                    <Title as="h3" size="4">
                        Yoast Premium
                    </Title>
                    <p>SEO made easy! Improve your ranking in search engines, boost performance and visibility, get social previews, a redirect manager, internal linking suggestions and 24/7 premium support.</p>
                    <Link as="a" className="yst-inline-flex yst-items-center yst-gap-1.5 yst-w-max yst-no-underline">
                        <span className="yst-text-primary">Learn More</span>
                        <ArrowRightIcon className="yst-text-[#18181B] yst-w-3"/>
                    </Link>
                </Card.Content>

                <Card.Footer className="yst-flex yst-justify-between yst-items-baseline">
                    <div className="yst-flex yst-flex-col yst-items-center yst-gap-2 yst-text-[#1E293B] yst-font-medium">
                        {/* price */}
                        <span className="yst-bg-[#E2E8F0] yst-py-1 yst-px-3 yst-rounded-full">$129.99</span>
                        {/* full price */}
                        <span className="yst-line-through">$149.99</span>
                    </div>

                    <Button>Buy Now</Button>
                </Card.Footer>
            </Card>
    );
}

export default MarketplaceItem;