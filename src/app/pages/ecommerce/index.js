import { BWAAccountCard, BWAHelpCard } from "@app/components/molecules";
import { BWACommonTemplate } from "@app/components/templates";
import NewfoldECommerce from "@newfold-labs/wp-module-ecommerce";
import apiFetch from "@wordpress/api-fetch";
import { Modal } from "@wordpress/components";
import { useDispatch, useSelect } from "@wordpress/data";
import { useEffect, useState } from "@wordpress/element";
import { withRouter } from "react-router-dom";

import "@newfold-labs/wp-module-ecommerce/bluehost.css";
import "@newfold-labs/wp-module-ecommerce/styles.scss";
import "./styles.scss";

function EcommercePage({ match }) {
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
    useEffect,
    useState,
    apiFetch,
    Modal,
  };
  return (
    <BWACommonTemplate>
      <NewfoldECommerce
        state={eCommerceState}
        actions={eCommerceActions}
        wpModules={wpModules}
        section={match.params?.section ?? "general"}
      />
      <div className="grid-col-2">
        <BWAAccountCard />
        <BWAHelpCard />
      </div>
    </BWACommonTemplate>
  );
}

export default withRouter(EcommercePage);
