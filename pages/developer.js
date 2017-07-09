import React from 'react'
import Header from '../components/header'
import Menu from '../components/menu'
import Slideshow from '../components/slideshow'
import Link from 'next/link'
import Head from 'next/head'
import Page from '../layouts/page'
import { styles } from '../components/styles'
import SlideColumn from '../components/slide_column'
import WorkFooter from '../components/work_footer'
const complexSlide = [
  {
    index: 1,
    title: '1. Select and setup',
    content: (
      <div className='flex-l flex-none'>
        <div className={`w-50-l w-100 mr3 mb4 mb0-l`}>
           <img className="w-100" src="../static/img/install_1.png" />
           <div className={`${styles.txtSbody} mt2`}>Select a paltform</div>
        </div>
        <div className={`w-50-l w-100`}>
          <img className="w-100" src="../static/img/install_2.png" />
          <div className={`${styles.txtSbody} mt2`}>Set up</div>
        </div>
      </div>)
}, {
    index: 2,
    title: '2. Add a map',
    content: (
      <div className='flex-l flex-none'>
        <div className={`w-50-l w-100 mr3 mb4 mb0-l`}>
          <img className="w-100" src="../static/img/install_3.png" />
          <div className={`${styles.txtSbody} mt2`}>Select a map style</div>
        </div>
        <div className={`w-50-l w-100`}>
          <img className="w-100" src="../static/img/install_4.png" />
          <div className={`${styles.txtSbody} mt2`}>Complete and explore more examples</div>
        </div>
      </div>)
}, {
    index: 3,
    title: '3. Continue exploring',
    content: (
      <div className='flex-l flex-none'>
        <div className={`w-50-l w-100 mr3 mb4 mb0-l`}>
          <img className="w-100" src="../static/img/install_studio.png" />
          <div className={`${styles.txtSbody} mt2`}>Developer dashboard</div>
        </div>
        <div className={`w-50-l w-100`}>
          <img className="w-100" src="../static/img/install_explore.png" />
           <div className={`${styles.txtSbody} mt2`}>Explore page</div>
        </div>
      </div>)
}]



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

