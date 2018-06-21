export const cssProperties = {
  animation: {
    "animation-name": {
      color: "red",
      value: "move",
      description: "The name of the keyframe.",
      values: []
    },
    "animation-duration": {
      color: "green",
      value: "2s",
      description: "In seconds, e.g.: 3s, 5000ms.",
      values: []
    },
    "animation-delay": {
      color: "green",
      value: "1s",
      description: "In seconds, e.g. 3s, 5000ms.",
      values: []
    },
    "animation-timing-function": {
      color: "purple",
      value: "ease-in-out",
      description: "The speed curve of an animation.",
      values: [
        "ease",
        "ease-in",
        "ease-out",
        "ease-in-out",
        "linear",
        "step-start",
        "step-end",
        "cubic-bezier(0.1, 0.7, 1.0, 0.1)",
        "steps(6, start)",
        "steps(6, end)"
      ],
      showDetails: function() {
        const v = this.values;
        return (
          <div className="relative ml4 pv3 mb4">
            {lines()}
            {v.map((tf, i) => (
              <div
                key={i}
                className={`w-100 pv2 flex justify-between ${i > 0 &&
                  "bt b--light-gray b--dashed"}`}
              >
                <pre className="o-50">{tf}</pre>
                <div className="mr3" style={{ width: 300 }}>
                  <div
                    style={{
                      animation: `move1 3s ` + `${tf}` + ` infinite alternate`,
                      background: "#DDDAFA"
                    }}
                    className="relative h1 w1 br-100 ba3"
                  />
                </div>
              </div>
            ))}
          </div>
        );
      }
    },
    "animation-iteration-count": {
      color: "purple",
      description:
        "The number of times an animation. A number, e.g. 10, or inifinite.",
      value: "10",
      values: []
    },
    "animation-direction": {
      color: "blue",
      description:
        "Whether an animation should be played forwards, backwards or in alternate cycles.",
      value: "alternate",
      values: ["normal", "reverse", "alternate", "alternate-reverse"],
      showDetails: function() {
        const v = this.values;
        return (
          <div className="relative ml4 pv3 mb4">
            {lines()}
            {v.map((tf, i) => (
              <div
                key={i}
                className={`w-100 pv2 flex justify-between ${i > 0 &&
                  "bt b--light-gray b--dashed"}`}
              >
                <pre className="o-50">{tf}</pre>
                <div className="mr3" style={{ width: 300 }}>
                  <div
                    style={{
                      animation: `move1 3s 3s ease-in-out infinite ${tf}`,
                      background: "#DDDAFA"
                    }}
                    className="relative h1 w1 br-100 ba3"
                  />
                </div>
              </div>
            ))}
          </div>
        );
      }
    },
    "animation-fill-mode": {
      color: "blue",
      description:
        "The style of the element when the animation is not playing.",
      value: "forwards",
      values: ["non(default)", "forwards", "backwards", "both"],
      showDetails: function() {
        const v = this.values;
        return (
          <div className="relative ml4 pv3 mb4">
            {lines()}
            {v.map((tf, i) => (
              <div
                key={i}
                className={`w-100 pv2 flex justify-between ${i > 0 &&
                  "bt b--light-gray b--dashed"}`}
              >
                <pre className="o-50">{tf}</pre>
                <div className="mr3" style={{ width: 300 }}>
                  <div
                    style={{
                      animation: `move1 3s 3s ease-in-out ${tf}`,
                      background: "#DDDAFA"
                    }}
                    className="relative h1 w1 br-100 ba3"
                  />
                </div>
              </div>
            ))}
          </div>
        );
      }
    },

    "animation-play-state": {
      color: "blue",
      description:
        "Whether the animation is running or paused. Values: runing(default) or paused.",
      value: "running",
      values: ["runing(default)", "paused"]
    }
  },

  transform: {},
  "flex-flow": {
    "flex-direction": {
      color: "purple",
      description:
        "The main-axis. How flex items are placed in the container, either horizontally or vertically stacked. Default value: row.",
      value: "column",
      values: ["row", "row-reverse", "column", "column-reverse"],
      showDetails: function() {
        const v = this.values;
        return (
          <div className="ml4 flex flex-wrap">
            {v.map((tf, i) => (
              <div key={i} className={`w-50 relative pv2 pr4 ${i > 0 && ""}`}>
                <pre className="o-80">{tf}</pre>
                <div
                  className="flex relative h4 mt2 bt b--dashed bb b--black-10 pv2"
                  style={{ flexDirection: `${tf}` }}
                >
                  {[1, 2, 3].map((n, i) => (
                    <div
                      key={i}
                      className="relative pv2 mr2 mb2 purple ph1 tc bg-faint-purple br2 w2 ba3"
                    >
                      {n}
                    </div>
                  ))}
                </div>

                <div
                  style={{ marginTop: i > 1 ? "-4.5rem" : "-4.5rem" }}
                  className={`${
                    i > 1 ? "rotate-90 w-40" : "nt5 w-80"
                  } absolute purple self-center tc`}
                >
                  <div
                    className={`${i > 1 &&
                      "h-100"} bt b--purple absolute w-100 mt1`}
                  />
                  <span className="bg-purple white br2 pv1 ph2 relative nt3">
                    main axis
                  </span>
                </div>
              </div>
            ))}
          </div>
        );
      }
    },
    "flex-wrap": {
      color: "blue",
      description:
        "Whether flex items are forced into a single line or can be wrapped onto multiple lines. Default value: nowrap.",
      value: "wrap",
      values: ["nowrap", "wrap", "wrap-reverse"],
      showDetails: function() {
        const v = this.values;
        return (
          <div className="ml4 flex flex-wrap">
            {v.map((tf, i) => (
              <div key={i} className={`w-50 relative pv2 pr4 ${i > 0 && ""}`}>
                <pre className="o-80">{tf}</pre>
                <div
                  className="flex relative mt2 bt b--dashed bb b--black-10 pv2"
                  style={{ flexWrap: `${tf}`, width: i > 0 ? "70%" : "100%" }}
                >
                  {[1, 2, 3, 4, 5].map((n, i) => (
                    <div
                      key={i}
                      className="relative pv2 mr2 mb2 blue ph1 tc bg-faint-blue br2 w2 ba3"
                    >
                      {n}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      }
    }
  },
  "justify-content": {
    "justify-content": {
      color: "purple",
      description:
        "How to distribute space between flex items along the main-axis.",
      value: "space-around",
      values: [
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly"
      ],
      showDetails: function() {
        const v = this.values;
        return (
          <div className="ml4 flex flex-wrap">
            {v.map((tf, i) => (
              <div key={i} className={`w-50 relative pv2 pr4 ${i > 0 && ""}`}>
                <pre className="o-80">{tf}</pre>
                <div
                  className="flex relative mt2 bt b--dashed bb b--black-10 pv2"
                  style={{ justifyContent: `${tf}` }}
                >
                  {[1, 2, 3].map((n, i) => (
                    <div
                      key={i}
                      className="relative pv2 mr2 mb2 purple ph1 tc bg-faint-purple br2 w2 ba3"
                    >
                      {n}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      }
    }
  },
  "align-items": {
    "align-items": {
      color: "purple",
      description:
        "How to distribute space between items along the cross-axis.",
      value: "center",
      values: ["flex-start", "flex-end", "center", "baseline", "stretch"],
      showDetails: function() {
        const v = this.values;
        return (
          <div className="ml4 flex flex-wrap">
            {v.map((tf, i) => (
              <div key={i} className={`w-50 relative pv2 pr4 ${i > 0 && ""}`}>
                <pre className="o-80">{tf}</pre>
                <div
                  className="flex relative mt2 bt b--dashed bb b--black-10 pv2"
                  style={{ height: 80, alignItems: `${tf}` }}
                >
                  {[1, 2, 3].map((n, i) => (
                    <div
                      key={i}
                      className="relative pv2 mr2 mb2 purple ph1 tc bg-faint-purple br2 w2 ba3"
                    >
                      {n}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      }
    }
  },
  "align-self": {
    "align-self": {
      color: "purple",
      description: "Override the align-items value.",
      value: "baseline",
      values: ["flex-start", "flex-end", "center", "baseline", "stretch"],
      showDetails: function() {
        const v = this.values;
        return (
          <div className="ml4 flex flex-wrap">
            {v.map((tf, i) => (
              <div key={i} className={`w-50 relative pv2 pr4 ${i > 0 && ""}`}>
                <pre className="o-80">{tf}</pre>
                <div
                  className="flex relative mt2 bt b--dashed bb b--black-10 pv2"
                  style={{ height: 80, alignItems: `center` }}
                >
                  {[1, 2, 3].map((n, i) => (
                    <div
                      key={i}
                      style={{ alignSelf: `${i === 2 && tf}` }}
                      className="relative pv2 mr2 mb2 purple ph1 tc bg-faint-purple br2 w2 ba3"
                    >
                      {n}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <pre className="w-100 o-50 mt3">
              Property rule was applied to Item 3.
            </pre>
          </div>
        );
      }
    }
  },
  flex: {
    "flex-grow": {
      color: "purple",
      description:
        "How much the item will grow relative to others when there is extra space. Number type. Default 1.",
      value: "0.4",
      values: ["0", "0.3", "0.7"],
      showDetails: function() {
        const v = this.values;
        return (
          <div className="ml4 mr4 mb4">
            <pre className="w-100 o-50 pv3">When there is no extra space:</pre>
            <div className=" w-60 flex">
              {v.map((tf, i) => (
                <div
                  key={i}
                  style={{ flex: `${tf} 0 auto` }}
                  className="ph2 relative pv2 mr2 mb2 purple tc bg-faint-purple br2 ba3"
                >
                  flex-grow: {tf}
                </div>
              ))}
            </div>
            <pre className="w-100 o-50 pv3">When there is extra space:</pre>
            <div className="w-100 flex">
              {v.map((tf, i) => (
                <div
                  key={i}
                  style={{ flex: `${tf} 0 auto` }}
                  className="ph2 relative pv2 mr2 mb2 purple tc bg-faint-purple br2 ba3"
                >
                  flex-grow: {tf}
                </div>
              ))}
            </div>
          </div>
        );
      }
    },
    "flex-shrink": {
      color: "purple",
      description:
        "How much the item will shrink relative to others when there isn't enough space. Number type. Default 1.",
      value: "12",
      values: ["1", "4", "1"],
      showDetails: function() {
        const v = this.values;
        return (
          <div className="ml4 mr4 mb4">
            <pre className="w-100 o-50 pv3">
              Ever item has a basis width of 200px:
            </pre>
            <div className="flex">
              {v.map((tf, i) => (
                <div
                  key={i}
                  style={{ flex: `1 ${tf} 200px` }}
                  className=" pv2 mr2 ph2 mb2 purple lh-copy tl tc bg-faint-purple br2 ba3"
                >
                  flex-shrink:{tf}
                  <br />
                </div>
              ))}
            </div>
          </div>
        );
      }
    },

    "flex-basis": {
      color: "blue",
      description:
        "The initial length of a flexible item. Auto(default), number, or percentage.",
      value: "500px",
      values: ["20", "80"],
      showDetails: function() {
        const v = this.values;
        return (
          <div className="ml4 mr4 mb4">
            <pre className="w-100 o-50 pv3">flex-grow: 0</pre>
            <div className="flex">
              {v.map((tf, i) => (
                <div
                  key={i}
                  style={{ flex: `0 1 ${Number(tf) * 2 + 100}px` }}
                  className=" pv2 mr2 ph2 mb2 blue lh-copy tl tc bg-faint-blue br2 ba3"
                >
                  flex-basis:{`${Number(tf) * 2 + 100}`}px<br />
                </div>
              ))}
            </div>
          </div>
        );
      }
    }
  },
  grid1: {
    "grid-template-rows": {
      color: "red",
      value: "repeat(auto-fit, 1fr) /",
      description: "Line names and track sizing functions of the grid's rows.",
      values: [
        "auto",
        "30% 70%",
        "repeat(auto-fit, minmax(22px, 1fr))",
        "repeat(auto-fill, minmax(22px, 1fr))",
        "1fr 2fr"
      ],
      showDetails: function() {
        const v = this.values;
        return (
          <div className="ml4 mr4 mb4">
            <div className="flex">
              {v.map((tf, i) => (
                <div className="">
                  <div className="o-50 tc">{i + 1}</div>
                  <div
                    key={i}
                    style={{ gridTemplateRows: `${tf}`, height: 100 }}
                    className="dg tc "
                  >
                    {[1, 2].map((n, i) => (
                      <div
                        key={i}
                        className="relative bw1 pa1 ba b--light-2 purple ph1 tc bg-faint-purple br2 w2 ba3"
                      >
                        <br />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <div className="ml2 o-60">
                {v.map((tf, i) => (
                  <div className="mb1">
                    {i + 1}.{tf}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      }
    },
    "grid-template-columns": {
      color: "blue",
      value: "minmax(max-content, 2fr)",
      description: "The size of an implicitly-created grid column track..",
      values: [
        "max-content",
        "min-content",
        "minmax(100px, auto) fit-content(300px)"
      ]
    }
  },
  grid2: {
    "grid-template-rows": {
      color: "red",
      value: "repeat(auto-fit, 1fr) /",
      description: "Line names and track sizing functions of the grid's rows.",
      values: [
        "20% auto",
        "repeat(auto-fit, 1fr)",
        "repeat(auto-fill, 1fr)",
        "minmax(100px, 1fr)",
        "fit-content(40%)"
      ]
    },
    "grid-auto-flow": {
      color: "blue",
      value: "dense",
      description: "How auto-placed items get flowed into the grid.",
      values: ["row", "column", "dense", "row dense", "column dense"]
    },
    "grid-auto-columns": {
      color: "blue",
      value: "minmax(max-content, 2fr)",
      description: "The size of an implicitly-created grid column track..",
      values: [
        "max-content",
        "min-content",
        "minmax(100px, auto) fit-content(300px)"
      ]
    }
  },
  grid3: {
    "grid-auto-flow": {
      color: "blue",
      value: "2s",
      description: "The size of an implicitly-created grid row track.",
      values: ["3fr 1fr", "minmax(100px, auto) fit-content(300px)"]
    },
    "grid-auto-rows": {
      color: "green",
      value: "100px /",
      description: "In seconds, e.g.: 3s, 5000ms.",
      values: []
    },
    "grid-template-columns": {
      color: "purple",
      value: "minmax(100px, 1fr)",
      description: "Line names and track sizing functions of the grid columns.",
      values: [
        "20% auto",
        "repeat(auto-fit, 1fr)",
        "repeat(auto-fill, 1fr)",
        "minmax(100px, 1fr)",
        "fit-content(40%)"
      ]
    }
  },

  "grid-gap": {
    "grid-row-gap": {
      color: "red",
      value: "move",
      description: "The name of the keyframe.",
      values: []
    },
    "grid-column-gap": {
      color: "green",
      value: "2s",
      description: "In seconds, e.g.: 3s, 5000ms.",
      values: []
    }
  },
  "place-items": {
    "align-items": {
      color: "red",
      value: "move",
      description: "The name of the keyframe.",
      values: []
    },
    "justify-items": {
      color: "red",
      value: "move",
      description: "The name of the keyframe.",
      values: []
    }
  },
  "place-content": {
    "align-content": {
      color: "red",
      value: "move",
      description: "The name of the keyframe.",
      values: []
    },
    "justify-content": {
      color: "red",
      value: "move",
      description: "The name of the keyframe.",
      values: []
    }
  },
  "grid-area": {
    "grid-column-start": {
      color: "red",
      value: "move",
      description: "The name of the keyframe.",
      values: []
    },
    "grid-column-end": {
      color: "red",
      value: "move",
      description: "The name of the keyframe.",
      values: []
    },
    "grid-row-start": {
      color: "red",
      value: "move",
      description: "The name of the keyframe.",
      values: []
    },
    "grid-row-end": {
      color: "red",
      value: "move",
      description: "The name of the keyframe.",
      values: []
    }
  },

  "justify-self": {
    "justify-self": {
      color: "red",
      value: "move",
      description: "The name of the keyframe.",
      values: ["start", "end", "center", "stretch"]
    }
  },
  column: {},
  flexbox: {}
};
const lines = () => {
  return (
    <div>
      <div
        style={{ marginRight: 7 }}
        className="absolute right-0 h-100 bl b--dashed b--light-gray"
      />
      <div
        style={{ marginRight: 307 }}
        className="absolute right-0 h-100 bl b--light-gray b--dashed "
      />
    </div>
  );
};
