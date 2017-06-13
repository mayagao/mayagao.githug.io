import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import Link from 'next/link'
const roles = [
  {
    name: 'Tom MacWright',
    title: '(design & enginnering)'
  },
  {
    name: 'Eden Halperin',
    title: '(design & enginnering)'
  },
  {
    name: 'Saman Bemel-Benrud',
    title: '(design & enginnering)'
  },
  {
    name: 'Scott Andrews',
    title: '(enginnering)'
  },
  {
    name: 'Matthew Whittemore',
    title: '(enginnering)'
  },
]
const featureDetails = [
  {
    imageSource: '../static/img/ms_3.png',
    title: 'Different layer states',
    description: 'Clear, distinguishable states for nested, selected, and hidden layers.'
  },
  {
    imageSource: '../static/img/ms_1.png',
    title: 'Property categories',
    description: 'Improve clarity by dividing layer properties into four different categories.'
  },
  {
    imageSource: '../static/img/ms_2.png',
    title: 'Data selection popover',
    description: 'Visual hierarchy between the parent data sources and their subset sources.'
  }
]

const functionDetails = [
  {
    imageSource: '../static/img/ramp_1.png',
    title: 'Function graph',
    description: 'The large detailed graphs helps users understand how functions work and how value change at various zoom levels. I ended up simplifying the small graphs a lot more to make them look less clickable.'
  },
  {
    imageSource: '../static/img/ms_ramp_edit.png',
    title: 'Editable graph',
    description: `Design proposal for an editable graph. Deciding whether to build something is always hard. Prototyping helped us discover some accuracy intricacies with this interaction. So we didn't move forward with it.`
  },
  {
    imageSource: '../static/img/ramp_2.png',
    title: 'Position indicator and distinct styles',
    description: 'I added a diamond pointer to indicate values at current zoom level. The distinct styles of small graphs help users differentiate between color, enum and number functions at a glance. '
  }
]

