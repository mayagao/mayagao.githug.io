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
    title: 'Select and setup',
    content: (
      <div>
        <div className={`w-50-l w-100 fl`}>
           <img className="w-100 nl2" src="../static/img/install_1.png" />
           <div className={`${styles.txtSbody}`}>1. Select a paltform</div>
        </div>
        <div className={`w-50-l w-100 fl`}>
          <img className="nl2 w-100" src="../static/img/install_2.png" />
          <div className={`${styles.txtSbody} pl2`}>2. Set up</div>
        </div>
      </div>
   )
  },
  {
    index: 2,
    title: 'Add a map',
    content: (
      <div>
        <div className={`w-50-l w-100 fl`}>
          <div className={`${styles.txtSbody} pl2`}>3. Select a paltform</div>
          <img className="w-100 nl2" src="../static/img/install_3.png" />
        </div>
        <div className={`w-50-l w-100 fl `}>
          <div className={`${styles.txtSbody} pl2`}>4. Complete screen</div>
          <img className="w-100 nl2" src="../static/img/install_4.png" />
        </div>
      </div>)
  },
  {
    index: 3,
    title: 'Studio dashboard',
    content: (
      <div>
        <div className={`w-50-l w-100 fl pb3`}>
          <div className={`${styles.txtSbody}`}>5. Studio developer dashboard</div>
          <img className="w-100 nl2" src="../static/img/install_studio.png" />
        </div>
        <div className={`w-50-l w-100 fl pb3`}>
          <div className={`${styles.txtSbody}`}>6. Studio explore page</div>
          <img className="nl2 w-100" src="../static/img/install_explore.png" />
        </div>
      </div>)
  }

]



