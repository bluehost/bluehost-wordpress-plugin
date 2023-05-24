import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { Button, Card, Title } from "@yoast/ui-library";
import { Link } from "react-router-dom";

export function PurchaseSitelock() {
  return (
    <Card>
      <Card.Content>
        <Title size={4}>Protect your store with SiteLock</Title>
        <p className="yst-mt-3 yst-mb-4">
          Protect your websites with SiteLock, the global leader in security
          products. On activation, SiteLock safeguards your website along with
          your visitors against cyberattacks automatically.
        </p>
        <p>
          <Link>Learn More </Link>
          <ArrowLongRightIcon className="yst-text-black yst-w-[1.125rem]" />
        </p>
      </Card.Content>
      <Card.Footer className="yst-flex yst-gap-3 yst-justify-end">
        <Button type="button" variant="primary">
          Purchase now
        </Button>
      </Card.Footer>
    </Card>
  );
}