export default () => (
<div>
  <Header />
  <div className="bg-near-white overflow-hidden bt bw2 lh-title">
    <div className="mw9 pv3 ph6-l center ph4">
      <a href="/" className="f4 black no-underline mt3 dib">Maya Gao</a>
      <div className="mt6-l mt2 center">
        <div className="cb cf">
          <div className="w-40-l w-100 mb4 mt3 fl">
            <div className="f5 o-40">Case Study</div>
            <div className="f1 mb2 light">Mapbox Studio</div>
            <div className=" mb3 fl">
              <div className="f6 mt3 o-40">My Role</div>
              <div className="f6 pt1 ">UI design & dev</div>
              <div className="f6 mt3 o-40">Release</div>
              <div className="f6 pt1 ">November, 2015</div>
              <div className="f6 mt3 o-40">Team</div>
              <div className="w-100">
                 {roles.map((role, i) => (<div key={`role` + i} className="f6 pt1">{role.name} <span className="o-40">{role.title}</span></div>))}
              </div>
            </div>
          </div>
          <div className="w-60-l dn db-l w-100 fl nt5 mb3">
            <img style={{minWidth: 925}} className="" src="../static/img/ms_header.png" />
          </div>
          <div className="w-60-l db dn-l w-100 fl nb6 nl5 mb4">
            <img style={{minWidth: 660}} src="../static/img/ms_header.png" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="mw9 ph6-l center ph4 pt5">
    <div className="w-100 w-80-m w-70-l">
      <a href="" className="db mb4 mt4 relative link light-silver hover-moon-gray">
        <div>
          <img style={{width: 100}} className="o-20" src="../static/img/wired.svg" />
          <div className="quote f4 mt2">A Powerful New Mapmaking Tool Fit for Both Pros and Newbies</div>
        </div>
      </a>
      <div className="lh-copy mb5 f5 o-80">
        I started working on Mapbox Studio four months before its public launch. A main focus of the release was the style editor, a professional map design tool. With Studio users can select a map layer, edit data sources of the layer, and then define certain styling properties such as font-size and opacity. As the first visual designer in the team, I was tasked to create a more cohesive, consistent and friendly visual language for the tool.
      </div>
    </div>
    <div className="flex mb5 pb4">
      <div className="w-100 w-80-m w-70-l relative fl">
          <div className="f3 light mb3">Style Editor</div>
          <div className="lh-copy f5 mb3 o-80">Before Mapbox Studio style editor, there wasn't really a digital map design tool availalbe that provide complete design control for things like texture, color and fonts. Retaining flexibility that comes with all those poweful customization options, providing visibility for the important features, while at the same time designing a UI that feels approachable and learnable was definitely a big challenge. </div>
      </div>
      <div className="dn mw6 pl5 db-l w-20-m items-end w-30-l fl relative">
        <div className="absolute bottom-1">
          <img style={{width: 179}} className="pl1 dib" src="../static/img/direct_select.png" />
          <div className="o-50 mt3 pl3 f7 lh-copy">Powered by the fast, client-side GL renderer, Studio allows users to directly select and edit map layers and view changes instantly.</div>
        </div>
      </div>
    </div>
  </div>

  <div className="w-100 bg-mb pv3-l p3 pl4-l pl3 pr2">
   <div className="pt4 white f6 flex">
     <div style={{width: 1200}} className=" self-center center mb0">
       <div ><span className="o-70">Style Editor Iteration</span> <span className="o-40">August, 2015</span></div>
       <div style={{zIndex: 11111}} className="w-100 none f7 db-l dn nb3 o-50 mt3 cf">
         <div className="w-20 fl">Layer list</div>
         <div className="w-20 fl">Data source panel</div>
         <div className="w-20 fl">Data source popover</div>
         <div className="w-20 fl">Layer editing panel</div>
         <div className="w-20 fl">Property panel</div>
       </div>
     </div>
    </div>
    <div className="flex flex-row pb2">
      <img style={{width: 1200}} className="center  db-ns dn self-center" src="../static/img/ms_editor.png" />
      <img style={{maxWidth: 230+'%'}} className="center  db dn-ns self-center" src="../static/img/ms_editor.png" />
    </div>
  </div>



<div className="bg-near-white w-100 pv4 lh-copy">
  <div className="mw9 cf ph6-l mb4 ph4 center">
  {featureDetails.map((fd, i) => (
    <div className="fl pv3 w-100  w-third-ns pr4-ns">
      <img style={{width: 280}}  src={fd.imageSource} />
      <div className="f5 mt3">{fd.title}</div>
      <div className="f6 o-60 mt1">{fd.description}</div>
    </div>))}
  </div>
</div>



  <div className="mw9 ph6-l cf center ph4 pt5">
    <div className="flex mb5">
      <div className="w-100 w-80-m w-70-l relative fl">
        <div className="f3 light mt2 mb3">Property Function</div>
        <div className="lh-copy f5 o-80">Property functions provides allows for adjusting values at different <b>zoom stops</b>. There are a few complexities that comes with the property function: </div>
        <ol className="lh-copy pv3 mb-list f5 o-80">
          <li>Functions of number, color and enum properties behave in different ways. </li>
          <li>For number properties, users can also control how fast the value increase/decreases with zoom through changing the exponential base of the interpolation curve. </li>
          <li>There are certain validation rules for functions, for example, zoom stops must always be in ascending order with no duplicates. </li>
        </ol>
        <div className="lh-copy f5 o-80">To help users better understand how property function works, we introduced detailed ramp graphs, one small graph next to each property entry and another detailed graph inside each function editing popover. We also added automatic sorting and other smart validation rules to prevent people from making mistakes.</div>
      </div>
      <div className="dn mw6 pl5 db-l w-20-m items-end w-30-l fl relative">
        <div className="absolute bottom-0">
          <img style={{width: 154}} className="pl1 dib" src="../static/img/ramp.png" />
          <div className="o-30 mt2 pl3 f7 mb4">Increase the city label size when zooming in.</div>
        </div>
      </div>
    </div>
  </div>

  <div className="bg-near-white ">
    <div className="w-100 studio-ui-dive mw9 ph6-l cf center ph4 pt5 pb4 lh-copy">
    {functionDetails.map((fd, i) => (
        <div className="w-100 flex-l flex-none br2 mb3-l mb4">
        <div className="pv2 br2 flex-no-shrink ">
           <img style={{width: 545}} className="" src={fd.imageSource} />
        </div>
        <div className="lh-copy mt2-l pl4-l pl0">
          <div>
            <div className="f5 mt0-l mt2">{fd.title}</div>
            <div className="o-60 f6 mt1">{fd.description}</div>
          </div>
        </div>
      </div>))}
    </div>
  </div>

  <div className="mw9 ph6-l cf center ph4 pv5">
    <div className="w-100 w-80-m cf w-70-l relative">
      <div className="f3 light mb3">Dashboard</div>
      <div className="lh-copy f5 o-80">In addition to map design, Studio also serves as an online platform that connects all the Mapbox products, from the data upload and processing pipeline to the developer APIs and SDKs. Users can design maps, upload and manage custom data, analyze API usage and manage account, all in one place.</div>
    </div>
    <div className="w-100 mt5 flex-l flex-none br2 mb3">
      <div style={{flex: 'auto 1 824px'}} className="br2 nl3-l nl0 ">
         <img style={{width: 824}} className="" src="../static/img/slide1.png" />
      </div>
      <div  style={{flex: '1 1 240px'}} className="lh-copy flex f7 pl4-l pl0">
        <div className="self-end mb4-l">
          <div className="f5 mt4-l mt2">Home page</div>
          <div className="o-60 f6 mt1">The goal of the home page is to help user navigate and find what they are looking for. We identified three most common tasks: design, develop and data visualization and made them easy accessible from the main view. </div>
        </div>
      </div>
    </div>
    <div className="w-100 mt5 flex-l flex-none br2 mb3">
      <div style={{flex: `auto 1 824px`}}  className="br2  nl3-l nl0 ">
         <img style={{width: 824}} className="" src="../static/img/slide2.png" />
      </div>
      <div style={{flex: `1 1 240px`}} className="lh-copy flex pl4-l pl0">
        <div className="self-end f7 mb4-l">
          <div className=" mt4-l mt2 f5">Listing pages</div>
          <div className="o-60 mt1 f6">The listing pages consist of a left main view with all styles/tilesets in a user's account, and a right sidebar explaining how to use those resources. There is also a data upload popover showing the status of current upload. </div>
        </div>
      </div>
    </div>
  </div>

  <div className="w-100 bg-near-white pv5  lh-copy">
    <div className="mw9 cf ph6-l ph4 center">
      <div className="f3 light mb3">Modal</div>
      <div className="lh-copy f5 o-80 mb4">Modal is another main UI component. The challenge here is explaining abstract concepts and displaying large amount of information in a very confined space.</div>
      <div className="flex-l flex-none">
        <div style={{flex: `1 1 501px`}} className="mr4-l mr0">

            <div className=" overflow-y-hidden">
               <img style={{width: 501}} className="" src="../static/img/ms_modal_create_style.png" />
            </div>
            <div className="f5 mt3">New style modal</div>
            <div className="o-60 pr5-l pr0 f6 mb4 mt1">There are six styles users can choose as a base template for their design. The goal of this modal is to help them make an informed decision on which style to pick based on different needs. </div>
        </div>
        <div style={{flex: `1 1 397px`}}  className="ml4-l ml0">

            <div className="overflow-y-hidden">
               <img style={{width: 397}} className="" src="../static/img/ms_modal_composite.png" />
            </div>
            <div className="f5 mt3">Layer composite modal</div>
            <div className="o-60 pr5-l pr0 f6 mb4 mt1">Composite means combining various data sources for use cases like label collision detection. Here I tried to use illustration to explain a abstract concept. </div>
        </div>

      </div>
    </div>
  </div>


  <div className="mw9 ph6-l cf center ph4 pt5">
    <div className="flex mb4">
      <div className="w-100 w-80-m w-70-l relative fl">
        <div className="f3 light mb3">What I learned</div>
        <div className="lh-copy mt3 f5 o-80">
          Coming to the team at a later stage definitely makes the job more daunting since I have less context about the product history. Luckily, the team at Mapbox values deeply about open communication and they documented everything, down to every small UI tweaks, on Github. A big part of what I do at the beginning was just reading through the ticket to better understand how certain decisions are made.</div>
         <div className="lh-copy mt3 f5 o-80">
          This experience helped me understand the importance of documentation and communication. I tried my best later on to apply the same principles to other projects I worked on: 1) Demonstrate clearly with mockups what I am trying to achieve, 2) Gather constant feedbacks from engineers to build consensus, and 3) Document the reason behind every design decision with clarity.  </div>
         <div className="lh-copy mt3 f5 o-80">
           Sometimes better communication also means going the extra mile to make a prototype or open a pull request. Using the same tool to design and develop and communicate really helps build empathy between designers and engineers. In a small team and a highly iterative environment, opening a pull request also brings more credibility to the design decisions than ../static images. It allows me to establish trust and introduce systematic changes merely a few months before the launch. </div>
      </div>
    </div>
  </div>

  <div className="mw9 cf ph6-l ph4 mt4 center">
    <div className="flex-l flex-none ">
      <div  style={{background: `#3887BE`}} className="flex-auto br3 mr2-l mr0 justify-center flex items-center pv5 ph4">
        <img style={{width: 360}} src="../static/img/2.svg" />
      </div>
      <div style={{background: `#56B881`}} className="flex-auto br3 ml2-l ml0 mt3 mt0-l justify-center flex items-center pv5 ph4 ">
        <img style={{width: 360}} src="../static/img/3.svg" />
      </div>
    </div>
     <div className="o-60 f7 mt3">Some illustrations I did for the Studio sign up page. </div>
  </div>

  <Footer />
</div>)