const complexSlide2 = [
  {
    index: 1,
    title: '1',
    content: (
<img className="shadow br3" src="../static/img/signup_1.png" />
   )
  },
  {
    index: 2,
    title: '2',
    content: (<img className="shadow br3" src="../static/img/signup_2.png" />)
  },
  {
    index: 3,
    title: '3',
    content: (<img className="shadow br3" src="../static/img/signup_3.png" />)
  }

]

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
          Mapbox enables developers to control the entire user experience of their location applications,
          from the look and feel of the map style itself to complicated user interactions like spatial analysis and turn-by-turn navigation.
          Making the entire integration experience seamless is crucial to the success of our products.
        </div>

        <div className={`${styles.txtBody} mb3`}>
          In December, 2016, we started an overhaul of our entire developer experience,
          from signup on-boarding to the support and documentation system.
          The primary goal here is to increase developer activations,
          but more importantly, we want to create a more friendly and engaging experience for developers across all the platforms.
        </div>
        <div className={`${styles.txtBody}`}>
         This is a project where I had the opportunity and pleasure to work closely with many different teams at Mapbox: support,
         business, analytics, core tech, web, and mobile. This is the most enjoyable part of the project:
         learn from their expertise, build consensus across multiple teams (both on tech and design),
         and also figure out a way to empower the team to help more users.
         </div>

      </div>
    </div>
     <div className='bg-near-white pv4 mt4'>
      <div className={`mw9 pv4 ph4-l center ph4 cf`}>
        <Slideshow content={complexSlide}  />
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
          In the early days Mapbox has a more complicated user base structure that includes specialized GIS users.
          The on-boarding flow then focused heavily on explaining What Mapbox is and designing custom maps with Studio.
          As the product focus shifts to be more developer-oriented,
          we needed a method to help users who may be not that interested in GIS or professional cartography to start building and tinkering right away.
        </div>


          <div className={`${styles.quote}`}>
          The first problem we are trying to solve here is: how can we help developers install our SDK successfully after signup,
          how to better enable them to use the resources and succeed.
        </div>
         <div className={`${styles.txtBody} mb3`}>
          Our product system is complex and sometimes it can be intimidating for new users.
          So for the on-boarding flow we only focused on one objective which is choose adding a basic map view.
           After the install we guide users directly to the individual example pages,
           which we've discovered through user testings, are a primary source of how people learn our tools.
        </div>



        <div className={`${styles.txtBody} mb3`}>
          After the launch we've seen an increase in the metrics for new account activations,
          especially mobile SDK adoptions. Platform separations also allows us to collect more accurate persona information for targeted marketing campaigns.
          The open/click-through rate of our on-boarding emails increased significanltly with an CTA of 30% for Android developers.
        </div>
          <div className='mt5 mb5'>
         <Slideshow content={complexSlide2} height='h7' />
         </div>






  </div>





    </div>


    <div className='bg-near-white pv4 mt4'>
      <div className={`mw9 pv4 ph4-l center ph4 cf`}>
           <div className={`w-50-l w-100 fl pb3`}>

           <img className="w-100 nl2" src="../static/img/help_home.png" />
           <div className={`${styles.txtH3} f6 `}>Help home page</div>
           <div className={`${styles.txtSbody}`}>Better search results formatting. </div>
        </div>
        <div className={`w-50-l w-100 fl  pb3`}>

          <img className="w-100 nl2" src="../static/img/help_tutorial.png" />
          <div className={`${styles.txtH3} f6 `}>Help tutorial page</div>
          <div className={`${styles.txtSbody}`}>Seperate tutorial into different difficulty levels.</div>
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
          Mapbox has an incredibly flexible and complicated product system. It allows people to build powerful things,
          but it can also be a bit hard to grasp at first.
          We have an amazing support team who are dedicated to teaching our tools and they have produced a large amount of narrative guides and step-by-step tutorials.
          But this has also made it challenging to organize those quality content.
          Our help documentation at some point became merely an index page for all the articles with huge blocks of links.
          Two questions we ask ourselves are: How can we help users find the content? How can make the existing content shine?
        </div>


          <div className={`${styles.quote}`}>
          "Every page is page one. We can make every page inviting and informative as if it were the first page the user is viewing on mapbox.com."
        </div>

         <img className="w-100 mb4" src="../static/img/help_single.png" />
         <div className={`${styles.txtBody} mb3`}>
         The first thing I improved is the search function. I added better results formatting to highlight where the information belongs
         (documentation or help articles or something else).
         I also added the search input to every help article page so users can find information no matter where they are.
        </div>



        <div className={`${styles.txtBody} mb3`}>
          I added more clarity to site structure with a top navigation system,
          where users can pick from one of the five main help sections.
           On every main section page, there is a left sidebar with content categories like design, data,
           and development to help users filter content and find what they are looking for.
           Every single article pages is simplified with better typography hierarchy to help users focus on the content.
        </div>
       <div  className=" pr7-l pr0 br3 mt5 mb4">
        <img src="../static/img/help_illustration.png" />
        </div>






  </div>





    </div>


    <div className='bg-near-white pv4 mt4'>
      <div className={`mw9 pv4 ph4-l center ph4 cf`}>
           <div className={`w-50-l w-100 fl pb3`}>

           <img className="w-100 nl2" src="../static/img/doc_developer.png" />
           <div className={`${styles.txtH3} f6`}>Developer home page</div>
           <div className={`${styles.txtSbody}`}> Make the page more platform-focused.</div>
        </div>
        <div className={`w-50-l w-100 fl  pb3`}>
          <img className="w-100 nl2" src="../static/img/doc_unity.png" />
          <div className={`${styles.txtH3} f6`}>Unity documentation page</div>
           <div className={`${styles.txtSbody}`}>Two column layout with sidebar navigation.</div>
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
          In the past, the technical documentation is managed separately by individual product teams, the support team, iOS team,
          Android team, Unity team, etc, with very different visual and content styles.
          Sometimes users may want to use more than one products and they were often confused by the lack of consistent navigation and content designs.
        </div>


          <div className={`${styles.quote}`}>
           We then realized that the separation of product should not be reflected in our documentations.
           And the team structure should not prevent us from establishing standardization and providing a cohesive product experience for our users.

        </div>
        <div className='bg-near-white pv4 ph4 br3 mb4'>
         <img className="" src="../static/img/doc_nav.png" />
         </div>
         <div className={`${styles.txtBody} mb3`}>
         Standardization provides us an excellent chance to rethink about the content architecture and navigation system.
         The first level is platform and the second level is all products inside that products.
         We also thought about how platform-agnostic documentations fit into the overall system.

        </div>


        <div className={`${styles.txtBody} mb3`}>
          We also add more visual consistency and usability to the pages,
          from two column layout with sidebar navigation to small things like floating card designs to better surface related content.
          We shipped the Unity SDK recently and the next part is mostly working on.

        </div>
       <div className='bg-near-white pv4 ph4 br3 mb4'>
         <img className="" src="../static/img/doc_sidebar.png" />
         </div>






  </div>





    </div>








    <WorkFooter />
  </Page>
)