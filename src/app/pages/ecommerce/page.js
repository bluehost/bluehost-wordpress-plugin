import { NewfoldECommerce } from "@newfold-labs/wp-module-ecommerce";
import { useContext } from "@wordpress/element";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useNotification } from "../../components/notifications/feed";
import { Page } from "../../components/page";
import AppStore from "../../data/store";
import { bluehostSettingsApiFetch } from "../../util/helpers";
import "./styles.scss";

const ECommerce = () => {
  const { store, setStore } = useContext(AppStore);
  let [params] = useSearchParams();
  let location = useLocation();
  let navigate = useNavigate();
  let notify = useNotification();
  let state = {
    wp: { comingSoon: store?.comingSoon },
    params,
    location: location.pathname,
  };
  let wpModules = { navigate, notify };

  let actions = {
    toggleComingSoon: () =>
      bluehostSettingsApiFetch(
        { comingSoon: !store.comingSoon },
        console.error,
        (response) => {
          setStore({
            ...store,
            comingSoon: !store.comingSoon,
          });
        }
      ),
  };

  return (
    <Page>
      <NewfoldECommerce state={state} wpModules={wpModules} actions={actions} />
    </Page>
  );
};

export default ECommerce;
