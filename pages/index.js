import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { styles } from '../components/styles'
import Header from '../components/header'

const InternetLinks = () => (
  <div className="internet-links">
    <a key={0} href="https://dribbble.com/mayagao" target="_blank">
      Dribbble
    </a>
    <a href="https://www.linkedin.com/in/mayagq/" target="_blank">
      LinkedIn
    </a>
    <a key={2} href="https://www.figma.com/@mayagao" target="_blank">
      Figma
    </a>
    <a key={3} href="https://twitter.com/mayaqgao" target="_blank">
      Twitter
    </a>
    <a key={4} href="mailto:mayaqgao@gmail.com" target="_blank">
      Email
    </a>
  </div>
)
export default () => (
  <div className="">
    <Head>
      <style>{`

    `}</style>
    </Head>
    <Header />
    <div id="new-home">
      <div id="grid-container">
        <div id="first" className="column">
          <div>
            <div className="subheader">Hi I’m Maya Gao,</div>
            <div className="header">
              I design tools to help people <span className="">think, create, and collaborate</span>
            </div>
          </div>
          {InternetLinks()}
        </div>
        <section id="second" className="column">
          <p className="empahsis">
            I'm passionate about making professional tools for technical audiences. The most exciting part about design
            for me is to approach a project by learning a brand new subject, understanding its intricacies, and finding
            a balance between data and intuition.
          </p>
          <p>
            In 2015, I joined{' '}
            <a target="_blank" href="https://www.mapbox.com/">
              Mapbox
            </a>{' '}
            in Washington D.C. to help shape the first version of{' '}
            <a target="_blank" href="https://www.wired.com/2015/09/mapbox-studio/">
              Mapbox Studio
            </a>
            , a custom map design tool for cartographers and developers. Cartography is a combination of art and
            science. Trying to dissect its complexities was a humbling experience.
          </p>
          <p>
            I moved to{' '}
            <a href="https://stripe.com/" target="_blank">
              Stripe
            </a>{' '}
            in 2017 where I led the design of Runkit, an interactive JavaScript prototyping playground in the browser. I
            contributed to a wide range of projects there, including designing better debugging and prototyping
            experiences for engineers.{' '}
          </p>
        </section>
        <div id="third" className="column">
          <p>
            After Stripe, I became the founding designer of{' '}
            <a href="https://observablehq.com/@mayagao" target="_blank">
              Observable
            </a>{' '}
            in 2019, a visualization tool for data scientists. It was an exciting time at Observable where I got to
            define new systems for a product still in its nascent stage of development.
          </p>
          <p>
            I'm currently leading design at <a href="https://retool.com/">Retool</a>. We enable businesses of all sizes
            build internal tools and automate operational tasks. If problems like layout systems, permission controls,
            or configurable forms sound interesting to you,{' '}
            <a href="https://retool.com/careers/#product-designer" target="_blank">
              we are hiring
            </a>
            .
          </p>
          {InternetLinks()}
        </div>
      </div>
    </div>
  </div>
)
