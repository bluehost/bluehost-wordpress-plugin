/* eslint-disable prettier/prettier */
import { useState } from '@wordpress/element';
import { Alert, Container, Page } from '@newfold/ui-component-library';
import SitePages from './sitePages';
import BlogPosts from './blogPosts';
import BookingAndAppointments from './bookingAndAppointments';
import StorePages from './ProductsPages';

const PagesAndPosts = () => {
  const [comingSoon, setComingSoon] = useState(false);
  window.NewfoldRuntime.comingSoon
    .isEnabled()
    .then((res) => setComingSoon(res));

  return (
    <Page title="Pages & Posts" className={'wppbh-app-settings-page'}>
      <Container className={'wppbh-app-settings-container'}>
        <Container.Header
          title={__('Pages & Posts', 'wp-plugin-bluehost')}
          description={
            comingSoon && (
              <Alert
                variant="warning"
                className="nfd-text-sm nfd-bg-transparent nfd-p-0 "
              >
                <span className="nfd-text-red-700">{__('Your site is not live.', 'wp-plugin-bluehost')}</span>
              </Alert>
            )
          }
          className={'wppbh-app-settings-header'}
        >
          {comingSoon && (
            <p>
              Visitors to your site will see your "Coming Soon" page and not
              your actual site. Visit "<a href="#/settings">Settings</a>" to set
              your site live.
            </p>
          )}
        </Container.Header>

        <div className="nfd-grid nfd-grid-cols-2 nfd-gap-0">
          <SitePages />
          <BlogPosts />
          {window.NewfoldRuntime.isYithBookingActive && <BookingAndAppointments />}
          <StorePages />
        </div>
      </Container>
    </Page>
  );
};

export default PagesAndPosts;
