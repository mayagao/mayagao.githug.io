import React from 'react'
import Header from '../components/header'
import Menu from '../components/menu'
import Slideshow from '../components/slideshow'
import DsTable from '../components/ds_table'
import Link from 'next/link'
import Head from 'next/head'
import Page from '../layouts/page'
import { styles } from '../components/styles'
import FlowSection from '../components/flow_section'
import SlideColumn from '../components/slide_column'
import WorkFooter from '../components/work_footer'

const formConnector = (
  <div className=''>
    <div className='bl bw1 dib h0 center b--black-10' />
    <div className='h0 ml2 mr2 br2 nt1 tc br--top bt bl br bw1 b--black-10' />
  </div>
)
const functionTypes = [
  {
    title: 'Exponential',
    description: 'Generate an output by interpolating between stops just less than and just greater than the function input.',
    code:
`'circle-color': {
  'property': ‘level’,
  'type': ‘exponential’,
  'stops': [
    [1, '#009900'],
    [100, '#1666ff']
}`,
    image:
    (<div>
      <div className='flex w-100 mb2 justify-between'>
        <div style={{ background: '#61AAFE' }} className='bg-dark-blue br-pill pv2 ph2' />
        <div style={{ background: '#89A6F6' }} className='bg-blue br-pill pv2 ph2' />
        <div style={{ background: '#ACA3F0' }} className='bg-light-blue br-pill pv2 ph2' />
        <div style={{ background: '#D79DE7' }} className='bg-lightest-blue br-pill pv2 ph2' />
      </div>
       {formConnector}
      <div className='o-40 pt1 cf mb2'><span className='fl'>1</span><span className='fr'>99</span></div>
      <div  className='h1 br2 br-pill' style={{ background: 'linear-gradient(to right, #61AAFE 0%, #D79DE7 100%)'}} />
    </div>)
  },
  {
    title: 'Interval',
    description: 'Generate an output by interpolating between stops just less than and just greater than the function input.',
    code:
`'circle-color': {
    'property': ‘density’,
    'type': ‘interval’,
    'stops': [
      [25, '#009900'],
      [75, '#cc00ff'],
      [100, '#1666ff']
}`,
    image:
    (<div>
      <div className='flex w-100 mb2 justify-around'>
        <div style={{ background: '#61AAFE' }} className='bg-dark-blue br-pill pv2 ph2' />
        <div style={{ background: '#ACA3F0' }} className='bg-light-blue br-pill pv2 ph2' />
        <div style={{ background: '#D79DE7' }} className='bg-lightest-blue br-pill pv2 ph2' />
      </div>
      <div className='flex-justify-between flex'>
        <div className='w-third'>{formConnector}</div>
       <div className='w-third'>{formConnector}</div>
       <div className='w-third'>{formConnector}</div>
      </div>
      <div className='flex w-100 justify-between'>
        <div className='o-40 pt1 cf mb2'>0</div>
        <div className='o-40 pt1 cf mb2'>25</div>
        <div className='o-40 pt1 cf mb2'>75</div>
        <div className='o-40 pt1 cf mb2'>100</div>
      </div>
      <div className='flex w-100 mb2 justify-between'>
        <div className='h1 w-third br-pill br--left' style={{  background: '#61AAFE' }} />
        <div className='h1 w-third ml1' style={{  background: '#ACA3F0' }} />
        <div className='h1 w-third br-pill  ml1 br--right' style={{  background: '#D79DE7' }} />
      </div>
    </div>)
  },
  {
    title: 'Categorical',
    description: 'functions return the output value of the stop equal to the function input.',
    code:
`'circle-color': {
    'property': 'type',
    'type': 'categorical',
    'stops': [
      [‘low’, '#009900'],
      [‘medium’, '#cc00ff'],
      [‘high’, '#1666ff']
}`,
    image:
    (<div>
      <div className='flex w-100 mb2 flex-column'>
        <div className='pt1 cf mb2'><span className='o-40 fl'>Low</span><div style={{ background: '#61AAFE' }} className='dib fr bg-dark-blue br-pill pv2 ph2' /></div>
        <div className='pt1 cf mb2'><span className='fl o-40'>Meidum</span><div style={{ background: '#ACA3F0' }} className='dib fr bg-dark-blue br-pill pv2 ph2' /></div>
        <div className='pt1 cf mb2'><span className='fl o-40'>High</span><div style={{ background: '#D79DE7' }} className='dib fr bg-dark-blue br-pill pv2 ph2' /></div>
      </div>
    </div>)
  },
]


