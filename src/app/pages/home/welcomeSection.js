import {
  ArrowLongRightIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { SiteStatus } from "@newfold-labs/wp-module-ecommerce";
import { useContext } from "@wordpress/element";
import { Title } from "@yoast/ui-library";
import classNames from "classnames";
import {
  SectionContainer,
  SectionContent,
  SectionHeader,
} from "../../components/section";
import AppStore from "../../data/store";
import WelcomeIllustration from "../../images/section-home-welcome.png";
import { bluehostSettingsApiFetch, comingSoonAdminbarToggle } from "../../util/helpers";

function OnboardingCheckListItem({ children, isComplete }) {
  return (
    <li
      className={classNames(
        "yst-flex yst-gap-3",
        "yst-py-4 yst-px-5 yst-m-0",
        "yst-border-b yst-border-line last:yst-border-b-0",
        "yst-text-sm yst-cursor-pointer",
        "hover:yst-bg-canvas"
      )}
    >
      <CheckCircleIcon
        className={classNames(
          "yst-w-[1.125rem]",
          isComplete ? "yst-text-[#17B212]" : "yst-text-[#AAAFB8]"
        )}
      />
      <span className="yst-flex-1 yst-text-black">{children}</span>
      <ArrowLongRightIcon className="yst-text-black yst-w-[1.125rem]" />
    </li>
  );
}

const checkListItems = [
  "Add your store info",
  "Connect a payment processor",
  "Setup shipping options",
  "Configure tax settings",
  "Add a product",
];

export function WelcomeSection() {
  let { store, setStore } = useContext(AppStore);
  const toggleComingSoon = () =>
    bluehostSettingsApiFetch(
      { comingSoon: !store.comingSoon },
      console.error,
      (response) => {
        setStore({
          ...store,
          comingSoon: !store.comingSoon,
        });
        comingSoonAdminbarToggle(store.comingSoon);
      }
    );
  return (
    <SectionContainer>
      <SectionHeader title={"Home"} />
      <SectionContent className="wppbh-app-section-home">
        <div className="yst-flex yst-flex-col yst-gap-6">
          <div className="yst-grid yst-grid-cols-2 yst-gap-6">
            <div className="yst-flex yst-flex-col yst-gap-4">
              <Title size={2}>Congrats on your new store! </Title>
              <span className="yst-text-[#495C77] yst-text-sm">
                You're just a few steps away from sharing your site with the
                world!
              </span>
              <img
                src={WelcomeIllustration}
                alt=""
                className="yst-self-baseline"
              />
            </div>
            <div className="yst-flex yst-flex-col yst-gap-4">
              <Title size={2}>Next steps for your site</Title>
              <ul className="yst-block yst-rounded-lg yst-border yst-border-solid yst-border-line">
                {checkListItems.map((text, i) => (
                  <OnboardingCheckListItem isComplete={i % 2 === 0} key={text}>
                    {text}
                  </OnboardingCheckListItem>
                ))}
              </ul>
            </div>
          </div>
          <SiteStatus
            comingSoon={store.comingSoon}
            siteUrl={store.siteurl}
            toggleComingSoon={toggleComingSoon}
          />
        </div>
      </SectionContent>
    </SectionContainer>
  );
}
