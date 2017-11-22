import React from 'react'
import WorkFooter from '../components/work_footer'
import WorkHeader from '../components/work_header'
import Page from '../layouts/page'
import Head from 'next/head'
import Link from 'next/link'
import { styles } from '../components/styles'
const headerInfo = {
  title: 'Mapbox Studio',
  role: 'UI Design & Dev',
  release: 'November, 2015',
  team: [
    {
      name: 'Tom MacWright',
      title: '(design & engineering)'
    },
    {
      name: 'Eden Halperin',
      title: '(design & engineering)'
    },
    {
      name: 'Saman Bemel-Benrud',
      title: '(design & engineering)'
    },
    {
      name: 'Scott Andrews',
      title: '(engineering)'
    },
    {
      name: 'Matthew Whittemore',
      title: '(engineering)'
    },
  ],
  image: (
    <div>
      <div className="w-60-l dn db-l w-100 fl nt5 mb3">
          <img style={{minWidth: 925}} className="" src="../static/img/ms_header.png" />
        </div>
        <div className="w-60-l db dn-l mt4 w-100 fl nb6 nl5-l nl2 mb4">
          <img style={{minWidth: 660}} src="../static/img/home_studio.png" />
        </div>
    </div>
  )
}

const featureDetails = [
  {
    imageSource: '../static/img/ms_3.png',
    title: 'Different layer states',
    description: 'Clear, distinguishable states for nested, selected and hidden layers.'
  },
  {
    imageSource: '../static/img/ms_1.png',
    title: 'Property categories',
    description: 'Divide layer properties into four categories to improve visibility.'
  },
  {
    imageSource: '../static/img/ms_2.png',
    title: 'Data source hierarchy',
    description: 'Visual hierarchy between the parent sources and their subset sources.'
  }
]

const functionDetails = [
  {
    imageSource: '../static/img/ramp_1.png',
    title: `Ramp graphs`,
    description: 'The large detailed graphs helps users understand how functions work and how values change at various zoom levels. I ended up simplifying the small graphs a lot more to make them look less clickable.'
  },
  {
    imageSource: '../static/img/ms_ramp_edit.png',
    title: 'Editable graph',
    description: `Prototyping helped us discover some accuracy intricacies with this interaction, which is why we didn't move forward with it.`
  },
  {
    imageSource: '../static/img/ramp_2.png',
    title: 'Position indicator',
    description: 'I added a diamond pointer to indicate values at current zoom level. The distinct styles of small graphs help users differentiate between color, enum and number functions at a glance. '
  }
]

