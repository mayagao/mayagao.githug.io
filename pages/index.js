import React from 'react'
import Header from '../components/header'
import Menu from '../components/menu'
import WorkFooter from '../components/work_footer'
import Link from 'next/link'
import Head from 'next/head'
import { styles } from '../components/styles'
const projects = [
  {
    themeColor: '#8a88cd',
    type: 'UI & UX',
    image:
    (<div className="mt4-ns mt2 ph4-ns ph0 nb4-ns nb0">
        <img style={{ width: '717px'}} className="br3 shadow"  src="static/img/signup_3.png" />
      </div>),
    title: 'Developer Experience',
    link: '/developer',
    description: 'Design a seamless, cohesive developer experience across signup onboarding, help guide, and documentation system.'
  },
  {
    themeColor: '#8a88cd',
    type: 'UI & UX, development',
    image:
    (<div className="mt4-ns mt2 ph4-ns ph0 nb4-ns nb0">
        <img style={{ width: '717px'}} className=""  src="static/img/home_studio.png" />
      </div>),
    title: 'Mapbox Studio',
    link: '/mapbox-studio',
    description: 'Retaining flexibility that comes with powerful customization options while designing an interface that feels learnable.'
  },
  {
    themeColor: '#8a88cd',
    type: 'UI & UX',
    image:
    (<div className="mt4-ns mt2 ph4-ns ph0 nb4-ns nb0">
        <img style={{ width: '717px'}} className=""  src="static/img/home_ds.png" />
      </div>),
    title: 'Data-driven Styling',
    link: '/data-driven-styling',
    description: 'A fun little experiment of designing for complicated programming expressions.'
  },
  {
    themeColor: '#6b88a6',
    type: 'UI & UX, development',
    image:
      (<div className="mt4-ns mt2 ph4-ns ph0 nb4-ns nb0">
        <img style={{ width: '717px'}}  src="static/img/home_data.png" />
      </div>),
    title: 'Data Editor',
    link: '/data-editor',
    description: 'Building a fast, simple spatial data editing tool for developers and designers.'
  },
  {
    themeColor: '#4884ca',
    type: 'Mobile design',
    image:
    (<div className="mt4-ns mt2 ph4-ns ph0 nb5-ns nb0">
        <img style={{ width: '679px'}} className=""  src="static/img/home_navigation_sdk.png" />
      </div>),
    title: 'Navigation SDK',
    link: '/navigation-sdk',
    description: 'Creating a design guideline for a customizable turn-by-turn navigation framework.'
  }
]
export default () => (
  <div className="">
    <Head>
      <style>{`

      @media screen and (min-width: 30em) {
        .bg-near-white-ns {
          background: #f4f4f4 !important;
        }
      }

    `}</style>
    </Head>
    <Header />
      <div className="">
        <div className={`${styles.limiter}`}>
          <Menu />
        </div>
      </div>
      <div className={`${styles.limiter} nt5`}>
        <div className="f5 mb5 fl w-100 f4 lh-copy">
          {projects.map((p,i) => (
            <div key={i} className="mb3">
             <div className="w-100 mt5 flex-l flex-none mb3">
              <div style={{flex: '1 1 70%'}} className="tc bg-transparent bg-near-white-ns br3 overflow-hidden">
                {p.image}
              </div>
              <div style={{flex: '1 1 30%'}} className="lh-copy mt3 mt0-l flex f7 pl4-l pl0">
                <div className="self-end">
                 
                  <div className={`txt-xl db link black lh-title o-100 heading mb2`} >{p.title}</div>
                  <div className={`${styles.txtBody} o-50`}>{p.description}</div>
                  <Link prefetch href={p.link}><a className='mt2 db link dim blue f5'> Learn more <img className='v-top mt1 h1 ' src='../static/icons/next.svg' /></a></Link>
                </div>
              </div>
            </div>
            </div>))}
        </div>
      </div>
      <WorkFooter />
    </div>
  )