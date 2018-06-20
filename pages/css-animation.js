import React from "react";
import Head from "next/head";
import Header from "../components/header";
import { styles } from "../components/styles";
// import Lowlight from 'react-lowlight'
// import css from 'highlight.js/lib/languages/css'
import { cssProperties } from "../components/css_properties";

// Lowlight.registerLanguage('css', css)

const highlightItemClass = color =>
  `bb relative dib mr2 highlighted-item bw2 b--${color} bg-faint-${color} ph1 pv1 ${color} fw5`;
const propertyList = {
  animation: ["animation"],
  flex: ["flex-flow", "justify-content", "align-items", "align-self", "flex"],
  grid: [],
  transform: []
};

class CssAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: "flex" };
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
    `}</style>
        </Head>
        <Header />
        <div className={`${styles.limiter}`}>
          <h1 className="f3">CSS cheatsheet</h1>
          <div className="mt4 flex">
            <aside className="w4 mr4 f7">
              <ul className="list">
                {Object.keys(propertyList).map((cp, i) => (
                  <li
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

            <div style={{ flex: "0 0 auto" }} className="w-80 f7">
              {propertyList[this.state.activeItem].map((ai, i) => (
                <div key={i} className="mb5">
                  <pre className="bg-light-2 property-reset ph4 pt4 pb5 br--top br3">
                    {/* <div className='br2 bg-light-2 mb3 f7 o-30 ttu tracked dib'>shorthand</div>*/}
                    <div>
                      {ai}:{" "}
                      {Object.keys(cssProperties[ai]).map((a, i) => {
                        const ob = cssProperties[ai][a];
                        return (
                          <span className={highlightItemClass(ob.color)}>
                            {ob.value}
                          </span>
                        );
                      })};
                    </div>
                  </pre>
                  <pre className="bg-light-1 ph4 pb4 pt4 br3 br--bottom">
                    {/* <div className="br2 bg-light-2 f7 o-30 ttu tracked mb4 dib">
                      values
                    </div>*/}
                    <div className="property-reset ">
                      {Object.keys(cssProperties[ai]).map((a, i) => {
                        const ob = cssProperties[ai][a];
                        return (
                          <div className="mb3">
                            <span
                              className={`in-list highlighted-item mr4 bg-faint-${
                                ob.color
                              } ${ob.color}`}
                            />
                            {a}
                            <div
                              style={{
                                wordBreak: "break-word",
                                wordWrap: "break-word",
                                whiteSpace: "normal"
                              }}
                              className="ml4 lh-copy o-50 mt2"
                            >
                              {ob.description} <br />{" "}
                              {!ob.showDetails && ob.values.join("/")}
                            </div>
                            {ob.showDetails && (
                              <div className="mt2">{ob.showDetails()}</div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </pre>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CssAnimation;