const propertyOrZoom = [
  {
    title: 'Zoom',
    description: 'Radius increase as zoom level increases',
    code:
`'circle-radius': {
    stops: [[8, 6], [16, 40]]
}`,
    image:
    (<div className='flex flex-row'>
      <div className='flex flex-column justify-end items-start w-100 mb2'>
        <div style={{ background: '#BDDBFF', width: 24, height: 24}} className='blue self-center br-100'>6</div>
        <div className='o-40 self-center'>z8</div>
      </div>
      <div className='flex flex-column justify-end items-start w-100 mb2'>
        <div style={{ background: '#BDDBFF', width: 60, height: 60}} className='blue self-center justify-center flex br-100'><span className='self-center '>40</span></div>
        <div className='o-40 self-center'>z16</div>
      </div>
    </div>)
  },
  {
    title: 'Property',
    description: 'Radius increase as property ‘sqrt’ increases',
    code:
`'circle-radius’: {
    property: 'sqrt',
    stops: [
        [0, 6],
        [250, 40]
    ]
}`,
    image:
    (<div className='flex flex-row'>
      <div className='flex flex-column justify-end items-start w-100 mb2'>
        <div style={{ background: '#BDDBFF', width: 24, height: 24}} className='blue mb2 self-center br-100'>6</div>
        <div style={{ background: '#BDDBFF', width: 60, height: 60}} className='blue mb2 self-center justify-center flex br-100'><span className='self-center '>40</span></div>
        <div className='o-40 self-center'>z8</div>
      </div>
      <div className='flex flex-column justify-end items-start w-100 mb2'>
        <div style={{ background: '#BDDBFF', width: 24, height: 24}} className='blue mb2  self-center br-100'>6</div>
        <div style={{ background: '#BDDBFF', width: 60, height: 60}} className='blue mb2  self-center justify-center flex br-100'><span className='self-center '>40</span></div>
        <div className='o-40 self-center'>z16</div>
      </div>
    </div>)
  },
  {
    title: 'Zoom and property',
    description:
      `Radius increase as property ‘sqrt’ increases.
      Radius becomes proportionally bigger as zoom level increase.`,
    code:
`'circle-radius': {
  property: 'sqrt',
  stops: [
    [{zoom: 8,  value: 0}, 3],
    [{zoom: 8,  value: 250}, 20],
    [{zoom: 16, value: 0}, 6],
    [{zoom: 16, value: 250}, 40]
  ]
}`,
    image:
    (<div className='flex flex-row'>
      <div className='flex flex-column justify-end items-start w-100 mb2'>
        <div style={{ background: '#BDDBFF', width: 22, height: 22}} className='blue mb2 self-center br-100'>3</div>
        <div style={{ background: '#BDDBFF', width: 40, height: 40}} className='blue mb2 self-center justify-center flex br-100'><span className='self-center '>20</span></div>
        <div className='o-40 self-center'>z8</div>
      </div>
      <div className='flex flex-column justify-end items-start w-100 mb2'>
        <div style={{ background: '#BDDBFF', width: 30, height: 30}} className='blue mb2 pt1 self-center br-100'>6</div>
        <div style={{ background: '#BDDBFF', width: 60, height: 60}} className='blue mb2  self-center justify-center flex br-100'><span className='self-center '>40</span></div>
        <div className='o-40 self-center'>z16</div>
      </div>
    </div>)
  },
]

const functionSlide = [
  {
    index: 1,
    title: 'Exponential',
    content: (
      <SlideColumn content={[
        ['Open up the vaue editor', '../static/img/function_s1_l.png'],
        ['Select a data field', '../static/img/function_s1_m.png'],
        ['Edit value', '../static/img/function_s1_r.png']
      ]} />
    )
  },
  {
    index: 2,
    title: 'Interval',
    content: (
      <SlideColumn content={[
        ['Open up the vaue editor', '../static/img/function_s1_l.png'],
        ['Select a data field', '../static/img/function_s2_m.png'],
        ['Edit value', '../static/img/function_s2_r.png']
      ]} />
    )
  },
  {
    index: 3,
    title: 'Categorical',
    content: (
      <SlideColumn content={[
        ['Open up the vaue editor', '../static/img/function_s1_l.png'],
        ['Select a data field', '../static/img/function_s3_m.png'],
        ['Edit value', '../static/img/function_s3_r.png']
      ]} />
    )
  }

]


const complexSlide = [
  {
    index: 1,
    title: 'Exponential',
    content: (


      <SlideColumn content={[
        ['Open up the vaue editor', '../static/img/complex_s1_l.png'],
        ['Select a data field', '../static/img/complex_s1_m.png'],
        ['Edit value', '../static/img/complex_s1_r.png']
        ]} />

)
  },
  {
    index: 2,
    title: 'Interval',
    content: (<SlideColumn content={[
        ['Open up the vaue editor', '../static/img/complex_s2_l.png'],
        ['Select a data field', '../static/img/complex_s2_m.png'],
        ['Edit value', '../static/img/complex_s2_r.png']
        ]} />)
  },
  {
    index: 3,
    title: 'Categorical',
    content: (<SlideColumn content={[
        ['Open up the vaue editor', '../static/img/complex_s3_l.png'],
        ['Select a data field', '../static/img/complex_s3_m.png'],
        ['Edit value', '../static/img/complex_s3_r.png']
        ]} />)
  }

]

