import React from 'react'
import Header from '../components/header'
import Link from 'next/link'
import { styles } from '../components/styles'
const projects = [
  {
    themeColor: '#8a88cd',
    imageSource: 'static/img/home_studio.png',
    title: 'Mapbox Studio',
    link: '/mapbox-studio',
    description: 'A point-and-click map design interface.'
  },
  {
    themeColor: '#6b88a6',
    imageSource: 'static/img/home_data.png',
    title: 'Data Editor',
    link: '/data-editor',
    description: 'A tool for spatial data editing.'
  },
  {
    themeColor: '#4884ca',
    imageSource: 'static/img/home_navigation_sdk.png',
    title: 'Navigation SDK',
    link: '/navigation-sdk',
    description: 'A framework for customizable turn-by-turn navigation.'
  }
]
export default () => (
  <div className="bt b--black bw2 ">
    <Header />
      <div className={`${styles.limiter}`}>
        <div className="f4 mt3">Maya Gao</div>
        <div className="fl w-30-ns w-100">
          <p className={`mt4 ${styles.txtBody}`}>
           I am a product designer living and working in Washington D.C.
           Currently I design and build things at Mapbox.
           In my day-to-day work I switch between UI design, prototyping
           and front-end development.
           Before Mapbox, I worked at Lonely Planet and Upstatement.
          </p>
          <div className="f5 mt3-ns nt1">
            <div className="db-ns mr2 dib"><a className={`${styles.link}`} href="https://dribbble.com/mayagao">Dribbble</a></div>
            <div className="db-ns mr2 dib mt2"><a className={`${styles.link}`}  href="https://github.com/mayagao">Github</a></div>
            <div className="db-ns mr2 dib mt2"><a className={`${styles.link}`}  href="https://www.linkedin.com/in/mayagq">LinkedIn</a></div>
          </div>
        </div>
        <div className="f5 mb5 fl w-70-ns pl5-ns pl0 w-100 mt4 f4 lh-copy">
          {projects.map((p,i) => (
            <div key={i} className="mb4">
              <div
                style={{ background: `${p.themeColor}` }}
                className="w-100 center pb2 overflow-hidden br2 ph4-l ph0 pt4-ns pt2 relative">
                <div style={{ maxWidth: 640 }} className=" center">
                  <img className="nb5-l nb4 ml4-m ml2 ml0-l"  src={p.imageSource} />
                </div>
              </div>
              <div>
                <Link prefetch href={p.link}><a className={`${styles.link} f5 mt2 db`} >{p.title}</a></Link>
                <div className={`${styles.txtBody}`}>{p.description}</div>
              </div>
            </div>))}
        </div>
      </div>
    </div>
  )