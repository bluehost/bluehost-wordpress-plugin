import { Fragment, renderToString, useContext } from '@wordpress/element';
import { ShepherdTour, ShepherdTourContext } from 'react-shepherd';

import Shepherd from 'shepherd.js';
import { dispatch } from '@wordpress/data';
import editorTourEvents from '../editorTourEvents';

const LargeStep = ({children}) => {
    return (
        <div class="wrap-large">
            {children}
            <div class="step-bluehost-logo">
                <img src={window.bluehostPluginPublicPath + '../static/images/bluehost.svg'} />
            </div>
        </div>
    )
}

const StandardStep = ({children}) => {
    return (
        <div class="wrap-std">
            {children}
            <div class="step-bluehost-squares">
                <img src={window.bluehostPluginPublicPath + '../static/images/bluehost-squares.svg'} />
            </div>
        </div>
    )
}

const tourOptions = {
    defaultStepOptions: {
        cancelIcon: {
            enabled: true,
        }
    },
    useModalOverlay: true,
};

const steps = [
    {
        id: 'intro',
        classes: 'bluehost-large',
        buttons: [
            {
                classes: 'components-button is-secondary',
                text: 'Exit',
                type: 'cancel',
            },
            {
                classes: 'components-button is-primary',
                text: 'Get Started',
                type: 'next',
            }
        ],
        highlightClass: 'highlight',
        scrollTo: false,
        cancelIcon: {
            enabled: true,
        },
        title: 'Create an About Page with Bluehost',
        text: renderToString(<LargeStep>Tell the world why your site is here. Websites with good about pages see 2x the sales and 3x the traffic.</LargeStep>),
        // text: ['This is the blank canvas where you add content and interactive features for your website to come alive.<br /><br />We also have <a href="https://bluehost.com/resources" target="_blank">a written guide</a> if you prefer.'],
        // when: {
        //     show: () => {
        //         suppressCoreTour()
        //     }
        // }
    },
    {
      id: 'blocks',
      attachTo: { element: '.edit-post-header-toolbar__inserter-toggle', on: 'bottom-end'},
      buttons: [
        {
          classes: 'components-button is-secondary',
          text: 'Back',
          type: 'cancel'
        },
        {
          classes: 'components-button is-primary',
          text: 'Next',
          type: 'next'
        }
      ],
      classes: 'custom-class-name-1 custom-class-name-2',
      highlightClass: 'highlight',
      scrollTo: false,
      cancelIcon: {
        enabled: true,
      },
      title: 'Blocks come in all shapes and sizes',
      text: () => renderToString(<StandardStep><div>Insert Paragraphs, Images, Videos and interactive features like forms and payments.</div></StandardStep>),
    //   text: ['Insert Paragraphs, Images, Videos and interactive features like forms and payments.'],
    },
    {
      id: 'uno',
      attachTo: { element: '.edit-post-visual-editor__post-title-wrapper', on: 'auto' },
      buttons: [
        {
          classes: 'components-button is-secondary',
          type: 'back',
          text: 'Back',
        },
        {
          classes: 'components-button is-primary',
          text: 'Next',
          type: 'next'
        }
      ],
      title: 'Title your work for visitors (and search engines)',
      text: ['It doesn\'t need to be complicated, could just be Blue Man Group.'],
    },
    {
        id: 'dos',
        attachTo: { element: '.edit-post-more-menu', on: 'auto' },
        buttons: [
          {
            classes: 'components-button is-secondary',
            type: 'back',
            text: 'Back',
          },
          {
            classes: 'components-button is-primary',
            text: 'Finish',
            type: 'complete'
          }
        ],
        title: 'Powerful tools & options to personalize',
        text: ['The settings menu lets you get the most out of the Block Editor and access 3rd party plugins.'],
      }
  ];

const AboutTourContents = () => {
    const tour = useContext(ShepherdTourContext);
    editorTourEvents('about', tour);
    return (
        <Fragment>{tour.start()}</Fragment>
    )
}

export const AboutTour = () => (
    <ShepherdTour steps={steps} tourOptions={tourOptions}>
        <AboutTourContents />
    </ShepherdTour>
)

export default AboutTour;