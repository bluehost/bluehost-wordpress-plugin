import { BWAAccountCard, BWAHelpCard } from "@app/components/molecules";
import apiFetch from "@wordpress/api-fetch";
import { Modal } from "@wordpress/components";
import { useDispatch, useSelect } from "@wordpress/data";
import { useState } from "@wordpress/element";
import { withRouter } from "react-router-dom";
import NewfoldECommerce from "../../../../vendor/newfold-labs/wp-module-ecommerce";

import "../../../../vendor/newfold-labs/wp-module-ecommerce/bluehost.scss";
import "../../../../vendor/newfold-labs/wp-module-ecommerce/styles.scss";
import "./styles.scss";

function EcommercePage() {
  let brandPluginState = useSelect((select) => {
    let store = select("bluehost/plugin");
    return {
      comingSoon: store.getSetting("comingSoon"),
      isWooActive: store.getSetting("isWooActive"),
    };
  });
  const eCommerceState = { wp: brandPluginState };
  const { toggleSetting } = useDispatch("bluehost/plugin");
  const eCommerceActions = {
    toggleComingSoon: async () => toggleSetting("comingSoon"),
  };
  const wpModules = {
    useState,
    apiFetch,
    Modal
  };
  return (
    <div style={{ margin: "27px 42px 0 24px" }}>
      <NewfoldECommerce
        state={eCommerceState}
        actions={eCommerceActions}
        wpModules={wpModules}
      />
      <div className="grid-col-2">
        <BWAAccountCard />
        <BWAHelpCard />
      </div>
    </div>
  );
}

export default withRouter(EcommercePage);
