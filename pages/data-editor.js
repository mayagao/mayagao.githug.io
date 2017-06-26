import React from 'react'
import WorkFooter from '../components/work_footer'
import WorkHeader from '../components/work_header'
import Page from '../layouts/page'
import Link from 'next/link'
import { styles } from '../components/styles'

const headerInfo = {
  title: 'Dataset Editor',
  role: 'UI Design & Dev',
  release: 'August, 2016',
  team: [
    {
      name: 'Matthew Whittemore',
      title: '(engineering)'
    },
    {
      name: 'Saman Bemel-Benrud',
      title: '(engineering)'
    },
    {
      name: 'David Clark',
      title: '(engineering)'
    },
    {
      name: 'Tom MacWright',
      title: '(engineering)'
    },
  ],
  image: (
    <div>
       <div className="w-60-l dn db-l w-100 fl nt5 mb3">
          <img style={{minWidth: 925}} className="" src="../static/img/de_header.png" />
        </div>
        <div className="w-60-l db dn-l mt4 w-100 fl nb6 nl5-l nl2 mb4">
          <img style={{minWidth: 660}} className="" src="../static/img/home_data.png" />
        </div>
    </div>
  )
}
const featureDetails = [
  {
    imageSource: '../static/img/de_field.png',
    title: 'Add property',
    description: 'Preview existing fields in the dataset and add all fields with one click.'
  },
  {
    imageSource: '../static/img/de_value.png',
    title: 'Add value',
    description: 'Show existing values for a field and the aiblity to define number or string type.'
  },
  {
    imageSource: '../static/img/de_search.png',
    title: 'Search features',
    description: 'A quick to search for features based on field and value in the map context.'
  }
]
export default () => (
  <Page>

   <WorkHeader headerInfo={headerInfo} />

    <div className={`${styles.limiter} ${styles.columnContainer}`}>
      <div className={`${styles.leftColumn}`}>
         <div className={`${styles.txtBody} mb4`}>
           Mapbox Studio dataset editor provides a simple way to create and modify geospatial data.
           It stores data as GeoJSON files containing a list of features with coordinates,
           geometry and property information. Users can draw, import, edit and manage feature.
           Most traditioanl GIS software has complicated interface and requires specialized training to use.
           We wanted this tool to be accessible to not just GIS professionals,
           but also designers who want to create a data visualizations or developer who needs custom data for their apps.
         </div>
          <div className={`${styles.txtH2}`}>The Challenges</div>
          <div className={`${styles.txtBody}`}>
            The most difficult part of this project is definitely prioritizing features,
            deciding which to build for the initial release.
            We wanted to provide a foundation for more complicated features down the line and maintaining a balance between simplicity and flexibility.
            A few main design challenges we've identified early on:
          </div>
          <ol className={`${styles.txtBody} mb-list mt4`}>
            <li className="pb2"><span className="f5 dib ">Shared property fields</span>. <span className="">Feautures inside one dataset usually share the same set of property fields. However we don't store such information in GeoJSON files. </span></li>
            <li className="pb2"><span className="f5 dib ">Search</span><span className="">. It was difficult to filter the dataset and find specific features. </span></li>
            <li className=""><span className="f5 dib ">Precision</span><span className="">. Spatial data is precise and we want to give users full control when it's needed.</span> </li>
          </ol>
      </div>
    </div>

    <div className="w-100 bg-mb pv3-l white ph4-l ph2 pb3 pb0-l">
      <div className="pt4 tc mb4 f6">
        <span className="o-70 pl1">Dataset Editor Iteration 1</span>
      </div>
      <div className="flex-ns mw8 center flex-none pb4">
        <div style={{flex: '1 1 440px'}} className="mr3-ns mr0">
          <img className="" src="../static/img/de1_left.png" />
          <div className="pv2 tl relative f6 o-70 mb4 mb0-ns">Feature list and property panel</div>
        </div>
        <div style={{flex: '1 1 542px'}} className="">
         <img className="" src="../static/img/de1_right.png" />
         <div className="pv2 tl relative f6 o-70 mb0-ns">Geometry panel and multi-select</div>
        </div>
      </div>
    </div>

    <div className={`${styles.limiter} ${styles.columnContainer}`}>
      <div className={`${styles.leftColumn}`}>
          <div className="f5 mt2 mb2">
            Iteration 1
          </div>
          <div className={`${styles.txtH2}`}>
            Multi-select and Feature List
          </div>
          <div className={`${styles.txtBody} mb3`}>
            In early iterations of the data editor,
            the UI consisted of a feature list on the left, and a map view on the right.
            In the list every feature needs a unique identifier.
            This introduces a problem because a concept like "name" does not really exist in GeoJSON.
            Creating such a concept adds significant implementation burden.
          </div>
          <div className={`${styles.txtBody} mb3`}>
            Another problem I tried to tackle here is editing the fields of multiple features at the same time.
            Same as names, the concept of "shared property fields" also don't exist in GeoJSON.
            Every feature can have a list of different property fields.
          </div>
          <div className={`${styles.txtBody} mb3`}>
            The question is if we want to adopt a UI that's similar to the GeoJSON structure,
            or diverge from it more dramatically. We took a step back and did a few user testings.
            We discovered that those names don't really help people find features.
            They usually associate one feature with multiple properties and sometimes laso it's location on the map.
            Tom suggested removing the list design and simplifying the UI to focus on the main tasks: draw, import, and edit.
          </div>
        </div>

    </div>

    <div className="w-100 bg-mb pv3-l white ph4-l ph2 pb3 pb0-l">
      <div className="pt4 tc mb4 f6">
        <span className="o-70 pl1">Dataset Editor Iteration 2</span>
      </div>
      <div className="flex-ns mw8 center flex-none pb4">
        <div style={{flex: '1 1 533px'}} className="mr5-ns mr0">
          <img className="" src="../static/img/de2_left.png" />
          <div className="pv2 tl relative f6 o-70 mb4 mb0-ns">Property panel and code panel</div>
        </div>
        <div style={{flex: '1 1 359px'}} className="">
         <img className="" src="../static/img/de2_right.png" />
         <div className="pv2 tl relative f6 o-70 mb0-ns">A layout variation: display editor inside a popover.</div>
        </div>
      </div>
    </div>

    <div className={`${styles.limiter} ${styles.columnContainer}`}>
      <div className={`${styles.leftColumn}`}>
        <div className="f5 mt2 mb2">
         Iteration 2</div>
        <div className={`${styles.txtH2}`}>
         Property and Code Editor</div>
        <div className={`${styles.txtBody} mb3`}>
          The second major iteration focused on simplifying and refocusing. Without the feature list panel,
          there's a lot more space to directly draw on the map. By removing multi-select,
          we can focus on refining single feature edit. The "name" concept was completely removed in this iteration.
          Instead wen simply used geometry type plus coordinates to represent the feature.
        </div>
        <div className={`${styles.txtBody} mb3`}>
          A big change we introduced here is the code editor.
          Users can access it through the <code className="f7">view source</code> tab.
          This allows for more precise control over the data,
          especially when people want to copy-paste coordinates.
          The design also reflects how the data is represented in the API level.
          It is a good example of how we retain flexibility and show complexity only when it's needed.
        </div>
        <div className={`${styles.txtBody} mb3`}>
          Another main focus of this iteration is draw interactions.
          How to start drawing, modify a node of the shape or close a shape?
          I sketched out some ideas and worked with Matthew to implement them in mapbox-gl-draw,
          the framework the editor uses for this interaction.
        </div>
      </div>
      <div className={`${styles.rightColumn}`}>
        <div className={`${styles.rightColumnContent}`}>
          <img style={{width: 266}} className="pl1 dib" src="../static/img/de_draw.png" />
          <div className="o-30 mt3  f7 lh-copy">Draw interactions</div>
        </div>
      </div>
    </div>

    <div className="w-100 bg-mb pv3-l white ph4-l ph2 pb4 pb0-l">
      <div className="pt4 tc mb4 f6">
        <span className="o-70 pl1">Dataset Editor Iteration 3</span> <span className="o-40">June, 2016</span>
      </div>
      <div className="flex-ns mw8 center flex-none pb4">
        <div style={{flex: '1 1 500px'}} className="mr4-ns mr0">
          <img className="" src="../static/img/de3_left.png" />
          <div className="pv2 tl relative f6 o-70 mb4 mb0-ns">Property panel</div>
        </div>
        <div style={{flex: '1 1 335px'}} className="">
         <img className="" src="../static/img/de3_right.png" />
         <div className="pv2 tl relative f6 o-70 mb0-ns">Location and feature search.</div>
        </div>
      </div>
    </div>

    <div className="bg-near-white w-100 pv4 lh-copy">
      <div className={`${styles.limiter}`}>
        {featureDetails.map((fd, i) => (
          <div className="fl pv3 w-100  w-third-ns pr4-ns">
            <img style={{width: 280}}  src={fd.imageSource} />
            <div className="f5 mt3">{fd.title}</div>
            <div className="f6 o-60 mt1">{fd.description}</div>
          </div>))}
      </div>
    </div>

    <div className={`${styles.limiter}`}>

        <div className={`${styles.leftColumn} mt4 mb4`}>
          <div className="f5 mt2 mb2">
             Iteration 3
          </div>
          <div className={`${styles.txtH2}`}>
            Property Editing and Feature Search
          </div>
          <div className={`${styles.txtBody} mb3`}>
            With almost all the basic functionalities in place,
            we started more aggressively user-testing the tool every week.
            User testings at this stage helped us identify intricate problems and solve them through minimum UI changes.
          </div>
          <div className={`${styles.txtBody}`}>
            The property values can be a number or string type. This differentiation is important when creating filters for visualization.
            I added a type toggle next to values that contains number characters only to solve the problem.
            We also added to a grid of small location preview images to the search UI to help users find features more quickly.
          </div>
        </div>

      <div className="w-100 mt5 flex-l flex-none br2 mb4">
        <div style={{flex: `auto 1 824px`}}  className="">
          <img style={{width: 824}} className="br2 shadow nl0" src="../static/img/de_view.png" />
        </div>
        <div style={{flex: `1 1 240px`}} className="lh-copy flex pl4-l pl0">
          <div className="self-end f7 mb4-l mt3 mt0-l">
            <div className={`${styles.txtH3}`}>Dataset view page</div>
            <div className={`${styles.txtSbody}`}>
            An overview of the dataset and a starting point for further actions like visualization or development.</div>
          </div>
        </div>
      </div>
    </div>

    <div className="w-100 bg-near-white pv3 lh-copy">
      <div className={`${styles.limiter}`}>
        <div className="flex-l flex-none items-end">
          <div style={{flex: `1 1 500px`}} className="mr4-l mr0 mb4 mb0-l">
              <div className=" overflow-y-hidden">
                 <img style={{width: 500}} className="shadow" src="../static/img/de_modal_new.png" />
              </div>
              <div className={`${styles.txtH3} mt2`}>New dataset</div>
              <div className={`${styles.txtSbody}`}>
                Create a blank dataset or import from other sources.
              </div>
          </div>
          <div style={{flex: `1 1 500px`}}  className="ml4-l ml0">
              <div className="overflow-y-hidden">
                 <img style={{width: 500}} className="shadow" src="../static/img/de_modal_export.png" />
              </div>
              <div className={`${styles.txtH3} mt2`}>Dataset export</div>
              <div className={`${styles.txtSbody}`}>
                Export to a new tileset or overwrite.
              </div>
          </div>
        </div>
      </div>
    </div>

    <div className={`${styles.limiter}`}>
      <div className={`${styles.leftColumn}`}>
        <div className={`${styles.txtH2} mt3`}>What I learned</div>
        <div className={`${styles.txtBody} mb3`}>
          Test early and often. Sometimes the problems are so intricate
          I would never have believed their existance if I didn't watch another person struggling with it.
          User testing prevents us from relying too much on what have been done in the past.
          It helps us focus on designing practical systems that support interactions.
        </div>
        <div className={`${styles.txtBody}`}>
          Design is really a team team effort, especially for a complicated product with many moving parts.
          In the past I often became frustrated when I could not get other people to like my work. But arguments can often bring in new perspectives.
          I don't need to agree with all of them but I have to understand them.
          It's less about winning all the battles, and more about realizing that I can not produce the best work without the people around me.
        </div>
      </div>
    </div>

  <WorkFooter />
 </Page>
)





