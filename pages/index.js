import React from 'react'
import Header from '../components/header'
import Menu from '../components/menu'
import Link from 'next/link'
import { styles } from '../components/styles'
const projects = [
  {
    themeColor: '#8a88cd',
    image:
    (<div className="mt4 ph4 nb4">
        <img style={{ width: '717px'}} className=""  src="static/img/home_studio.png" />
      </div>),
    title: 'Mapbox Studio',
    link: '/mapbox-studio',
    description: 'Retaining flexibility that comes with all poweful customization options while designing a UI that feels learnable.'
  },
  {
    themeColor: '#6b88a6',
    image:
      (<div className="mt4 ph4 nb4">
        <img style={{ width: '717px'}}  src="static/img/home_data.png" />
      </div>),
    title: 'Data Editor',
    link: '/data-editor',
    description: 'Building a simple, fast spatial data editing tool for developers and designers.'
  },
  {
    themeColor: '#4884ca',
    image:
    (<div className="mt4 ph4 nb5">
        <img style={{ width: '679px'}} className=""  src="static/img/home_navigation_sdk.png" />
      </div>),
    title: 'Navigation SDK',
    link: '/navigation-sdk',
    description: 'Creating a design system for the customizable turn-by-turn navigation framework.'
  }
]
export default () => (
  <div className="bt b--black bw2 ">
    <Header />
      <div className="">
        <div className={`${styles.limiter}`}>
          <Menu />
          {/*
          <div className={`${styles.txtH1} mt5`}>Hi 👋 </div>
          <div className={`f3 w-70 lh-copy o-100 headline mt3`}>
            I am a product designer living and working in Washington D.C.
            Currently I design and build tools for developers and designers at Mapbox.
            Previously I worked at Lonely Planet and Upstatement.
          </div>
          */}
        </div>
      </div>
      <div className={`${styles.limiter} nt5`}>
        <div className="f5  mb5 fl w-100 f4 lh-copy">
          {projects.map((p,i) => (
            <div key={i} className="mb3">
             <div className="w-100 mt5 flex-l flex-none mb3">
              <div style={{flex: '1 1 70%'}} className="tc bg-near-white br3 overflow-hidden">
                {p.image}
              </div>
              <div  style={{flex: '1 1 30%'}} className="lh-copy mt3 mt0-l flex f7 pl4-l pl0">
                <div className="self-end">
                  <div className={`f6 lh-title tracked o-80 mb1 ttu`}>Case Study</div>
                  <Link prefetch href={p.link}><a className={`txt-xl db link black underline-hover lh-title o-100 headline mb2`} >{p.title}</a></Link>
                  <div className={`${styles.txtBody} o-50`}>{p.description}</div>
                </div>
              </div>
            </div>
            </div>))}
        </div>
      </div>
    </div>
  )