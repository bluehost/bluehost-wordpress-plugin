import { Container } from "@newfold/ui-component-library";

const SocialMediaAccounts = () => {
  return (
    <Container.SettingsField
      title={__("Automatic Updates", "wp-plugin-bluehost")}
      description={__(
        "Keeping automatic updates on ensures timely security fixes and the latest features.",
        "wp-plugin-bluehost"
      )}
    ></Container.SettingsField>
  );
};

export default SocialMediaAccounts;