export default () => (
<Page>
  <Head>
    <style>{`
      .vertical {
        width: 0px;
      }
    `}</style>
  </Head>
  <WorkHeader headerInfo={headerInfo} />

  <div className={`${styles.limiter} ${styles.columnContainer}`}>
    <div className={`${styles.leftColumn}`}>
      <a href="https://www.wired.com/2015/09/mapbox-studio/" className="db mb4 relative link light-silver hover-moon-gray">
        <div>
          <img style={{width: 100}} className="o-20" src="../static/img/wired.svg" />
          <div className="quote f4 mt2">A Powerful New Mapmaking Tool Fit for Both Pros and Newbies</div>
        </div>
      </a>

      <a href="https://medium.com/uber-design/crafting-data-driven-maps-b0835b620554" className="db mb4 relative link light-silver hover-moon-gray">
        <div>
          <img style={{width: 80}} className="o-20" src="../static/img/uber.svg" />
          <div className="quote f4 mt2">Mapbox Studio — Best in Class Map Style Editor</div>
        </div>
      </a>

      <div className={`${styles.txtBody} mb4`}>
        I started working on Mapbox Studio four months before its public launch.
        A main focus of the release was the style editor, a professional map design tool.
        As the first visual designer in the team, I was tasked to create a more cohesive,
        consistent and friendly visual language for the tool.
      </div>
      <div className={`${styles.txtH2}`}>Style Editor</div>
      <div className={`${styles.txtBody}`}>
        The editor provides complete design control over how the map looks. Users can select a map layer,
        edit data sources, and edit properties such as texture, color and fonts.
        Retaining flexibility that comes with all those poweful customization options,
        while designing a UI that feels approachable and learnable was definitely a big challenge.
      </div>

    </div>

     <div className={`${styles.rightColumn}`}>
        <div className={`${styles.rightColumnContent}`}>
          <img style={{width: 179}} className="nl2 dib" src="../static/img/direct_select.png" />
          <div className={`${styles.txtNote}`}>Powered by the fast, client-side GL renderer, Studio allows users to directly select and edit map layers and view changes instantly.</div>
        </div>
      </div>
  </div>

  <div className="w-100 mt4 bg-mb pv3-l p3 pl4-l pl3 pr2 overflow-hidden">
   <div className="pt4 white f6 flex">
     <div style={{width: 1200}} className=" self-center center mb0">
       <div ><span className="o-70">Style Editor Iteration</span></div>
       <div style={{zIndex: 11111}} className="w-100 none f7 db-l dn nb3 o-50 mt3 cf">
         {[`Layer list`, `Data source panel`,`Data source popover`, `Layer editing panel`, `Property panel`].map((p, i) => (
           <div key={i} className="w-20 fl relative">{p}<hr className="vertical h1 nb1 db absolute ml2 o-70"/></div> ))}
       </div>
     </div>
    </div>
    <div className="flex flex-row pb2 overflow-scroll">
      <img style={{width: 1200}} className="center  db-ns dn self-center" src="../static/img/ms_editor.png" />
      <img style={{maxWidth: 230+'%'}} className="center  db dn-ns self-center" src="../static/img/ms_editor.png" />
    </div>
  </div>


<div className="bg-near-white pv3 lh-copy">
  <div className={`${styles.limiter}`}>
  {featureDetails.map((fd, i) => (
    <div key={`feature + ${i}`} className="fl pv3 w-100  w-third-ns pr4-ns">
      <img style={{width: 280}}  src={fd.imageSource} />
      <div className={`${styles.txtH3} mt2`}>{fd.title}</div>
      <div className={`${styles.txtSbody}`}>{fd.description}</div>
    </div>))}
  </div>
</div>



  <div className={`${styles.limiter}`}>
    <div className={`${styles.columnContainer}`}>
      <div className={`${styles.leftColumn}`}>
        <div className={`${styles.txtH2}`}>Property Function</div>
        <div className={`${styles.txtBody} mb3`}>
          Property functions allows for adjusting values at different <b>zoom stops</b>.
          Functions of number, color and enum properties all behave in different ways.
          For number properties, users can even control how fast the value increases or
          decreases. It is a powerful feature but also something that's difficult to design and visualize.
        </div>
        <div className={`${styles.quote}`}>
          Priotization and deciding on what to build is always hard.
          User testing and prototyping helped us better identify problems and manage implementation scopes.
        </div>

        <div className={`${styles.txtBody}`}>
          To help users better understand how property function works,
          we introduced detailed ramp graphs to indicate precisely how values change at different zoom stops.
          We also added automatic sorting and other smart validation rules to prevent people{` `}
          from making mistakes. There are many seemingly great ideas that were abandoned along the way,
          such as making an editable graph. Priotization and deciding on what to build is always hard.
          User testing and prototyping in code helped us better identify problems and manage scopes.
        </div>

      </div>
      <div className={`${styles.rightColumn}`}>
        <div  className={`${styles.rightColumnContent}`}>
          <img style={{width: 154}} className="nl2 dib" src="../static/img/ramp.png" />
          <div className={`${styles.txtNote}`}>
            An example use case of propoerty function:
            increase the city label size when zooming in.
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="bg-near-white ">
    <div className={`${styles.limiter}`}>
    {functionDetails.map((fd, i) => (
        <div key={`functions + ${i}`} className="w-100 mt3 flex-l flex-none br2 mb3-l mb4">
        <div className="pv2 br2 flex-no-shrink ">
           <img style={{width: 545}} className="" src={fd.imageSource} />
        </div>
        <div className="lh-copy ph4-l mw6 ph0">
          <div className={`${styles.txtH3} mt2`}>{fd.title}</div>
          <div className={`${styles.txtSbody}`}>{fd.description}</div>
        </div>
      </div>))}
    </div>
  </div>

  <div className={`${styles.limiter}`}>
    <div className={`${styles.leftColumn} mb4 mt4`}>
      <div className={`${styles.txtH2}`}>Dashboard</div>
      <div className={`${styles.txtBody}`}>
        In addition to being a map design tool, 
        Studio also serves as an online platform that connects all the different Mapbox products,
        from the data upload and processing pipeline to the developer APIs and SDKs. Users can design maps,
        manage custom data, analyze API usage, and manage account information, all in one place.
      </div>
    </div>
    <div className="w-100 mt5 flex-l flex-none br2 mb3">
      <div style={{flex: 'auto 1 824px'}} className="">
         <img style={{width: 824}} className="" src="../static/img/slide1.png" />
      </div>
      <div  style={{flex: '1 1 240px'}} className="lh-copy flex f7 pl4-l pl0">
        <div className="self-end mb4-l">
          <div className={`${styles.txtH3} mt3`}>Home page</div>
          <div className={`${styles.txtSbody} mt2`}>The goal of the home page is to help user navigate and find what they are looking for. We identified three most common tasks: design, develop and data visualization. </div>
        </div>
      </div>
    </div>
    <div className="w-100 mt4 flex-l flex-none br2 mb4">
      <div style={{flex: `auto 1 824px`}}  className="">
         <img style={{width: 824}} className="" src="../static/img/slide2.png" />
      </div>
      <div style={{flex: `1 1 240px`}} className="lh-copy flex pl4-l pl0">
        <div className="self-end f7 mb4-l">
          <div className={`${styles.txtH3} mt3`}>Listing pages</div>
          <div className={`${styles.txtSbody} mt2`}>The listing pages consist of a left main view with all styles/tilesets in a user's account, and a right sidebar explaining how to use those resources. The left popover shows current data uploads status. </div>
        </div>
      </div>
    </div>
  </div>

  <div className="w-100 bg-near-white pv4 lh-copy">
    <div className={`${styles.limiter}`}>
      <div className={`${styles.txtBody} mb4`}>Modal is another main UI component. The challenge here is explaining abstract concepts in a confined space.</div>
      <div className="flex-l flex-none">
        <div style={{flex: `1 1 501px`}} className="mr4-l mb4 mb0-l mr0">
          <div className=" overflow-y-hidden mb2">
             <img style={{width: 501}} className="shadow" src="../static/img/ms_modal_create_style.png" />
          </div>
          <div className={`${styles.txtH3}`}>New style modal</div>
          <div  className={`${styles.txtSbody} mw6`}>There are six styles users can choose as a base template for their design. The goal of this modal is to help them make an informed decision on which style to pick based on different needs. </div>
        </div>
        <div style={{flex: `1 1 397px`}}  className="ml4-l ml0">
          <div className="overflow-y-hidden mb2">
             <img style={{width: 397}} className="shadow" src="../static/img/ms_modal_composite.png" />
          </div>
          <div className={`${styles.txtH3}`}>Layer composite modal</div>
          <div  className={`${styles.txtSbody} mw6`}>Composite means combining various data sources for use cases like label collision detection. Here I tried to use illustration to explain the concept a bit better. </div>
        </div>
      </div>
    </div>
  </div>


  <div className={`${styles.limiter}`}>
    <div className={`${styles.columnContainer} pb3 cf`}>
      <div className={`${styles.leftColumn}`}>
        <div className={`${styles.txtH2}`}>What I learned</div>
        <div className={`${styles.txtBody} mb3`}>
          Coming to the team at a later stage definitely makes the job more challenging since I have less context about the product history.
          A big part of what I do at the beginning was just reading through the Github ticket to better understand how decisions were made,
          since everything, down to every small UI tweaks, are documentated.
        </div>
        <div className={`${styles.quote}`}>
          Using the same tool helps build deeper{` `}
          empathy between designers and engineers.
          Prototyping in code brings more credibility to my design decisions.
        </div>
        <div className={`${styles.txtBody} mb3`}>
          Open communication becomes especially important when collaborating closely with a engineering team,
          I've learned to always demonstrate clearly with mockups and prototypes what I am trying to achieve and also
          gather constant feedbacks from engineers to build consensus.
          It's also important to document the reason behind every design decision with clarity.
        </div>

        <div className={`${styles.txtBody} mb3`}>
          Using the same tool (Github) to design, develop and communicate really helps build deeper{` `}
          empathy between designers and engineers. In a highly iterative environment,
          opening a pull request also brings more credibility to the design decisions than static images.
          It allows me to establish trust and introduce systematic changes merely a few months before the launch.
        </div>

        <div className={`${styles.txtBody}`}>
          Mapbox Studio is free and in active development. You can learn more about the tool <a className={`${styles.link}`}  href="https://www.mapbox.com/mapbox-studio/">
          here</a> and start using it today!
        </div>
      </div>
    </div>
    <div className="flex-l flex-none">
      <div  style={{background: `#3887BE`}} className="flex-auto br3 mr2-l mr0 justify-center flex items-center pv5 ph4">
        <img style={{width: 360}} src="../static/img/2.svg" />
      </div>
      <div style={{background: `#56B881`}} className="flex-auto br3 ml2-l ml0 mt3 mt0-l justify-center flex items-center pv5 ph4 ">
        <img style={{width: 360}} src="../static/img/3.svg" />
      </div>
    </div>
     <div className="o-60 f7 mt3">Some illustrations I did for the Studio sign up page. </div>
  </div>
  <WorkFooter />
</Page>)





