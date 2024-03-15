import { useState } from '@wordpress/element';
import classNames from 'classnames';
import { Alert, Container, Page } from '@newfold/ui-component-library';
import ComingSoon from '../settings/comingSoon';
import useContainerBlockIsTarget from 'App/util/hooks/useContainerBlockTarget';

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
                <span className="nfd-text-red-700">Your site is not live.</span>
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

        <Container.Block
          separator={true}
          id={'coming-soon-section'}
          className={classNames(
            'wppbh-app-settings-coming-soon',
            useContainerBlockIsTarget('coming-soon-section') &&
              'wppbh-animation-blink'
          )}
        >
          <ComingSoon />
        </Container.Block>
      </Container>
    </Page>
  );
};

export default PagesAndPosts;