export default () => (
  <Page>
    <Head>
      <style>{`

    `}</style>
    </Head>
    <div className={`${styles.limiter}`}>
      <Menu />
      <div className='cf mt5  w-80-ns w-100 '>
        <div className="f5 o-50 mb2">Case Study</div>
        <div className={`${styles.txtH1} nl1`}>Developer Experience</div>
        <div className={`f3-ns f4 lh-copy o-100 headline mt4 mb4`}>
          Mapbox enables developers to control the entire experience of their location applications,
          from the visual design of the map style to interactive features like spatial analysis and turn-by-turn navigation.
          Making the entire integration experience seamless is crucial to the success of our products.
        </div>
        <div className={`${styles.txtBody} mb3`}>
          In December, 2016, we started an overhaul of our entire developer experience,
          from the post signup onboarding flow to the support and documentation system.
          The primary goal is to increase developer activations and create a more engaging experience for developers across all the platforms.
        </div>
        <div className={`${styles.txtBody}`}>
         This is a project where I had the opportunity and pleasure to work closely with many different teams at Mapbox: support,
         business, analytics, core tech, web, and mobile. This is the most enjoyable part of the project:
         building consensus (both on tech and design) across multiple teams,
         and figuring out ways to empower other teams to help more users.
         </div>
      </div>
    </div>
     <div className='bg-near-white pv4 mt4 ph3'>
      <div className={`mw9 pv4 ph5-l center cf`}>
        <div className={`${styles.txtH3} mb4`}>Developer Onboarding flow</div>
        <Slideshow content={complexSlide} height='h7' />
      </div>
    </div>
    <div className={`${styles.limiter}`}>
      <div className='cf mt5  w-80-ns w-100 '>
        <div className={`${styles.txtH2} mb4`}>Developer Onboarding</div>
        <div className='cf mb4'>
          <div className="w-50-l w-100 fl">
            <div className="f6 mt3 o-40">My Role</div>
            <div className="f6 pt1 ">UI</div>
            <div className="f6 mt3 o-40">Team</div>
              <div className="f6 pt1">Tom MacWright <span className="o-40">(UX & engineering)</span></div>
              <div className="f6 pt1">Saman Bemel-Benrud<span className="o-40"> (UI & engineering)</span></div>
              <div className="f6 pt1">David Clark <span className="o-40">(engineering)</span></div>
          </div>
          <div className="fl w-50-l w-100">
            <div className="f6 mt3 o-40">Release</div>
            <div className="f6 pt1 ">March, 2017</div>
            <a href="" className='mt3 db link dim blue f6'> View this live <img className='v-mid h1' src='../static/icons/next.svg' /></a>
          </div>
        </div>

        <div className={`${styles.txtBody} mb3`}>
          In the early days, the on-boarding flow focused heavily on professional GIS users and cartographers,
          explaining how different pieces of Mapbox fit together.
          As the product focus shifts to be more developer-oriented,
          we needed a method to help users to start building and tinkering right away.
        </div>
        <div className={`${styles.quote}`}>
          The first problem we are trying to solve is: how can we help developers to use our resources and succeed.
        </div>
        <div className={`${styles.txtBody} mb3`}>
          For the new on-boarding flow we focused on a very simple task: adding a basic map view.
          After the install flow, we guide users to more complicated examples.
          We've discovered through user interviews that examples (not documentations) are a primary source of how people learn our tools.
        </div>
        <div className={`${styles.txtBody} mb3`}>
          After the launch we've seen an increase in new account activations, mobile SDK adoptions, and other metrics.
          Platform separation also allows us to collect more accurate persona information for targeted marketing campaigns.
          The open/click-through rate of our on-boarding emails increased significanltly with an CTA of 30% for Android developers.
        </div>
        <div className='mt4 mb5'>
          <Slideshow content={complexSlide2} height='h7' />
          <div className={`${styles.txtSbody} mt3`}>
            The signup page was the main entry point to the onboarding flow.
            The main goal is to provide users a better overview of all the features and sell the SDK.
          </div>
        </div>
      </div>
    </div>

    <div className='bg-near-white pv4 mt4'>
      <div className={`mw9 pv4 ph4-l center ph4 cf`}>
        <div className={`${styles.txtH3} mb4 cf`}>Help Redesign</div>
        <div className='flex-l flex-none'>
          <div className={`w-50-l w-100 mr3 mb4 mb0-l`}>
            <img className="w-100" src="../static/img/help_home.png" />
            <div className={`${styles.txtH3} f6 mt2`}>Help home page</div>
            <div className={`${styles.txtSbody}`}>Better search results formatting on clear seperation of sections. </div>
          </div>
          <div className={`w-50-l w-100 mr3 mb4 mb0-l`}>
            <img className="w-100" src="../static/img/help_tutorial.png" />
            <div className={`${styles.txtH3} f6 mt2`}>Help tutorial page</div>
            <div className={`${styles.txtSbody}`}>Create categories and difficulty levels for tutorials.</div>
          </div>
        </div>
      </div>
    </div>


    <div className={`${styles.limiter}`}>
      <div className='cf mt5  w-80-ns w-100 '>
        <div className={`${styles.txtH2} mb4`}> Help Guide</div>
         <div className='cf mb4'>
          <div className="w-50-l fl">
            <div className="f6 mt3 o-40">My Role</div>
            <div className="f6 pt1 ">UI</div>
            <div className="f6 mt3 o-40">Team</div>
            <div className="f6 pt1">Katy Deborah<span className="o-40">(engineering)</span></div>
            <div className="f6 pt1">Colleen Mcginnis<span className="o-40">(UX & engineering)</span></div>
          </div>
          <div className="fl w-50">
            <div className="f6 mt3 o-40">Release</div>
            <div className="f6 pt1 ">Junly, 2017</div>
            <a href="" className='mt3 db link dim blue f6'> View this live <img className='v-mid h1' src='../static/icons/next.svg' /></a>
          </div>
        </div>

        <div className={`${styles.txtBody} mb3`}>
          Mapbox has an incredibly complicated product system. It allows people to build powerful things,
          but it can also be a bit daunting to learn how it works at first.
          We have an amazing support team who have produced hundreds of narrative guides and step-by-step tutorials.
          But this has made it challenging to organize and navigate the content.
          Our help home page at some point became an index page for all the articles with huge blocks of links.
        </div>

        <div className={`${styles.quote}`}>
          Two questions we ask ourselves are: How can we help users find the content?
          How can make the existing content shine?
        </div>

        <img className="w-100 mb4" src="../static/img/help_single.png" />
        <div className={`${styles.txtBody} mb3`}>
          The search results are better formatted with color-coded tags.
          The search input and a dropdown navigation menu are visible throughout the entire site. So no matter which page the user is browsing,
          they will be able to find the information they are looking for.
          The single article page is redesigned with better typography to help users focus on the content.
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


    <div className='bg-near-white pv4 mt4'>
      <div className={`mw9 pv4 ph4-l center ph4 cf`}>
        <div className='flex-l flex-none'>
          <div className={`w-50-l w-100 mr3 mb4 mb0-l`}>
            <img className="w-100" src="../static/img/doc_developer.png" />
            <div className={`${styles.txtH3} f6 mt2`}>Developer home page</div>
            <div className={`${styles.txtSbody}`}> Make the page more platform-focused.</div>
          </div>
          <div className={`w-50-l w-100 mr3 mb4 mb0-l`}>
            <img className="w-100" src="../static/img/doc_unity.png" />
            <div className={`${styles.txtH3} f6 mt2`}>Unity documentation page</div>
            <div className={`${styles.txtSbody}`}>Two column layout with sidebar navigation.</div>
          </div>
        </div>
      </div>
    </div>

       <div className={`${styles.limiter}`}>
        <div className='cf mt5  w-80-ns w-100 '>
          <div className={`${styles.txtH2} mb4`}>Documentation system</div>
          <div className='cf mb4'>
            <div className="w-50 fl">
              <div className="f6 mt3 o-40">My Role</div>
              <div className="f6 pt1 ">UI & UX</div>
              <div className="f6 mt3 o-40">Team</div>
              <div className="f6 pt1">Nadia Barbosa <span className="o-40"> (iOS)</span></div>
              <div className="f6 pt1">Cameron Mace<span className="o-40"> (Android)</span></div>
              <div className="f6 pt1">Dan Swick<span className="o-40"> (Unity)</span></div>
            </div>
            <div className="fl w-50">
              <div className="f6 mt3 o-40">Release</div>
                <div className="f6 pt1 ">Work in progress</div>
             <a href="" className='mt3 db link dim blue f6'> View this live <img className='v-mid h1' src='../static/icons/next.svg' /></a>
            </div>
          </div>
          <div className={`${styles.txtBody} mb3`}>
            Documentation helps users understand and use how tools. It is the most crucial part of our developer experience.
            In the past, the technical documentation is managed separately by individual product teams, with very different visual and content styles.
            Sometimes users may want to use more than one products and they were often confused by the lack of consistent designs.
          </div>
          <div className={`${styles.quote}`}>
           We then realized that the separation of teams should not be reflected in our documentation system.
           And the organization structure should not prevent us from providing a cohesive product experience for our users.
        </div>
        <div className='bg-near-white pv4 ph4 br3 mb4'>
         <img className="" src="../static/img/doc_nav.png" />
         </div>
         <div className={`${styles.txtBody} mb3`}>
         Standardization provides us an excellent chance to rethink the content architecture and the navigation system.
         The first level is platform and the second level is all products inside that platform.
         We also thought about how platform-agnostic documentations fit into the overall system.

        </div>

       <div className='bg-near-white pv4 ph4 br3 mb4'>
         <img className="" src="../static/img/doc_sidebar.png" />
         </div>

     </div>
    </div>
    <WorkFooter />
  </Page>
)