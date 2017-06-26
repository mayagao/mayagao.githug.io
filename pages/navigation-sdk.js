import React from 'react'
import WorkFooter from '../components/work_footer'
import WorkHeader from '../components/work_header'
import Page from '../layouts/page'
import Link from 'next/link'
import { styles } from '../components/styles'

const headerInfo = {
  title: 'Navigation SDK',
  role: 'UI & UX Design',
  release: 'May, 2017',
  team: [
    {
      name: 'Matthew Whittemore',
      title: '(enginnering)'
    },
    {
      name: 'Saman Bemel-Benrud',
      title: '(enginnering)'
    },
    {
      name: 'David Clark',
      title: '(enginnering)'
    },
    {
      name: 'Tom MacWright',
      title: '(enginnering)'
    },
  ],
  image: (
    <div>
       <div className="w-60-l dn db-l w-100 fl nt5 nb6 mb3">
          <img style={{width: 470}} className="fr" src="../static/img/ns_header.png" />
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
         <div className={`${styles.txtBody} mb3`}>
           Mapbox Navigation SDK is a developer product we released earlier this year,
           available on both iOS and Android. It provides a simple,
           customizable framework for developers to add turn-by-turn navigation to their application.
           Instead of directing users outside of the app to other third-party map navigation providers,
           every part of the user expeience can become more cohesive and stay inside one app.
         </div>
          <div className={`${styles.txtBody}`}>
            For this project I was tasked to collaborate closely with the cartography, iOS and Android engineer team to create a customizable design system for the SDK.
            I also designed a marketing package to showcase what the entire flow of in-app navigation can be integrated into different use cases.
          </div>
          <div className={`${styles.txtH2} f4  mt5`}>
            Styleguide
          </div>
          <div className={`${styles.txtBody}`}>
            A font and color system that provides good contrast and legibility by default, but is also easily customizable.
          </div>


      </div>
    </div>

    <div className={`${styles.limiter} nt4`}>

      <div className="flex-ns center flex-none pb4">
        <div style={{flex: '1 1 50%'}} className="mr3-ns mr0">
          <img className="" src="../static/img/ns_font.png" />
        </div>
        <div style={{flex: '1 1 50%'}} className="ml3-ns ml0">
         <img className="" src="../static/img/ns_color.png" />

        </div>
      </div>
    </div>



   <div className="w-100 bg-near-white pt3">
    <div className={`${styles.limiter} mt4`}>

      <div className="flex-ns center flex-none pb4">

        <div style={{flex: '1 1 20%'}} className="mr3">
             <div className={`${styles.txtH2} f4 mt4`}>
            Direction Icons
          </div>
          <div className={`${styles.txtBody}`}>
            I used bold shapes to make sure icons are legible when displayed at different sizes.
          </div>
        </div>
          <div style={{flex: '1 1 80%'}} className="ml4 nr5">
            <img className="" src="../static/img/icons.png" />
          </div>

      </div>
    </div>

</div>


     <div className={`${styles.limiter} mt5 mb5`}>

      <div className="flex-ns center flex-none pb4">

        <div style={{flex: '1 1 20%'}} className="mr3">
             <div className={`${styles.txtH2} f4 `}>
            Interactions
          </div>
          <div className={`${styles.txtBody} pr4`}>
            I used Framer to prototype small interactions like sound toggle, menu drawer and route list view.
          </div>
        </div>
          <div style={{flex: '0 1 247px'}} className="mr3">
            <img className="br3 ba b--black-10 shadow" src="../static/img/sound.gif" />
          </div>
          <div style={{flex: '0 1 247px'}} className="mr3 ">
            <img className="br3 ba b--black-10 shadow" src="../static/img/list.gif" />
         </div>
          <div style={{flex: '0 1 247px'}} className="">
            <img className="br3 ba b--black-10 shadow" src="../static/img/scroll.gif" />
          </div>
      </div>
    </div>



    <div className="w-100 bg-near-white pt3">
      <div className={`${styles.limiter}`}>
       <div className={`${styles.txtH2} f4 mt4`}>
            Dark and Light Theme
          </div>
          <div className={`${styles.txtBody}`}>
            The SDK provides default dark and light style switch that’s suitable for daytime and night time driving.
          </div>
      <div className="flex-ns mt4 center flex-none pb4">

        <div style={{flex: '1 1 48%'}} className="nl4">
          <img className="" src="../static/img/ns_light.png" />
        </div>

         <div style={{flex: '1 1 4%'}} className="items-center justify-center flex">

            <img className="w3" src="../static/img/switch.png" />

          </div>

          <div style={{flex: '1 1 48%'}} className=" nr4">
            <img className="" src="../static/img/ns_dark.png" />
          </div>

      </div>
    </div>
    </div>







      <div className="overflow-hidden lh-title">

    <div className={`${styles.limiter}`}>




      <div className={`${styles.txtH2} f4 mt4 tc`}>
        Customizable interface
      </div>
      <div className={`${styles.txtBody} tc mb5`}>
        How the navigation SDK can be integrated and used in different applications.
      </div>



      <div className="flex-ns mt4 center flex-none pb4">

        <div style={{flex: '1 1 33.33%'}} className="nl6">
          <img className="" src="../static/img/ns1.png" />
        </div>

         <div style={{flex: '1 1 33.33%'}} className="">

            <img className="" src="../static/img/ns2.png" />

          </div>

          <div style={{flex: '1 1 33.33%'}} className="nr6">
            <img className="" src="../static/img/ns3.png" />
          </div>

      </div>





    </div>

  </div>







  <WorkFooter />
 </Page>
)





