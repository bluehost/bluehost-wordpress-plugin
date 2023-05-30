import { OnboardingScreen } from "@newfold-labs/wp-module-ecommerce";
import { useContext } from "@wordpress/element";
import { useNotification } from "../../components/notifications/feed";
import AppStore from "../../data/store";
import { bluehostSettingsApiFetch } from "../../util/helpers";

export function WelcomeSection() {
  let { store, setStore } = useContext(AppStore);
  let notify = useNotification();
  const toggleComingSoon = () =>
    bluehostSettingsApiFetch(
      { comingSoon: !store.comingSoon },
      console.error,
      () => setStore({ ...store, comingSoon: !store.comingSoon })
    );
  return (
    <OnboardingScreen
      comingSoon={store.comingSoon}
      toggleComingSoon={toggleComingSoon}
      notify={notify}
    />
  );
}
