import { useState, useEffect } from "@wordpress/element";
import { Button, Title } from "@newfold/ui-component-library";
import { ArrowRightIcon, CalendarIcon, ClockIcon } from "@heroicons/react/24/outline";
import { ReactComponent as WebinarsVector } from 'App/images/webinars-vector.svg';
import { SectionContainer, SectionContent } from 'App/components/section';

/**
 * A component that displays the next monthly webinar.
 * 
 * The component will attempt to fetch the webinars data from the Hiive CDN.
 * If the file is fetched successfully, the component will verify the required shape of the data.
 * When the data is valid, the component will filter the webinars to only include next webinar.
 * The component will then render the next webinar.
 * 
 * If any of the above fails the component will not render.
 * 
 * @returns JSX.Element
 */
const WebinarsBanner = () => {
	const [webinars, setWebinars] = useState([]);
	const [nextWebinar, setNextWebinar] = useState(null);

	useEffect(() => {
		fetchWebinars();
	}, []);

	const fetchWebinars = async () => {
		const webinarsEndpoint = 'https://cdn.hiive.space/resources/bluehost-webinars.json';

		const response = await fetch(webinarsEndpoint);
		if (!response.ok) {
			console.warn('Could not fetch webinars data.');
			return;
		}

		const data = await response.json();
		if (
			data.hasOwnProperty('isActive') &&
			data.isActive &&
			data.hasOwnProperty('items') &&
			Array.isArray(data.items) &&
			data.items.length > 0
		) {
			setWebinars(data.items);
		}
	}

	useEffect(() => {
		setNextWebinar(getNextWebinar());
	}, [webinars]);

	const getNextWebinar = () => {
		const currentDate = new Date();

		const futureWebinars = webinars.filter(webinar => new Date(webinar.date) > currentDate);
		if (futureWebinars.length === 0) {
			return null;
		}
		futureWebinars.sort((a, b) => new Date(a.date) - new Date(b.date));

		const nextWebinar = futureWebinars[0];
		if (nextWebinar.hasOwnProperty('title') && nextWebinar.title.length > 0) {
			nextWebinar.hasDescription = nextWebinar.description ? true : false;
			nextWebinar.hasTopics = (nextWebinar.hasOwnProperty('topics') && Array.isArray(nextWebinar.topics) && nextWebinar.topics.length > 0) ? true : false;
			nextWebinar.hasTime = nextWebinar.time ? true : false;
			nextWebinar.link = nextWebinar.link ?? 'https://www.bluehost.com/blog/events/';
			nextWebinar.ctaText = nextWebinar.ctaText ?? 'Register Now';

			return nextWebinar;
		}

		return null;
	}

	const WebinarListItem = ({ children }) => {
		return (
			<li className="nfd-flex nfd-gap-1 nfd-mb-0">
				<span>•</span>
				<span>{children}</span>
			</li>
		);
	}

	if (!nextWebinar) {
		return null;
	}

	return (
		<SectionContainer className="wppbh-webinars-banner-section nfd-bg-[#E5F6FE]">
			<SectionContent>
				<div className="nfd-flex nfd-flex-col nfd-gap-8 xl:nfd-flex-row xl:nfd-items-center">
					<div className="max-[1378px]:nfd-hidden">
						<WebinarsVector />
					</div>

					<div className="nfd-flex nfd-flex-col nfd-gap-4 nfd-w-full">
						<Title as="h2" className="nfd-text-base">FREE Monthly Webinar: {nextWebinar.title}</Title>

						{(nextWebinar.hasDescription || nextWebinar.hasTopics) &&
							<div>
								{nextWebinar.description && <p className="nfd-mb-1.5">{nextWebinar.description}</p>}
								{nextWebinar.topics &&
									<>
										<Title as="h3" size="5">Topics:</Title>
										<ul className="nfd-list-none nfd-list-inside nfd-flex nfd-flex-wrap nfd-gap-x-4 nfd-row-gap-2 nfd-mt-2 nfd-pr-2">
											{nextWebinar.topics.map((topic, index) => <WebinarListItem key={index}>{topic}</WebinarListItem>)}
										</ul>
									</>
								}
							</div>
						}


						<div className="nfd-flex nfd-gap-6">
							<div className="nfd-flex nfd-items-center nfd-gap-1">
								<CalendarIcon className="nfd-w-4 nfd-h-4" />
								<span>{nextWebinar.date}</span>
							</div>
							{nextWebinar.hasTime &&
								<div className="nfd-flex nfd-items-center nfd-gap-1">
									<ClockIcon className="nfd-w-4 nfd-h-4" />
									<span>{nextWebinar.time}</span>
								</div>
							}
						</div>

					</div>

					<div>
						<Button
							as="a"
							href={nextWebinar.link}
							target="_blank"
							variant="secondary"
							className="nfd-w-max nfd-bg-transparent"
						>
							{nextWebinar.ctaText} <ArrowRightIcon />
						</Button>
					</div>
				</div>
			</SectionContent>
		</SectionContainer>
	);
}

export default WebinarsBanner;