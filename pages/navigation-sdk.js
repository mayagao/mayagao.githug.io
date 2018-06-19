import React from 'react';
import WorkFooter from '../components/work_footer';
import WorkHeader from '../components/work_header';
import Page from '../layouts/page';
import Link from 'next/link';
import { styles } from '../components/styles';
import Slideshow from '../components/slideshow';

const navigationSlide = [
  {
    index: 1,
    title: '',
    content: (
      <div>
        <img className="" src="../static/img/ns1.png" />
        <div className={`${styles.txtSbody}  ph4-l ph1`}>
          Find the neareast restaurant or hotel and get driving directions
          there.
        </div>
      </div>
    ),
  },
  {
    index: 2,
    title: '',
    content: (
      <div>
        <img className="" src="../static/img/ns2.png" />
        <div className={`${styles.txtSbody} ph4-l ph1`}>
          Get walking directions based on a travel itinery with multiple stops.
        </div>
      </div>
    ),
  },
  {
    index: 3,
    title: '',
    content: (
      <div>
        <img className="" src="../static/img/ns3.png" />
        <div className={`${styles.txtSbody} ph4-l ph1`}>
          Rerouting based on live traffic and incident reports by other drivers.
        </div>
      </div>
    ),
  },
];

const headerInfo = {
  title: 'Navigation SDK',
  role: 'UI & UX Design',
  release: 'May, 2017',
  team: [
    {
      name: 'Nat Slaughter',
      title: '(cartographer)',
    },
    {
      name: 'Bobby Sudekum',
      title: '(iOS engineer)',
    },
    {
      name: 'Cameron Mace',
      title: '(Android engineer)',
    },
    {
      name: 'Minh Nguyễn',
      title: '(iOS engineer)',
    },
  ],
  image: (
    <div>
      <div className="w-60-l dn db-l w-100 fl nt4 nb6 mb3">
        <img
          style={{ width: 430 }}
          className="fr"
          src="../static/img/ns_header.png"
        />
      </div>
    </div>
  ),
};
const featureDetails = [
  {
    imageSource: '../static/img/de_field.png',
    title: 'Add property',
    description:
      'Preview existing fields in the dataset and add all fields with one click.',
  },
  {
    imageSource: '../static/img/de_value.png',
    title: 'Add value',
    description:
      'Show existing values for a field and the aiblity to define number or string type.',
  },
  {
    imageSource: '../static/img/de_search.png',
    title: 'Search features',
    description:
      'A quick to search for features based on field and value in the map context.',
  },
];
export default () => (
  <Page>
    <WorkHeader headerInfo={headerInfo} />

    <div className={`${styles.limiter} ${styles.columnContainer}`}>
      <div className={`${styles.leftColumn}`}>
        <div className={`${styles.txtBody} mb3`}>
          Mapbox Navigation SDK is a product we released earlier this year
          available on both iOS and Android. It provides a simple, customizable
          framework for developers to add turn-by-turn navigation to their
          application. For this project, I was tasked to collaborate closely
          with the cartography, iOS and Android engineer team to create a
          customizable design system for the SDK.
        </div>

        <div className={`${styles.txtBody}`}>
          In addition to the mobile UI, I also designed a landing page and a
          marketing package for the sales team to showcase what's possible with
          the SDK.
        </div>
        <div className={`${styles.txtH2} f4 mt5`}>Styleguide</div>
        <div className={`${styles.txtBody}`}>
          I started from creating a simple, easy-to-customize font and color
          system for the UI.
        </div>
      </div>
    </div>

    <div className={`${styles.limiter} nt4`}>
      <div className="flex-l center flex-none pb4">
        <div style={{ flex: '1 1 50%' }} className="mr4-l mb5 mb0-l mr0">
          <img className="" src="../static/img/ns_font.png" />
        </div>
        <div style={{ flex: '1 1 50%' }} className="ml4-l ml0">
          <img className="" src="../static/img/ns_color.png" />
        </div>
      </div>
    </div>

    <div className="w-100 bg-near-white pt3">
      <div className={`${styles.limiter} pv5-l pv4`}>
        <div className="flex-l center flex-none pb4">
          <div style={{ flex: '1 1 20%' }} className="mr3">
            <div className={`${styles.txtH2} f4 mt4`}>Direction Icons</div>
            <div className={`${styles.txtBody}`}>
              I mocked up how icons look at different sizes to make sure they
              are legible in all the contexts.
            </div>
          </div>
          <div
            style={{ flex: '1 1 80%' }}
            className="ml4-l mt0-l mt4 ml0 nr5-l nr0"
          >
            <img className="" src="../static/img/icons.png" />
          </div>
        </div>
      </div>
    </div>

    <div className={`${styles.limiter} pv5-l pv4`}>
      <div className="flex-l center flex-none pb4 mt3 tc tl-ns">
        <div style={{ flex: '4 1 30%' }} className="mr3 pb0-l pb4">
          <div className={`${styles.txtH2} f4 tl`}>Interactions</div>
          <div className={`${styles.txtBody} pr4-ns pr0 tl`}>
            Framer prototypes helped better communicate interaction details like
            sound toggle, menu drawer and route list view.
          </div>
        </div>
        <div
          style={{ flex: '0 1 200px', borderRadius: '2rem', width: '200px' }}
          className="dib shadow br-full ba bw1 b--light-gray pt4 ph2 pb4 mr4-ns mr0 mb4 mb0-l"
        >
          <img
            className="br1 ba b--black-10 mb3 mt2"
            src="../static/img/sound.gif"
          />
        </div>
        <div
          style={{ flex: '0 1 200px', borderRadius: '2rem', width: '200px' }}
          className="dib shadow br4 ba bw1 b--light-gray pt4 ph2 pb4 mr4-ns mr0 mb4 mb0-l"
        >
          <img
            className="br1 ba b--black-10 mb3 mt2"
            src="../static/img/list.gif"
          />
        </div>
        <div
          style={{ flex: '0 1 200px', borderRadius: '2rem', width: '200px' }}
          className="dib nr4-ns nr0 shadow br4 ba bw1 b--light-gray pt4 ph2 pb4 mb4 mb0-l"
        >
          <img
            className="br1 ba b--black-10 mb3 mt2"
            src="../static/img/scroll.gif"
          />
        </div>
      </div>
    </div>

    <div className="w-100 bg-near-white pt3">
      <div className={`${styles.limiter}`}>
        <div className={`${styles.txtH2} f4 mt4`}>Dark and Light Theme</div>
        <div className={`${styles.txtBody} mw7`}>
          The SDK provides two default UI styles, light and dark, that's
          suitable for daytime and nighttime driving. Our amazing cartographer
          Nat Slaughter designed those two map styles.
        </div>
        <div className="flex-ns mt4 center flex-none pb4">
          <div style={{ flex: '1 1 48%' }} className="nl4-ns nl0">
            <img className="" src="../static/img/ns_light.png" />
          </div>

          <div
            style={{ flex: '1 1 4%' }}
            className="items-center  justify-center flex"
          >
            <img className="w3 dn db-ns" src="../static/img/switch.png" />
          </div>

          <div style={{ flex: '1 1 48%' }} className=" nr4-ns nr0">
            <img className="" src="../static/img/ns_dark.png" />
          </div>
        </div>
      </div>
    </div>

    <div className="overflow-hidden lh-title">
      <div className={`${styles.limiter} mb6`}>
        <div className="w-30-ns w-100 mr6 pt5 fl">
          <div className={`${styles.txtH2} f4 mt4`}>Example Apps</div>
          <div className={`${styles.txtBody} mb2 ph0`}>
            The SDK allows developers to take control of user’s experience all
            the way to their final destination. Here are a few scenarios to
            showcase what the in-app navigation flow looks like and how it can
            be customized for different use cases.
          </div>
        </div>
        <div className="w-40-ns w-100 fl">
          <Slideshow content={navigationSlide} />
        </div>
      </div>
    </div>

    <WorkFooter />
  </Page>
);
