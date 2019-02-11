import React from "react";
import WorkFooter from "../components/work_footer";

import Page from "../layouts/page";
import Link from "next/link";
import { styles } from "../components/styles";
import Menu from "../components/menu";
const colorExplorationContent = [
  ["#5C426C", "#EF7FAF", "#986BBD"],
  ["#154261", "#FF7150", "#3C9BDE"],
  ["#CC5A2B", "#F09914", "#1E3A78"],
  ["#5C2E57", "#F77D79"]
];
export default () => (
  <Page>
    <div className={`${styles.limiter}`}>
      <Menu />

      <div className="cf pv5">
        <div className="f5 o-50 mb2">Case Study</div>
        <div className={`${styles.txtH2} `}>Runkit Rebrand</div>
        <div className="cf">
          <div className={`${styles.txtIntro} w-60-l w-100 fl`}>
            Runkit is a browser based coding environment simplifying the process
            of prototyping and shipping a product. It connects developers to
            each other’s code in real-time and eliminats non-coding distractions
            such as downloading packages or setting up the environment. It aims
            to establish itself as an essential utility to the JavaScript
            community. In 2018, I was tasked to create a new brand for Runkit
            from scratch.
          </div>

          <div className={`w-40-l pl5-l w-100 fl mt4`}>
            <div className="mb4">
              <div className={`f5 mb2`}>Unique and recognizable</div>
              <div className={`lh-copy f6 o-70`}>
                Differentiate the brand from other developers tools our users,
                Javascript engineers and package authors, typically use.
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
                The brand should be cohesive and consistent everywhere. It
                should work well for both the marketing pages and the user
                interface.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.txtH2} mb4`}>Color</div>
      <div className={`${styles.txtBody} w-70 mt`}>
        I experimented with several color palettes and applied them to a rough
        home page mockup to demonstrate what the brand could look like.
      </div>
    </div>
    <div className="pb5 overflow-hidden pl6-l pl4">
      <div
        className={`flex overflow-y-hidden overflow-x pl6-l pl4 items-top`}
        style={{ scrollSnapType: `x mandatory` }}
      >
        {colorExplorationContent.map((c, i) => (
          <div
            style={{ scrollSnapAlign: "center", minWidth: 340 }}
            className=" mr3 mb3 "
            key={i}
          >
            <img
              style={{ width: 340 }}
              src={`../static/img/rb/color-${i + 1}.png`}
            />
            <div className={`mt2 flex justify-between`}>
              <div className="fl">Primary Colors:</div>{" "}
              <div>
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

    <WorkFooter />
  </Page>
);
