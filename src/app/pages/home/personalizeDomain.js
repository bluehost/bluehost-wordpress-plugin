import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { useContext } from "@wordpress/element";
import { Button, Card, Title } from "@yoast/ui-library";
import { Link } from "react-router-dom";
import AppStore from "../../data/store";

export function PersonalizeDomain() {
  let { store } = useContext(AppStore);
  return (
    <Card>
      <Card.Content>
        <Title size={4}>Personalize your domain</Title>
        <div className="yst-mt-3 yst-mb-4">
          <p>
            Your current domain is: <strong>{store.siteurl}</strong>
          </p>
          <p className="yst-mt-6">
            Improve your online presence with a custom domain
          </p>
        </div>
        <p>
          <Link>Learn More </Link>
          <ArrowLongRightIcon className="yst-text-black yst-w-[1.125rem]" />
        </p>
      </Card.Content>
      <Card.Footer className="yst-flex yst-gap-3 yst-justify-end">
        <Button type="button" variant="secondary">
          Search Domains
        </Button>
        <Button type="button" variant="primary">
          Buy domain
        </Button>
      </Card.Footer>
    </Card>
  );
}
