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
      values: ["normal(default)", "reverse", "alternate", "alternate-reverse"],
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
        "Whether the animation is running or paused. The value can be runing(default) or paused.",
      value: "running",
      values: ["runing(default)", "paused"]
    }
  },

  transform: {},
  "flex-flow": {
    "flex-direction": {
      color: "purple",
      description:
        "The main-axis. How flex items are placed in the container, either horizontally or vertically stacked. Default value is row. ",
      value: "column",
      values: ["row", "row-reverse", "column", "column-reverse"]
    },
    "flex-wrap": {
      color: "blue",
      description:
        "Whether flex items are forced into a single line or can be wrapped onto multiple lines. Defaul nowrap.",
      value: "wrap",
      values: ["nowrap", "wrap", "wrap-reverse"]
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
      ]
    }
  },
  "align-items": {
    "align-items": {
      color: "purple",
      description:
        "How to distribute space between items along the cross-axis.",
      value: "center",
      values: ["flex-start", "flex-end", "center", "baseline", "stretch"]
    }
  },
  "align-self": {
    "align-self": {
      color: "purple",
      description: "Override the align-items value.",
      value: "baseline",
      values: ["flex-start", "flex-end", "center", "baseline", "stretch"]
    }
  },
  flex: {
    "flex-grow": {
      color: "purple",
      description:
        "How much the item will grow relative to others when there is extra space. Number type. Default 1.",
      value: "0.4",
      values: ["0", "1", "2"]
    },
    "flex-shrink": {
      color: "purple",
      description:
        "How much the item will shrink relative to others when there is extra space. Number type. Default 1.",
      value: "12",
      values: ["0", "1", "2"]
    },
    "flex-basis": {
      color: "blue",
      description:
        "The initial length of a flexible item. Auto(default), number, or percentage.",
      value: "500px",
      values: ["0", "1", "2", "auto"]
    }
  },
  grid: {},
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
