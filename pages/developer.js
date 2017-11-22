import React from 'react'
import Header from '../components/header'
import Menu from '../components/menu'
import Slideshow from '../components/slideshow'
import Link from 'next/link'
import Page from '../layouts/page'
import { styles } from '../components/styles'
import SlideColumn from '../components/slide_column'
import WorkFooter from '../components/work_footer'
import ScrollableContainer from '../components/scrollable_container'

const complexSlide2 = [{
  index: 1,
  title: '1',
  content: (<img className="shadow br3" src="../static/img/signup_1.png" />)
}, {
  index: 2,
  title: '2',
  content: (<img className="shadow br3" src="../static/img/signup_2.png" />)
}, {
  index: 3,
  title: '3',
  content: (<img className="shadow br3" src="../static/img/signup_3.png" />)
}]

const onboardingContent = [
   ['../static/img/install_1.png', '1. Select a paltform'],
   ['../static/img/install_2.png', '2. Set up the dev enviroment'],
   ['../static/img/install_3.png', '3. Select a map style'],
   ['../static/img/install_4.png', '4. Complete and explore more examples'],
   ['../static/img/install_studio.png', '5. Go to developer dashboard'],
   ['../static/img/install_1.png', '6. Explore other Mapbox products']
]
const helpContent = [
  ['../static/img/help_home.png', 'On home page, better search results formatting on clear seperation of sections.'],
  ['../static/img/help_tutorial.png', 'Create categories and difficulty levels on the tutorial page'],
  ['../static/img/help_guide.png', 'Create categories and difficulty levels on the tutorial page']
]
const docContent = [
  ['../static/img/doc_developer.png', 'Developer home page.'],
  ['../static/img/doc_ios.png', 'iOS SDK home page'],
  ['../static/img/doc_unity.png', 'Unity SDK home page']
]
const projectOverviewHeading = 'mt3 o-50';
const minWidth = { marginRight: 20, marginBottom: 20 };
export default () => (
  <Page>
    <div className={`${styles.limiter}`}>
      <Menu />
      <div className='cf mt5  w-80-ns w-100 '>
        <div className="f5 o-50 mb2 ">Case Study</div>
        <div className={`${styles.txtH1} nl1`}>Developer Experience</div>
        <div className={`${styles.txtIntro}`}>
          In December, 2016, we started an overhaul of our entire developer experience,
          from onboarding flow to the documentation system.
          The primary goal is to increase SDK activations and create a more engaging experience for developers across all the platforms.
          I had the opportunity to collaborate with many different teams at Mapbox, from support and
          business to analytics and mobile.
          Here is an overview of three individual projects that's part if this endeavor:
         </div>
      </div>
    </div>

    <div className={`${styles.limiter}`}>
      <div className='cf pt5 bt b--black-20 w-80-ns w-100 '>
        <div className={`${styles.txtH2} mb4`}>1. Developer Onboarding</div>
        <div className='cf f6 mb4'>
          <div className="w-50-l w-100 fl">
            <div className={`${projectOverviewHeading}`}>My Role</div>
            <div className="pt1 ">UI</div>
            <div className={`${projectOverviewHeading}`}>Team</div>
            <div className="pt1">Tom MacWright <span className="o-40">(UX & engineering)</span></div>
            <div className="pt1">Saman Bemel-Benrud <span className="o-40"> (UI & engineering)</span></div>
            <div className="pt1">David Clark <span className="o-40">(engineering)</span></div>
          </div>
          <div className="fl w-50-l w-100">
            <div className={`${projectOverviewHeading}`}>Release Date</div>
            <div className="pt1 ">March, 2017</div>
            <a href="https://www.mapbox.com/install/" className='mt3 db link dim blue'> View this live <img className='v-mid h1' src='../static/icons/next.svg' /></a>
          </div>
        </div>
        <div className={`${styles.txtBody}`}>
          Mapbox enables developers to control the entire experience of their applications,
          from the visual design of the map style to interactive features like spatial analysis and turn-by-turn navigation.
          Making the entire integration experience seamless is crucial to the success of our products.
        </div>
      </div>
    </div>

    <ScrollableContainer 
      id='onboarding-flow'
      singleImageWidth = {900}
      title = 'Developer Onboarding flow'
      subtitle = 'Initial wireframes of steps users need to go through to install Mapbox SDK.'
      containerContent = {onboardingContent}
    />

    <div className={`${styles.limiter}`}>
      <div className='cf mt5  w-80-ns w-100 '>
        <div className={`${styles.txtBody} mb3`}>
          In the early days, the onboarding flow focused heavily on professional GIS users and cartographers,
          explaining how different pieces of Mapbox fit together.
          As the product focus shifts to be more developer-oriented,
          we needed a method to help people start building and tinkering right away.
        </div>
        <div className={`${styles.txtBody} mb3`}>
          For the new on-boarding flow we focused on a very simple task: adding a basic map view.
          After the install flow, we guide users to more complicated examples.
          We've discovered through user interviews that code examples, not documentations, 
          are a primary source of how people get started with the tools.
        </div>
        <div className={`${styles.txtBody} mb3`}>
          After the launch we've seen an increase in new account activations, mobile SDK adoptions, and other metrics.
          Platform separation also allows us to collect more accurate persona information for targeted marketing campaigns.
          The open/click-through rate of our on-boarding emails increased significanltly with an CTA of 30% for Android developers.
        </div>
        <div className='mt4 mb3'>
          <Slideshow content={complexSlide2} height='h7' />
          <div className={`${styles.txtH3}`}>Three different versions of the signup page</div>
          <div className={`${styles.txtSbody} mt1`}>
            The signup page was the main entry point to the onboarding flow.
            Each version focuses on a specific selling point of the SDK, such as customization, ease of use, etc.
          </div>
        </div>
      </div>
    </div>
    

    <div className={`${styles.limiter}`}>
      <div className='cf pt5 bt b--black-20 w-80-ns w-100 '>
        <div className={`${styles.txtH2} mb4`}>2. Help Redesign</div>
        <div className='cf f6 mb2'>
          <div className="w-50-l fl">
            <div className={`${projectOverviewHeading}`}>My Role</div>
            <div className="pt1 ">UI</div>
            <div className={`${projectOverviewHeading}`}>Team</div>
            <div className="pt1">Katy Deborah <span className="o-40">(engineering)</span></div>
            <div className="pt1">Colleen Mcginnis <span className="o-40">(UX & engineering)</span></div>
          </div>
          <div className="fl w-50">
            <div className={`${projectOverviewHeading}`}>Release Date</div>
            <div className="f6 pt1 ">July, 2017</div>
            <a href="https://www.mapbox.com/help/" className='mt3 db link dim blue f6'> View this live <img className='v-mid h1' src='../static/icons/next.svg' /></a>
          </div>
        </div>
      </div>
    </div>

    <ScrollableContainer
       id = 'help-redesign' 
       singleImageWidth = {900}
       title = 'Help Redesign Wireframes'
       containerContent = {helpContent}
     />
  

    <div className={`${styles.limiter}`}>
      <div className='cf mt4  w-80-ns w-100 '>
        
        <div className={`${styles.txtBody} mb3`}>
          Mapbox has an incredibly complicated product system. It allows people to build powerful things,
          but it can also be a bit daunting to learn it at first.
          Our amazing support team has produced hundreds of narrative guides and step-by-step tutorials.
          But it can be challenging to organize and navigate those content.
          Our help home page at some point became an index page for all the articles with just large blocks of links.
          Two questions we asked ourselves at the beginning of this projects are: How can we help users find the content?
          How can make the existing content shine?
        </div>

        <div className={`${styles.quote}`}>
          How can we help users find the content?
          How can make the existing content shine?
        </div>

        <img className="w-100 mb4" src="../static/img/help_single.png" />
        <div className={`${styles.txtBody} mb3`}>
          One significant improvement of the redesign is definitely better search and navigation. 
          We color-coded articles that belong to different categories and show those tags in the results listing.
          Moreover, the search input and the dropdown navigation are visible throughout the entire site. 
          No matter which page the user is browsing, they will be able to find the information they are looking for.
          The article page is redesigned with better typography to help users focus on the content.
          Small details like floating sidebards makes links to related context more visible.
        </div>

        <div  className=" pr7-l pr0 br3 mt5 mb4">
          <img src="../static/img/help_illustration.png" />
          <div className={`${styles.txtSbody} mt3`}>
            Illustrations I created to help explain concepts and make the page more friendly.
          </div>
        </div>
      </div>
    </div>

    <div className={`${styles.limiter}`}>
      <div className='cf pt5 bt b--black-20 w-80-ns w-100 '>
        <div className={`${styles.txtH2} mb4`}>3. Documentation system</div>
        <div className='cf mb2'>
          <div className="w-50-l f6 fl">
            <div className={`${projectOverviewHeading}`}>My Role</div>
            <div className="pt1 ">UI & UX</div>
            <div className={`${projectOverviewHeading}`}>Team</div>
            <div className="pt1">Nadia Barbosa <span className="o-40"> (iOS)</span></div>
            <div className="pt1">Cameron Mace <span className="o-40"> (Android)</span></div>
            <div className="pt1">Dan Swick <span className="o-40"> (Unity)</span></div>
          </div>
          <div className="fl w-50">
            <div className={`${projectOverviewHeading}`}>Release Date</div>
              <div className="f6 pt1">Work in progress</div>
           <a href="https://www.mapbox.com/unity-sdk/" className='mt3 db link dim blue f6'> View this live <img className='v-mid h1' src='../static/icons/next.svg' /></a>
          </div>
        </div>
      </div>
    </div>

    <ScrollableContainer 
      id='doc-system'
      singleImageWidth = {900}
      title = 'Documentation System'
      subtitle = 'Initial wireframes of steps users need to go through to install Mapbox SDK.'
      containerContent = {docContent}
    />

    <div className={`${styles.limiter}`}>
      <div className='cf mt5  w-80-ns w-100 '>
        <div className={`${styles.txtBody} mb3`}>
          Documentation is the most crucial part of our developer experience.
          In the past, the technical documentation is managed separately by individual teams, with very different visual and content styles.
          Sometimes users were confused by the lack of consistency when they try to use more than one building block or develop on multiple platforms.
          We realized that the separation of teams should not be reflected in our documentation system.
         And the organization structure should not prevent us from providing a cohesive product experience for our users.
        </div>
        <div className={`${styles.txtBody} mb4`}>
          Standardization provides us an excellent opportunity to rethink the content architecture and visual design.
          One unique challenge for Mapbox is it has a complex product structure. 
          There are usually multiple SDKs for each platform and not all platform has the same features. 
          To reduce the complexity, we allow users to pick a platform first before diving deeper into what they can build.
          We also created a few page templates page with reusable components such as top menu, 
          left navigation, and sidenotes to ensure visual consistency. 
        </div>
        <div className='bg-near-white pv4 ph4 br3'>
          <img className="" src="../static/img/doc_nav.png" />
        </div>
        <div className={`${styles.txtH3} mt3 ` }>Two-level navigation system for documentation</div>
          <div className={`${styles.txtSbody} mb4`}>
            Allow users to pick a platfrom fisrt before diving into specific building blocks. 
          </div>
          <div className='bg-near-white pv4 ph4 br3'>
            <img className="" src="../static/img/doc_sidebar.png" />
          </div>
          <div className={`${styles.txtH3} mt3`}>Nested navigation component</div>
          <div className={`${styles.txtSbody}  mb3`}>
            A reusable navigation component that's being used across all SDK pages. 
          </div>
      </div>
    </div>

    <WorkFooter />
  </Page>
)