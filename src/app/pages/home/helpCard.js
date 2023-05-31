import { Button, Card, Title } from "@yoast/ui-library";
import SupportIllustration from "../../images/section-home-help-me.svg";
export function HelpCard() {
  return (
    <Card className="wppbh-help-card">
      <Card.Content>
        <Title size={2}>Need some help?</Title>
        <div className="yst-flex yst-flex-col yst-gap-4 yst-items-center yst-text-center yst-mt-4">
          <img 
            className="yst-max-w-xs" 
            src={SupportIllustration} 
            alt="Help Agent Illustration"
          />
          <p>From DIY to full-service help.</p>
          <p>
            Call or chat 24/7 for support or let our experts build your site for
            you.
          </p>
          <Button variant="secondary" as="a" href="#/help" className="wppbh-help-link">
            Help me
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
}
