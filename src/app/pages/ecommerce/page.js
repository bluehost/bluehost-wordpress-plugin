import "@newfold-labs/wp-module-ecommerce";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useNotification } from "../../components/notifications/feed";
import { Page } from "../../components/page";
import "./styles.scss";

const NewfoldECommerce = window.NewfoldECommerce;

const ECommerce = () => {
    let params = useSearchParams();
    let location = useLocation();
    let navigate = useNavigate();
    let notify = useNotification();
    let state = { wp: { comingSoon: false }, params, location: location.pathname };
    let wpModules = { navigate, notify };
    let actions = { toggleComingSoon: () => Promise.resolve() };
    return (
        <Page>
            <NewfoldECommerce
                state={state}
                wpModules={wpModules}
                actions={actions}
            />
        </Page>
    );
}

export default ECommerce;