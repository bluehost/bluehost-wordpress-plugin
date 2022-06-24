import { BWAAccountCard, BWAHelpCard } from "@app/components/molecules";
import { useSelect } from "@wordpress/data";
import { withRouter } from "react-router-dom";
import NewfoldECommerce from "../../../../vendor/newfold-labs/wp-module-ecommerce";

import "../../../../vendor/newfold-labs/wp-module-ecommerce/styles.scss";
import "./styles.scss";

function EcommercePage() {
  let brandPluginState = useSelect((select) => {
    let wp = select("bluehost/plugin");
    return {
      comingSoon: wp.getSetting("comingSoon"),
      isWooActive: wp.getSetting("isWooActive"),
    };
  });
  const eCommerceState = { wp: brandPluginState }; 
  return (
    <div style={{ margin: "27px 42px 0 24px" }}>
      <NewfoldECommerce state={eCommerceState} />
      <div className="grid-col-2">
        <BWAAccountCard />
        <BWAHelpCard />
      </div>
    </div>
  );
}

export default withRouter(EcommercePage);
