import React from "react";
import Head from "next/head";
import Header from "../components/header";
import { styles } from "../components/styles";
// import Lowlight from 'react-lowlight'
// import css from 'highlight.js/lib/languages/css'
import { cssProperties } from "../components/css_properties";

// Lowlight.registerLanguage('css', css)

const highlightItemClass = color =>
  `bb relative dib ml2 highlighted-item bw2 b--${color} bg-faint-${color} ph1 pv1 ${color} fw5`;
const propertyList = {
  animation: ["animation"],
  flex: ["flex-flow", "justify-content", "align-items"],
  "flex children": ["flex", "align-self"],
  grid: ["grid", "grid-auto-flow", "grid-gap", "place-items", "place-content"],
  "grid children": ["grid-area", "place-self"],
  transform: ["transform"]
};

class CssReference extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: "transform" };
  }

  setActiveItem(cp) {
    this.setState({ activeItem: cp });
  }

  render() {
    return (
      <div>
        <Head>
          <style>{`


@keyframes move1 {
  from {
    background: #dddafa;
    transform: translate(0, 0);
  }
  to {
    background: #8e83e1;
    transform: translate(300px, 0);
  }
}
.nt-custom {
  margin-top: -4.5rem;
}
#cheatsheet-container.dg { grid-template-columns: minmax(120px, auto) minmax(680px, 760px);}

    `}</style>
        </Head>
        <Header />
        <div className={`${styles.limiter} cheatsheet-container`}>
          <h1 className="f3">CSS Quick Reference</h1>

          <div id="cheatsheet-container" className="mt4 dg">
            <aside className="sidebar mr4 f7">
              <ul className="list">
                {Object.keys(propertyList).map((cp, i) => (
                  <li
                    key={i}
                    onClick={() => this.setActiveItem(cp)}
                    className={`
              ${
                this.state.activeItem === cp ? "o-100" : "o-50"
              } glow pointer pv1 mb1`}
                  >
                    {cp}
                  </li>
                ))}
              </ul>
            </aside>

            <div className="content code f7">
              {propertyList[this.state.activeItem].map((ai, i) => (
                <div key={i} className="mb5">
                  <div className="bg-light-2 property-reset ph4 pt4 pb5 br--top br3">
                    {/* <div className='br2 bg-light-2 mb3 f7 o-30 ttu tracked dib'>shorthand</div>*/}

                    <div>
                      {ai}:
                      {Object.keys(cssProperties[ai]).map((a, i) => {
                        const ob = cssProperties[ai][a];
                        return (
                          <span
                            key={i}
                            className={highlightItemClass(ob.color)}
                          >
                            {ob.value}
                          </span>
                        );
                      })};
                    </div>
                  </div>

                  <div className="bg-light-1 ph4 pb4 pt4 br3 br--bottom">
                    {/* <div className="br2 bg-light-2 f7 o-30 ttu tracked mb4 dib">
                      values
                    </div>*/}
                    <div className="property-reset ">
                      {Object.keys(cssProperties[ai]).map((a, i) => {
                        const ob = cssProperties[ai][a];
                        return (
                          <div key={i} className={`${i > 0 && "mt4"}`}>
                            <span
                              className={`in-list highlighted-item mr4 bg-faint-${
                                ob.color
                              } ${ob.color}`}
                            />
                            {a}
                            <div className="ml4 lh-copy gray mt2">
                              {ob.description}{" "}
                              {!ob.showDetails && ob.values.join("/")}
                            </div>
                            {ob.showDetails && (
                              <div className="mt2">{ob.showDetails()}</div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt3 f7 tc gray lh-copy">
            Explanations for CSS properties that's a bit complicated and
            confusing. <br /> <span className="f5"> 🐙</span>
          </div>
        </div>
      </div>
    );
  }
}

export default CssReference;
