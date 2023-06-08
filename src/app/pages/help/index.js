import { Page } from '../../components/page';
import { SectionContainer, SectionContent, SectionHeader } from '../../components/section';
import help from '../../data/help';
import { Button, Card, Title } from "@yoast/ui-library";

const HelpCard = ({ item }) => {
    return ( 
        <Card className={`wppbh-help-card card-help-${item.name}`}>
            <Card.Content>
                <Title 
					as="h3" 
					size="4"
					className="yst-mb-2"	
				>{item.title}</Title>
                <p>{item.description}</p>
            </Card.Content>

            <Card.Footer>
                <Button
                    variant="secondary"
                    as="a"
                    className="yst-w-full"
                    href={item.url}
                    target="_blank"
                >
                    {item.cta}
                </Button>
            </Card.Footer>
        </Card>
     );
}

const Help = () => {
	const renderHelpCards = () => {
		const helpItems = help;

		return (
			<div className="yst-grid yst-gap-6 yst-grid-cols-1 sm:yst-grid-cols-2 xl:yst-grid-cols-3 2xl:yst-grid-cols-4">
				{helpItems.map((item) => (
					<HelpCard key={item.name} item={item} />
				))}
			</div>
		);
	};
	return (
		<Page className={"wppbh-app-help-page"}>
			<SectionContainer className={'wppbh-app-help-container'}>
				<SectionHeader
					title={__('Help', 'wp-plugin-bluehost')}
					subTitle={__('We are available 24/7 to help answer questions and solve your problems.',
					'wp-plugin-bluehost')}
				/>

				<SectionContent>
					{renderHelpCards()}
				</SectionContent>
			</SectionContainer>
		</Page>
	);
};

export default Help;
