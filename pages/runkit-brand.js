import React from "react";
import WorkFooter from "../components/work_footer";
import Head from "next/head";
import Page from "../layouts/page";
import Link from "next/link";
import { styles } from "../components/styles";
import Menu from "../components/menu";
const colorExplorationContent = [
  ["#5C426C", "#EF7FAF", "#986BBD"],
  ["#154261", "#FF7150", "#3C9BDE"],
  ["#CC5A2B", "#F09914", "#1E3A78"],
  ["#5C2E57", "#F77D79"],
  [],
  []
];
const typeExplorationContent = ["Source Sans Pro", "Karla", "Work Sans", ""];
export default () => (
  <Page>
    <Head>
      <style>{`
          
            .type-scale-grid {
              display: grid;
              grid: '2 auto';
            }
          
            .explore-grid {
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              grid-column-gap: 20px;
              grid-auto-flow: column dense;

            }
            .bg-runkit {
              background: #f9f7f9;
            }
            .b--runkit {
              border-color: #eee8f0;
            }
              @media screen and (min-width: 1570px){
              .pl7-xl {padding-left: 16rem}
            }
            @media screen and (max-width: 640px){
               .type-scale-grid,
               .explore-grid { display: inherit; }
            }
          `}</style>
    </Head>
    <div className={`${styles.limiter}`}>
      <Menu />

      <div className="cf pv5">
        <div className="f5 o-50 mb2">Case Study</div>
        <div className={`${styles.txtH1} `}>Runkit Rebrand</div>
        <div className="cf">
          <div className={`${styles.txtIntro} w-60-l w-100 fl`}>
            Runkit is a browser based coding environment simplifying the process
            of prototyping and shipping a product. It connects developers to
            each other’s code in real-time and eliminates non-coding
            distractions such as downloading packages or setting up the
            environment. It aims to establish itself as an essential utility to
            the JavaScript community. The core users are Javascript engineers
            and package authors who are building tools and services. In 2018, I
            was tasked to create a new brand identity for Runkit. We started by
            defining three key goals for the rebrand:
          </div>

          <div className={`w-40-l pl5-l w-100 fl mt4`}>
            <div className="mb4">
              <div className={`f5 mb2`}>Unique and recognizable</div>
              <div className={`lh-copy f6 o-70`}>
                Differentiate the brand from other typical developers tools.
              </div>
            </div>
            <div className="mb4">
              <div className={`f5 mb2`}>Approachable and trustworthy</div>
              <div className={`lh-copy f6  o-70`}>
                Convey a deeper level of maturity and reliability, being
                approachable but not childish.{" "}
              </div>
            </div>
            <div className="">
              <div className={`f5 mb2`}>Flexible and Scalable</div>
              <div className={`lh-copy f6 o-70`}>
                Be cohesive and consistent everywhere and work well for both the
                marketing pages and the interface.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.txtH2} mb4 pt5 bt b--black-10`}>Color</div>
      <div className={`${styles.txtBody} w-70 mt`}>
        I experimented with several color palettes and applied them to a rough
        home page mockup to demonstrate what the brand could look like.
      </div>
    </div>

    <div className="pb5 overflow-hidden ">
      <div
        className={`flex overflow-y-hidden overflow-x pl7-xl pl6-l pl4 items-top`}
        style={{ scrollSnapType: `x mandatory` }}
      >
        {colorExplorationContent.map((c, i) => (
          <div
            style={{ scrollSnapAlign: "center", minWidth: 340 }}
            className=" mr3 mb3"
            key={i}
          >
            <img
              style={{ width: 340 }}
              src={`../static/img/rb/color-${i + 1}.png`}
            />
            <div className={`mt2`}>
              <div className="fl o-70">Primary Colors:</div>{" "}
              <div className="fr">
                {c.map((cc, i) => (
                  <span
                    style={{ background: `${cc}` }}
                    className="w1 ml2 h1 dib br4"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className={`${styles.limiter}`}>
      <div className={`${styles.txtSbody} w-70 mb4`}>
        We landed on two primary colors that feels friendly and soft, which is
        quite a big departure from the its old identity and other generic
        developer brands.
      </div>

      <div className="flex-l mw7 justify-between mb5 items-start">
        <img
          style={{ width: 330 }}
          className="mr5-l mr4 mb4"
          src={`../static/img/rb/primaryColor-l.png`}
        />
        <img
          style={{ width: 440 }}
          src={`../static/img/rb/primaryColor-r.png`}
        />
      </div>

      <div className={`${styles.txtSbody} w-70 mb4`}>
        I further expanded the color pallete by adding secondary colors that can
        work in illustrations and other UI elements.
      </div>

      <div className="flex-l mw7 justify-between mb5 items-start">
        <img
          style={{ width: 330 }}
          className="mr5-l mr4 mb4"
          src={`../static/img/rb/secondaryColor-l.png`}
        />
        <img
          style={{ width: 440 }}
          src={`../static/img/rb/secondaryColor-r.png`}
        />
      </div>

      <div className={`${styles.txtSbody} w-70 mb4`}>
        Stripe&apos;s talented brand designer{" "}
        <a href="https://dribbble.com/tthompson" className={`${styles.link}`}>
          Tyler Thompson
        </a>{" "}
        designed a new logo for Runkit inspired by old mechanical keyboard. To
        ensure the the logo is used correctly everywhere, I created a brand
        guideline. Some of the usage rules:
      </div>

      <div className="flex-l justify-start items-start">
        <img
          style={{ maxWidth: 495 }}
          className="mb4"
          src={`../static/img/rb/logo-l.png`}
        />
        <img style={{ maxWidth: 499 }} src={`../static/img/rb/logo-r.png`} />
      </div>

      <div className={`${styles.txtH2} mb4 mt5 pt5 bt b--black-10`}>
        Typography
      </div>
      <div className={`${styles.txtBody} w-70 mt`}>
        I explored several different options for the body text typeface. We want
        to find one that has some personality but also is highly legible at
        smaller sizes.
      </div>
    </div>

    <div className="pb5 overflow-hidden ">
      <div
        className={`flex overflow-y-hidden overflow-x  pl7-xl pl6-l pl4 items-top`}
        style={{ scrollSnapType: `x mandatory` }}
      >
        {typeExplorationContent.map((c, i) => (
          <div
            style={{ scrollSnapAlign: "center", minWidth: 501 }}
            className=" mr3 mb3"
            key={i}
          >
            <img
              style={{ width: 501 }}
              src={`../static/img/rb/type-explore-${i + 1}.png`}
            />
            <div className={`mb2 o-70 mt3`}>{c}</div>
          </div>
        ))}
      </div>
    </div>

    <div className={`${styles.limiter}`}>
      <div className={`${styles.txtSbody} w-70 mb4`}>
        The heading typeface, Radnika, is also used in the logo wordmark, which
        creates better visual consistency. The body typeface Source Sans Pro is
        friendly and also works well as a UI font in the editor.
      </div>

      <div className="flex-l mw7 justify-between mb5 items-start">
        <img
          style={{ width: 502 }}
          className="mr5-l mr4 mb4"
          src={`../static/img/rb/type-l.png`}
        />
        <img style={{ width: 502 }} src={`../static/img/rb/type-r.png`} />
      </div>

      <div className={`${styles.txtSbody} w-70 mb4`}>
        I work on creating a type scale system to establish clear hierarchy and
        added additional usage rules such as leading and praragraph spacing.
      </div>

      <div className="flex-l mw7 justify-between items-start">
        <img
          style={{ width: 478 }}
          className="mr5-l mr4 mb4"
          src={`../static/img/rb/scale-1.png`}
        />
        <img
          style={{ width: 567 }}
          className="mb4"
          src={`../static/img/rb/scale-2.png`}
        />
      </div>

      <div className="flex-l mw7 justify-between mb5 items-start">
        <img
          style={{ width: 478 }}
          className="mr5-l mr4 mb4"
          src={`../static/img/rb/scale-3.png`}
        />
        <img style={{ width: 567 }} src={`../static/img/rb/scale-4.png`} />
      </div>
    </div>

    <div className="pt6 pb5 bg-runkit overflow-hidden ">
      <div style={{ maxWidth: 1388 }} className="ph4 center mb4">
        <div className={`${styles.txtH3} mb2`}>Experiment in context</div>
        <div className={`${styles.txtSbody} w-80`}>
          Halfway through the process, I realized the need to create more pages
          to test out these new visual elements like colors and icons. So I
          mocked up some marketing pages and pages inside the user interface.
          The goal here is to ensure the design system works in different
          scenarios.
        </div>
      </div>

      <div style={{ maxWidth: 1388 }} className="explore-grid center ph4">
        <div>
          <img
            style={{ width: 322 }}
            className="mr5-l b--runkit ba br3 db mr4 mb3"
            src={`../static/img/rb/grid-1.png`}
          />
          <img
            style={{ width: 322 }}
            className="mr5-l b--runkit ba br3 db mr4 mb3"
            src={`../static/img/rb/grid-2.png`}
          />
        </div>
        <div>
          <img
            style={{ width: 322 }}
            className="mr5-l b--runkit ba br3  db mr4 mb3"
            src={`../static/img/rb/grid-3.png`}
          />
          <img
            style={{ width: 322 }}
            className="mr5-l b--runkit ba br3  db mr4 mb3"
            src={`../static/img/rb/grid-4.png`}
          />
        </div>
        <div>
          <img
            style={{ width: 322 }}
            className="mr5-l b--runkit ba br3 db mr4 mb3"
            src={`../static/img/rb/grid-5.png`}
          />
          <img
            style={{ width: 322 }}
            className="mr5-l b--runkit ba br3  db mr4 mb3"
            src={`../static/img/rb/grid-6.png`}
          />
        </div>
        <div>
          <img
            style={{ width: 322 }}
            className="mr5-l b--runkit ba br3 db mb4"
            src={`../static/img/rb/grid-7.png`}
          />
        </div>
      </div>
    </div>

    <div className={`${styles.limiter}`}>
      <div className={`${styles.txtH2} mb4 mt5 `}>Grid system</div>
      <div className={`${styles.txtBody} w-70 mb5`}>
        Most measurements, such as spacings and sizes, align to an 4px grid.
        This applies to the typography, icons, and UI elements and ensures
        consistency across the board
      </div>

      <div className="cf">
        {[0, 1, 2, 3].map((c, i) => (
          <img
            style={{ width: 482 }}
            className="mb3 fl mr3"
            src={`../static/img/rb/g-${i + 1}.png`}
          />
        ))}
      </div>

      <div className={`${styles.txtH2} mb4 mt5 bt pt5 b--black-10`}>
        Icongraphy
      </div>
      <div className={`${styles.txtBody} w-70 mb4`}>
        Icons should be simple, recognizable, and legible at smaller sizes. This
        icon set below is for common interactions in the code editor. They were
        drawn on 20px * 20px squares and works well with the 4px grid system.
      </div>

      <div className="cf">
        <img
          style={{ width: 500 }}
          className="mr3 mb4 fl"
          src={`../static/img/rb/icon-l.png`}
        />
        <img
          style={{ width: 500 }}
          className="mb4 fl"
          src={`../static/img/rb/icon-r.png`}
        />
      </div>

      <div className={`${styles.txtH2} mb4 mt5 bt pt5 b--black-10`}>
        Basic interactions
      </div>
      <div className={`${styles.txtBody} w-70 mb4`}>
        After a new design system with new colors, typography, and grid system
        was estalibshed, we realized the need to define rules for basic
        interactions like pressing a button or clicking on a dropdown menu.
      </div>

      <div>
        {[0, 1, 2, 3, 4, 5].map((c, i) => (
          <img
            style={{ width: 317 }}
            className="mb3 fl mr3"
            src={`../static/img/rb/ui-${i + 1}.png`}
          />
        ))}
      </div>
    </div>
    <WorkFooter />
  </Page>
);
