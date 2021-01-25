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
    :root {
            --text-color: #1B223A;
            --background: #EFECE9;
            --highlight-color: #DFA965;
            --highlight-color-light: #DFA96555;

        }

// @media (prefers-color-scheme: light) {

// }
#new-home {
  font: 14px/22px 'Inter var', system-ui, sans-serif;
  font-weight: 400;
}
     #new-home {
      background: var(--background);
      color: var(--text-color);
      min-height: 100vh;
      padding: 100px 40px;
      border-top: 12px solid var(--highlight-color);
     }

     #grid-container {
      max-width: 1390px;
      display: grid;
      margin: auto;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 0px;
     border-right: 1px solid var(--highlight-color-light);

     }
.column {
  border-left: 1px solid var(--highlight-color-light);
  padding: 0 40px;
}
     #first.column {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
     }
      #first .internet-links {display: flex;}
     #third .internet-links {
          display: none;

     }

    .subheader {
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 12px;
      // border-top: 4px solid var(--background);
      // padding-top: 20px;


     }
     .header {
      font-size: 38px;
      line-height: 48px;
      font-weight: 600;
      display: inline;
     }
          .empahsis {
font-size: 20px;
line-height: 32px;
font-weight: 600;
     }


      @media screen and (max-width: 1140px) {
      #grid-container {
        grid-template-columns: repeat(2, 1fr);
      }
       #first.column {
        grid-row-start: 3;
        grid-row-end: -1;
       }
      }

       @media screen and (max-width: 640px) {
      #grid-container {
        grid-template-columns: repeat(1, 1fr);
      }
      .column {padding: 0 20px;}
        #new-home { padding: 40px 20px;}
       #first.column {
        margin-bottom: 100px;
       }
       .header {
      font-size: 34px;
      line-height: 44px;}
        #first .internet-links {
          display: none;
        }
        #third .internet-links {
          margin-top: 100px;
          display: flex;
        }
      }
     p {
      font-size: 16px;
line-height: 26px;
 font-weight: 500;
     }
  p:not(:first-child) {

margin-top: 24px;
     }
      .internet-links {
      flex-direction: column;
      align-items: flex-start;
     }
     .internet-links a {
      line-height: 24px;
      margin-top: 2px;
     }
     a {
      font-size: 16px;
       font-weight: 700;
       color: var(--higlight-color);
       text-decoration-skip-ink: auto;
       text-decoration: underline 2px var(--highlight-color);


     }
     a:hover {
        background: var(--highlight-color);
        color: var(--background);
       }
       .highlight {
        color: var(--highlight-color);
       }
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