export default () => (
  <Page>
    <Head>
      <style>{`
      .h0 {
        height: 0.5rem !important;
      }
      .w0 {
        width: 0.5rem !important;
      }
      .rotate-neg90 {

    -ms-transform: rotate(-90deg); /* IE 9 */
    -webkit-transform: rotate(-90deg); /* Chrome, Safari, Opera */
    transform: rotate(-90deg);
      }
    `}</style>
    </Head>
    <div className={`${styles.limiter}`}>
      <Menu />
      <div className='cf mt5'>
        <div className="f5 o-50 mb2">Small Project</div>
        <div className={`${styles.txtH1} nl1`}>Data-driven Styling </div>
        <div className={`f3 w-80 lh-copy o-100 headline mt3`}>
          Designing a UI for data-driven styling was a small project I did in June 2016,
          when we first launched this feature in Mapbox GL JS.
          The goal of this is mostly for exploring possibile options and informing future technical decisions.
        </div>
        <div className='mt5'>
          <div className={`${styles.txtXL} mb2`}>Three types of property functions</div>
          <div className={`${styles.txtBody}`}>
            Optional enum. One of identity, exponential, interval, categorical.
          </div>
        </div>
        <DsTable content={functionTypes} />
      </div>
    </div>

    <div className='bg-near-white pv4 mt4'>
      <div className={`${styles.limiter} `}>
        <div className={`${styles.txtXL} mb4 ml2`}>Three types of property functions</div>
        <Slideshow content={functionSlide} />
      </div>
    </div>

    <div className={`${styles.limiter}`}>
      <div className='cf pv4'>
        <div className='mt4'>
          <div className={`${styles.txtXL} mb2`}>Property and zoom functions</div>
          <div className={`${styles.txtBody}`}>
            The value for any layout or paint property may be specified as a function.
            Functions allow you to make the appearance of a map feature change with the current zoom level and/
            or the feature's properties.
          </div>
        </div>
        <DsTable content={propertyOrZoom} />
      </div>
    </div>

    <div className='bg-near-white pv4 mt4'>
      <div className={`${styles.limiter} `}>
         <div className={`${styles.txtXL} mb4 ml2`}>Property function and zoom function UI</div>


         <SlideColumn content={[
        ['Property function only', '../static/img/f_property.png'],
        ['Zoom fucntion only', '../static/img/f_zoom.png'],
        ['Zoom and property function', '../static/img/f_zoom_property.png']
      ]} />



      </div>
    </div>

    <div className={`${styles.limiter}`}>
      <div className='cf pv4'>
        <div className='mt4 mb4'>
          <div className={`${styles.txtXL} mb2`}>Complex value editing</div>
          <div className={`${styles.txtBody}`}>
            The value for any layout or paint property may be specified as a function.
            Functions allow you to make the appearance of a map feature change with the current zoom level and/or the feature's properties.
          </div>
        </div>
        <FlowSection />
      </div>
    </div>

    <div className='bg-near-white pt4 mt4'>
      <div className={`${styles.limiter}`}>
        <div className={`${styles.txtXL} mb4 ml2`}>Complex value editing</div>
        <Slideshow height='h7-l h-auto' content={complexSlide} />
      </div>
    </div>


     <div className={`${styles.limiter} mt5 nb5 cf`}>

        <div className={`${styles.txtXL} mb2`}>What I have learned</div>
        <div className={`${styles.txtBody} w-70`}>
          Designing a UI for data-driven styling was a small project I did in June 2016,
          when we first launched this feature in Mapbox GL JS.
          The goal of this is mostly for exploring possibile options and informing future technical decisions.
        </div>

        <div className='flex-l flex-non justify-center '>
          <div className='pt5 mt3'>
            <img style={{ width: 20, height: 20 }} className='o-90 db mb2' src='../static/icons/play_button.svg' />
            <div className={`${styles.txtH3} mb2`}>Prototypes</div>
            <div className={`${styles.txtSbody} `}>
              I used prototypes to demonstrate and communicate user flows.
            </div>

          </div>

          <div className='nr5 dn db-l'>
            <video style={{ width: 800 }} controls={false} loop={true} autoPlay={true} poster='../static/img/ds_animate.png'>
              <source src='../static/img/ds_animate.mp4' type='video/mp4' />
            </video>
          </div>
          <div className='db dn-l'>
            <video className='w-100' controls={true} loop={true} autoPlay={true} poster='../static/img/ds_animate.png'>
              <source src='../static/img/ds_animate.mp4' type='video/mp4' />
            </video>
          </div>
        </div>

    </div>



    <WorkFooter />
  </Page>
)