import React from 'react'
import Header from '../components/header'
import Menu from '../components/menu'
import Slideshow from '../components/slideshow'
import Link from 'next/link'
import Head from 'next/head'
import Page from '../layouts/page'
import { styles } from '../components/styles'
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
    title: 'Exponential',
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

const functionSlide = [
  {
    index: 1,
    title: 'Exponential',
    content: (<div className={`flex flex-row justify-between`}>
         <div className='mr3'>
           <div className='f6 o-60 ml2 mb3'>Open up the vaue editor</div>
           <img style={{ width: 286}} src='../static/img/function_s1_l.png' />
         </div>
         <div className='mr3'>
           <div className='f6 o-60 ml2 mb3'>Select a data field</div>
           <img style={{ width: 286}} src='../static/img/function_s1_m.png' />
         </div>
         <div className=''>
           <div className='f6 o-60 ml2 mb3'>Edit value</div>
           <img style={{ width: 286}} src='../static/img/function_s1_r.png' />
         </div>

      </div>
)
  },
  {
    index: 2,
    title: 'Interval',
    content: (<div className={`flex flex-row justify-between`}>
         <div className='mr3'>
           <div className='f6 o-60 ml2 mb3'>Open up the vaue editor</div>
           <img style={{ width: 286}} src='../static/img/function_s1_l.png' />
         </div>
         <div className='mr3'>
           <div className='f6 o-60 ml2 mb3'>Select a data field</div>
           <img style={{ width: 286}} src='../static/img/function_s2_m.png' />
         </div>
         <div className=''>
           <div className='f6 o-60 ml2 mb3'>Edit value</div>
           <img style={{ width: 286}} src='../static/img/function_s2_r.png' />
         </div>

      </div>)
  },
  {
    index: 3,
    title: 'Categorical',
    content: (<div className={`flex flex-row justify-between`}>
         <div className='mr3'>
           <div className='f6 o-60 ml2 mb3'>Open up the vaue editor</div>
           <img style={{ width: 286}} src='../static/img/function_s1_l.png' />
         </div>
         <div className='mr3'>
           <div className='f6 o-60 ml2 mb3'>Select a data field</div>
           <img style={{ width: 286}} src='../static/img/function_s3_m.png' />
         </div>
         <div className=''>
           <div className='f6 o-60 ml2 mb3'>Edit value</div>
           <img style={{ width: 286}} src='../static/img/function_s3_r.png' />
         </div>
      </div>)
  }

]
export default () => (
  <Page>
    <Head>
      <style>{`
      .h0 {
        height: 0.5rem !important;
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

        {functionTypes.map((ft,i) => (
          <div key={i} className='flex lh-copy bt b--black-10 pt4 items-end-m items-start items-start-l f6 flex-row-ns flex-column mt4'>
            <div className='flex flex-row-ns flex-column '>
              <div className={`dib mr4 mb2 f5`}>{ft.title}</div>
              <div className='flex flex-row-ns flex-column'>
                <div  className={`o-70 mb3 mw5-l mw-auto mr4`}>
                  {ft.description}
                </div>
                <div  style={{width: 300}} className='f7 br3 o-70 ph3 mr4 mb0-ns mb4 pv1 bg-near-white round'>
                  <pre>
                    {ft.code}
                  </pre>
                </div>
              </div>
            </div>
            <div style={{flexShrink: 0, width: 160}} className='flex tc flex-column'>
              {ft.image}
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className='bg-near-white pv4 mt4'>
      <div className={`${styles.limiter} `}>
        <Slideshow content={functionSlide} />
      </div>
    </div>



    <div className={`${styles.limiter}`}>

      <div className='cf mt5'>

        <div className='mt5'>
          <div className={`${styles.txtXL} mb2`}>Property and zoom functions</div>
          <div className={`${styles.txtBody}`}>
            The value for any layout or paint property may be specified as a function.
            Functions allow you to make the appearance of a map feature change with the current zoom level and/
            or the feature's properties.
          </div>
        </div>

        {propertyOrZoom.map((ft,i) => (
          <div key={i} className='flex lh-copy bt b--black-10 pt4 items-end-m items-start items-start-l f6 flex-row-ns flex-column mt4'>
            <div className='flex flex-row-ns flex-column '>
              <div className={`dib mr4 mb2 f5`}>{ft.title}</div>
              <div className='flex flex-row-ns flex-column'>
                <div  className={`o-70 mb3 mw5-l mw-auto mr4`}>
                  {ft.description}
                </div>
                <div  style={{width: 300}} className='f7 br3 o-70 ph3 mr4 mb0-ns mb4 pv1 bg-near-white round'>
                  <pre>
                    {ft.code}
                  </pre>
                </div>
              </div>
            </div>
            <div style={{flexShrink: 0, width: 160}} className='flex tc flex-column'>
              {ft.image}
            </div>
          </div>
        ))}
      </div>
    </div>


  </Page>
)