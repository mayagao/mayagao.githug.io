;(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    '+eFp': function (e, t, n) {
      'use strict'
      t.__esModule = !0
      var i =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
          },
        a = c(n('q1tI')),
        o = c(n('17x9')),
        r = c(n('UnXY')),
        s = c(n('zB99')),
        l = n('xfxO')
      function c(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function u(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !t || ('object' !== typeof t && 'function' !== typeof t) ? e : t
      }
      l.nameShape.isRequired,
        o.default.bool,
        o.default.bool,
        o.default.bool,
        (0, l.transitionTimeout)('Appear'),
        (0, l.transitionTimeout)('Enter'),
        (0, l.transitionTimeout)('Leave')
      var d = (function (e) {
        function t() {
          var n, i
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t)
          for (var o = arguments.length, r = Array(o), l = 0; l < o; l++) r[l] = arguments[l]
          return (
            (n = i = u(this, e.call.apply(e, [this].concat(r)))),
            (i._wrapChild = function (e) {
              return a.default.createElement(
                s.default,
                {
                  name: i.props.transitionName,
                  appear: i.props.transitionAppear,
                  enter: i.props.transitionEnter,
                  leave: i.props.transitionLeave,
                  appearTimeout: i.props.transitionAppearTimeout,
                  enterTimeout: i.props.transitionEnterTimeout,
                  leaveTimeout: i.props.transitionLeaveTimeout,
                },
                e,
              )
            }),
            u(i, n)
          )
        }
        return (
          (function (e, t) {
            if ('function' !== typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
            })),
              t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
          })(t, e),
          (t.prototype.render = function () {
            return a.default.createElement(r.default, i({}, this.props, { childFactory: this._wrapChild }))
          }),
          t
        )
      })(a.default.Component)
      ;(d.displayName = 'CSSTransitionGroup'),
        (d.propTypes = {}),
        (d.defaultProps = { transitionAppear: !1, transitionEnter: !0, transitionLeave: !0 }),
        (t.default = d),
        (e.exports = t.default)
    },
    '0iUn': function (e, t, n) {
      'use strict'
      function i(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
      }
      n.d(t, 'a', function () {
        return i
      })
    },
    '16Al': function (e, t, n) {
      'use strict'
      var i = n('ohE5'),
        a = n('2NuI'),
        o = n('WbBG')
      e.exports = function () {
        function e(e, t, n, i, r, s) {
          s !== o &&
            a(
              !1,
              'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
            )
        }
        function t() {
          return e
        }
        e.isRequired = e
        var n = {
          array: e,
          bool: e,
          func: e,
          number: e,
          object: e,
          string: e,
          symbol: e,
          any: e,
          arrayOf: t,
          element: e,
          instanceOf: t,
          node: e,
          objectOf: t,
          oneOf: t,
          oneOfType: t,
          shape: t,
        }
        return (n.checkPropTypes = i), (n.PropTypes = n), n
      }
    },
    '17x9': function (e, t, n) {
      e.exports = n('16Al')()
    },
    '1w3K': function (e, t, n) {
      'use strict'
      var i = o(n('+eFp')),
        a = o(n('UnXY'))
      function o(e) {
        return e && e.__esModule ? e : { default: e }
      }
      e.exports = { TransitionGroup: a.default, CSSTransitionGroup: i.default }
    },
    '2NuI': function (e, t, n) {
      'use strict'
      var i = function (e) {}
      e.exports = function (e, t, n, a, o, r, s, l) {
        if ((i(t), !e)) {
          var c
          if (void 0 === t)
            c = new Error(
              'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.',
            )
          else {
            var u = [n, a, o, r, s, l],
              d = 0
            ;(c = new Error(
              t.replace(/%s/g, function () {
                return u[d++]
              }),
            )).name = 'Invariant Violation'
          }
          throw ((c.framesToPop = 1), c)
        }
      }
    },
    '5rHH': function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/data-driven-styling',
        function () {
          return n('9BAs')
        },
      ])
    },
    '6DQo': function (e, t, n) {
      'use strict'
      e.exports = function () {}
    },
    '8PcY': function (e, t, n) {
      'use strict'
      ;(t.__esModule = !0),
        (t.getChildMapping = function (e) {
          if (!e) return e
          var t = {}
          return (
            i.Children.map(e, function (e) {
              return e
            }).forEach(function (e) {
              t[e.key] = e
            }),
            t
          )
        }),
        (t.mergeChildMappings = function (e, t) {
          function n(n) {
            return t.hasOwnProperty(n) ? t[n] : e[n]
          }
          ;(e = e || {}), (t = t || {})
          var i = {},
            a = []
          for (var o in e) t.hasOwnProperty(o) ? a.length && ((i[o] = a), (a = [])) : a.push(o)
          var r = void 0,
            s = {}
          for (var l in t) {
            if (i.hasOwnProperty(l))
              for (r = 0; r < i[l].length; r++) {
                var c = i[l][r]
                s[i[l][r]] = n(c)
              }
            s[l] = n(l)
          }
          for (r = 0; r < a.length; r++) s[a[r]] = n(a[r])
          return s
        })
      var i = n('q1tI')
    },
    '9BAs': function (e, t, n) {
      'use strict'
      n.r(t)
      var i = n('q1tI'),
        a = n.n(i),
        o = (n('ZHh6'), n('RSoV')),
        r = n('Pe6d'),
        s = n('0iUn'),
        l = n('sLSF'),
        c = n('MI3g'),
        u = n('a7VT'),
        d = n('Tit0'),
        m = n('8Kt/'),
        p = n.n(m),
        f = n('0M+7'),
        h = (n('YFqc'), a.a.createElement),
        v = (function (e) {
          function t() {
            return Object(s.a)(this, t), Object(c.a)(this, Object(u.a)(t).apply(this, arguments))
          }
          return (
            Object(d.a)(t, e),
            Object(l.a)(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.content
                  return h(
                    'div',
                    null,
                    e.map(function (e, t) {
                      return h(
                        'div',
                        {
                          key: t,
                          className:
                            'flex lh-copy bt b--black-10 pt4 items-end-m content-stretch items-start items-start-l f6 flex-row-ns flex-column mt4',
                        },
                        h(
                          'div',
                          { className: 'flex flex-row-l w-100 flex-column ' },
                          h('div', { className: 'dib mr2 mb2 w4 f5' }, e.title),
                          h(
                            'div',
                            { className: 'flex flex-row-ns w-100 flex-column' },
                            h('div', { className: 'o-70 w-80 mb3 mw5-l mw-auto mr4' }, e.description),
                            h(
                              'div',
                              { className: 'f7 br3 o-70 w-100 ph3 mr4 mb0-ns mb4 pv1 bg-near-white round' },
                              h('pre', null, e.code),
                            ),
                          ),
                        ),
                        h('div', { className: 'flex w5-l w4 tc flex-column' }, e.image),
                      )
                    }),
                  )
                },
              },
            ]),
            t
          )
        })(a.a.Component),
        b = n('DHa6'),
        g = a.a.createElement,
        y = g(
          'div',
          { className: 'flex items-center justify-center' },
          g('div', { className: 'bt bw1 dib w0 b--black-10' }),
          g('div', { className: 'h4 w0 br2 tc br--left bt bl bb bw1 b--black-10' }),
        ),
        w = function () {
          return g(
            'div',
            { style: { lineHeight: 1.3 }, className: 'flex-l pb3 pt5 cf f6 flex-row dn' },
            g(
              'div',
              { className: 'w5' },
              g(
                'div',
                { className: 'br-100 dib flex items-center justify-center bg-near-white mb3 h2 w2' },
                g('img', { style: { width: 18, height: 18 }, src: '../static/icons/icon_function.svg' }),
              ),
              g('div', null, 'Function'),
              g('div', { className: 'o-60 mt1' }, 'What is the funciton type?'),
            ),
            g('div', { className: 'flex mr2' }, g('div', { className: 'w4 pt5 tc' }, y)),
            g(
              'div',
              { className: 'flex w5' },
              g(
                'div',
                { className: '' },
                g(
                  'div',
                  { className: 'mb4' },
                  g(
                    'div',
                    { className: 'br-100 dib flex items-center justify-center bg-near-white mb3 h2 w2' },
                    g('img', { style: { width: 18, height: 12 }, src: '../static/icons/icon_zoom.svg' }),
                  ),
                  g('div', null, 'Zoom function'),
                  g('div', { className: 'o-60 mt1' }, 'Adjust based on zoom level'),
                ),
                g(
                  'div',
                  null,
                  g(
                    'div',
                    { className: 'br-100 dib flex items-center justify-center bg-near-white mb3 h2 w2' },
                    g('img', { style: { width: 16, height: 12 }, src: '../static/icons/icon_property.svg' }),
                  ),
                  g('div', null, 'Property function'),
                  g('div', { className: 'o-60 mt1' }, 'What is the value type of the property?', ' '),
                ),
              ),
            ),
            g('div', { className: 'flex mr2' }, g('div', { className: 'w4 pt5 tc' }, y)),
            g(
              'div',
              { className: 'flex w-80 flex-column mt6 ' },
              g(
                'div',
                { className: 'mr4 flex flex-row w-100' },
                g(
                  'div',
                  { className: ' w-40 mr4' },
                  g(
                    'div',
                    { className: 'br-100 dib flex items-center justify-center bg-near-white mb3 h2 w2' },
                    g('img', { style: { width: 12, height: 12 }, src: '../static/icons/icon_string.svg' }),
                  ),
                  g('div', null, 'String '),
                  g('div', { className: 'o-60 mt1' }, 'String value allows for categorical functions'),
                ),
                g(
                  'div',
                  { className: 'flex items-center nl4 mr4 justify-center' },
                  g('div', { className: 'bt bw1 dib w1 b--black-10' }),
                ),
                g(
                  'div',
                  { className: 'mb4 w-40 ' },
                  g(
                    'div',
                    { className: 'cf' },
                    g(
                      'div',
                      { className: 'br-100 fl flex items-center justify-center bg-near-white mb3 h2 w2' },
                      g('img', { style: { width: 12, height: 12 }, src: '../static/icons/icon_categorical.svg' }),
                    ),
                    g('div', { className: 'fl ml3 mr3 f7 mt2 o-50' }, ' + '),
                    g(
                      'div',
                      { className: 'br-100 fl flex items-center justify-center bg-near-white mb3 h2 w2' },
                      g('img', { style: { width: 18, height: 12 }, src: '../static/icons/icon_zoom.svg' }),
                    ),
                  ),
                  g('div', null, 'Categorical only'),
                  g('div', { className: 'o-60 mt1' }, 'Simple value or add zoom function'),
                ),
              ),
              g(
                'div',
                { className: 'flex flex-row w-100' },
                g(
                  'div',
                  { className: 'w-40 mr4' },
                  g(
                    'div',
                    { className: 'br-100 dib flex items-center justify-center bg-near-white mb3 h2 w2' },
                    g('img', { style: { width: 12, height: 12 }, src: '../static/icons/icon_number.svg' }),
                  ),
                  g('div', null, 'Number'),
                  g('div', { className: 'o-60 mt1' }, 'What type of property function?'),
                ),
                g(
                  'div',
                  { className: 'flex items-center nl4 mr4 justify-center' },
                  g('div', { className: 'bt bw1 dib w1 b--black-10' }),
                ),
                g(
                  'div',
                  { className: 'w-50' },
                  g(
                    'div',
                    { className: 'cf ' },
                    g(
                      'div',
                      { className: 'br-100 fl mr2 flex items-center justify-center bg-near-white mb3 h2 w2' },
                      g('img', { style: { width: 12, height: 12 }, src: '../static/icons/icon_categorical.svg' }),
                    ),
                    g(
                      'div',
                      { className: 'br-100 fl mr2 flex items-center justify-center bg-near-white mb3 h2 w2' },
                      g('img', { style: { width: 12, height: 12 }, src: '../static/icons/icon_exponential.svg' }),
                    ),
                    g(
                      'div',
                      { className: 'br-100 fl flex items-center justify-center bg-near-white mb3 h2 w2' },
                      g('img', { style: { width: 12, height: 12 }, src: '../static/icons/icon_interval.svg' }),
                    ),
                    g('div', { className: 'fl ml3 mr3 f7 mt2 o-50' }, ' + '),
                    g(
                      'div',
                      { className: 'br-100 fl flex items-center justify-center bg-near-white mb3 h2 w2' },
                      g('img', { style: { width: 18, height: 12 }, src: '../static/icons/icon_zoom.svg' }),
                    ),
                  ),
                  g('div', null, 'Exponential, categorical, or interval'),
                  g('div', { className: 'o-60 mt1' }, 'Simple value or add zoom function'),
                ),
              ),
            ),
          )
        },
        N = n('rAQz'),
        x = n('u223'),
        _ = a.a.createElement,
        T = _(
          'div',
          { className: '' },
          _('div', { className: 'bl bw1 dib h0 center b--black-10' }),
          _('div', { className: 'h0 ml2 mr2 br2 nt1 tc br--top bt bl br bw1 b--black-10' }),
        ),
        E = [
          {
            title: 'Exponential',
            description: 'Generate an output by interpolating between stops.',
            code:
              "'circle-color': {\n  'property': \u2018level\u2019,\n  'type': \u2018exponential\u2019,\n  'stops': [\n    [1, '#009900'],\n    [100, '#1666ff']\n}",
            image: _(
              'div',
              null,
              _(
                'div',
                { className: 'flex w-100 mb2 justify-between' },
                _('div', { style: { background: '#61AAFE' }, className: 'bg-dark-blue br-pill pv2 ph2' }),
                _('div', { style: { background: '#89A6F6' }, className: 'bg-blue br-pill pv2 ph2' }),
                _('div', { style: { background: '#ACA3F0' }, className: 'bg-light-blue br-pill pv2 ph2' }),
                _('div', { style: { background: '#D79DE7' }, className: 'bg-lightest-blue br-pill pv2 ph2' }),
              ),
              T,
              _(
                'div',
                { className: 'o-40 pt1 cf mb2' },
                _('span', { className: 'fl' }, '1'),
                _('span', { className: 'fr' }, '99'),
              ),
              _('div', {
                className: 'h1 br2 br-pill',
                style: { background: 'linear-gradient(to right, #61AAFE 0%, #D79DE7 100%)' },
              }),
            ),
          },
          {
            title: 'Interval',
            description: 'Return the output value of the stop just less than the function input.',
            code:
              "'circle-color': {\n    'property': \u2018density\u2019,\n    'type': \u2018interval\u2019,\n    'stops': [\n      [25, '#009900'],\n      [75, '#cc00ff'],\n      [100, '#1666ff']\n}",
            image: _(
              'div',
              null,
              _(
                'div',
                { className: 'flex w-100 mb2 justify-around' },
                _('div', { style: { background: '#61AAFE' }, className: 'bg-dark-blue br-pill pv2 ph2' }),
                _('div', { style: { background: '#ACA3F0' }, className: 'bg-light-blue br-pill pv2 ph2' }),
                _('div', { style: { background: '#D79DE7' }, className: 'bg-lightest-blue br-pill pv2 ph2' }),
              ),
              _(
                'div',
                { className: 'flex-justify-between flex' },
                _('div', { className: 'w-third' }, T),
                _('div', { className: 'w-third' }, T),
                _('div', { className: 'w-third' }, T),
              ),
              _(
                'div',
                { className: 'flex w-100 justify-between' },
                _('div', { className: 'o-40 pt1 cf mb2' }, '0'),
                _('div', { className: 'o-40 pt1 cf mb2' }, '25'),
                _('div', { className: 'o-40 pt1 cf mb2' }, '75'),
                _('div', { className: 'o-40 pt1 cf mb2' }, '100'),
              ),
              _(
                'div',
                { className: 'flex w-100 mb2 justify-between' },
                _('div', { className: 'h1 w-third br-pill br--left', style: { background: '#61AAFE' } }),
                _('div', { className: 'h1 w-third ml1', style: { background: '#ACA3F0' } }),
                _('div', { className: 'h1 w-third br-pill  ml1 br--right', style: { background: '#D79DE7' } }),
              ),
            ),
          },
          {
            title: 'Categorical',
            description: 'Return the output value of the stop equal to the function input.',
            code:
              "'circle-color': {\n    'property': 'type',\n    'type': 'categorical',\n    'stops': [\n      [\u2018low\u2019, '#009900'],\n      [\u2018medium\u2019, '#cc00ff'],\n      [\u2018high\u2019, '#1666ff']\n}",
            image: _(
              'div',
              null,
              _(
                'div',
                { className: 'flex w-100 mb2 flex-column' },
                _(
                  'div',
                  { className: 'pt1 cf mb2' },
                  _('span', { className: 'o-40 fl' }, 'Low'),
                  _('div', { style: { background: '#61AAFE' }, className: 'dib fr bg-dark-blue br-pill pv2 ph2' }),
                ),
                _(
                  'div',
                  { className: 'pt1 cf mb2' },
                  _('span', { className: 'fl o-40' }, 'Meidum'),
                  _('div', { style: { background: '#ACA3F0' }, className: 'dib fr bg-dark-blue br-pill pv2 ph2' }),
                ),
                _(
                  'div',
                  { className: 'pt1 cf mb2' },
                  _('span', { className: 'fl o-40' }, 'High'),
                  _('div', { style: { background: '#D79DE7' }, className: 'dib fr bg-dark-blue br-pill pv2 ph2' }),
                ),
              ),
            ),
          },
        ],
        j = [
          {
            title: 'Zoom',
            description: 'Radius increases as zoom level increases',
            code: "'circle-radius': {\n    stops: [[8, 6], [16, 40]]\n}",
            image: _(
              'div',
              { className: 'flex flex-row' },
              _(
                'div',
                { className: 'flex flex-column justify-end items-start w-100 mb2' },
                _(
                  'div',
                  { style: { background: '#BDDBFF', width: 24, height: 24 }, className: 'blue self-center br-100' },
                  '6',
                ),
                _('div', { className: 'o-40 self-center' }, 'z8'),
              ),
              _(
                'div',
                { className: 'flex flex-column justify-end items-start w-100 mb2' },
                _(
                  'div',
                  {
                    style: { background: '#BDDBFF', width: 60, height: 60 },
                    className: 'blue self-center justify-center flex br-100',
                  },
                  _('span', { className: 'self-center ' }, '40'),
                ),
                _('div', { className: 'o-40 self-center' }, 'z16'),
              ),
            ),
          },
          {
            title: 'Property',
            description: 'Radius increases as property \u2018sqrt\u2019 increases',
            code:
              "'circle-radius\u2019: {\n    property: 'sqrt',\n    stops: [\n        [0, 6],\n        [250, 40]\n    ]\n}",
            image: _(
              'div',
              { className: 'flex flex-row' },
              _(
                'div',
                { className: 'flex flex-column justify-end items-start w-100 mb2' },
                _(
                  'div',
                  { style: { background: '#BDDBFF', width: 24, height: 24 }, className: 'blue mb2 self-center br-100' },
                  '6',
                ),
                _(
                  'div',
                  {
                    style: { background: '#BDDBFF', width: 60, height: 60 },
                    className: 'blue mb2 self-center justify-center flex br-100',
                  },
                  _('span', { className: 'self-center ' }, '40'),
                ),
                _('div', { className: 'o-40 self-center' }, 'z8'),
              ),
              _(
                'div',
                { className: 'flex flex-column justify-end items-start w-100 mb2' },
                _(
                  'div',
                  {
                    style: { background: '#BDDBFF', width: 24, height: 24 },
                    className: 'blue mb2  self-center br-100',
                  },
                  '6',
                ),
                _(
                  'div',
                  {
                    style: { background: '#BDDBFF', width: 60, height: 60 },
                    className: 'blue mb2  self-center justify-center flex br-100',
                  },
                  _('span', { className: 'self-center ' }, '40'),
                ),
                _('div', { className: 'o-40 self-center' }, 'z16'),
              ),
            ),
          },
          {
            title: 'Zoom and property',
            description: 'Radius increases as property \u2018sqrt\u2019 and zoom level increase.',
            code:
              "'circle-radius': {\n  property: 'sqrt',\n  stops: [\n    [{zoom: 8,  value: 0}, 3],\n    [{zoom: 8,  value: 250}, 20],\n    [{zoom: 16, value: 0}, 6],\n    [{zoom: 16, value: 250}, 40]\n  ]\n}",
            image: _(
              'div',
              { className: 'flex flex-row' },
              _(
                'div',
                { className: 'flex flex-column justify-end items-start w-100 mb2' },
                _(
                  'div',
                  { style: { background: '#BDDBFF', width: 22, height: 22 }, className: 'blue mb2 self-center br-100' },
                  '3',
                ),
                _(
                  'div',
                  {
                    style: { background: '#BDDBFF', width: 40, height: 40 },
                    className: 'blue mb2 self-center justify-center flex br-100',
                  },
                  _('span', { className: 'self-center ' }, '20'),
                ),
                _('div', { className: 'o-40 self-center' }, 'z8'),
              ),
              _(
                'div',
                { className: 'flex flex-column justify-end items-start w-100 mb2' },
                _(
                  'div',
                  {
                    style: { background: '#BDDBFF', width: 30, height: 30 },
                    className: 'blue mb2 pt1 self-center br-100',
                  },
                  '6',
                ),
                _(
                  'div',
                  {
                    style: { background: '#BDDBFF', width: 60, height: 60 },
                    className: 'blue mb2  self-center justify-center flex br-100',
                  },
                  _('span', { className: 'self-center ' }, '40'),
                ),
                _('div', { className: 'o-40 self-center' }, 'z16'),
              ),
            ),
          },
        ],
        O = [
          {
            index: 1,
            title: 'Categorical',
            content: _(N.a, {
              content: [
                ['Open up the vaue editor', '../static/img/function_s1_l.png'],
                ['Select a continuous data field', '../static/img/function_s1_m.png'],
                ['Edit value', '../static/img/function_s1_r.png'],
              ],
            }),
          },
          {
            index: 2,
            title: 'Interval',
            content: _(N.a, {
              content: [
                ['Open up the vaue editor', '../static/img/function_s1_l.png'],
                ['Select a discrete data field', '../static/img/function_s2_m.png'],
                ['Edit value', '../static/img/function_s2_r.png'],
              ],
            }),
          },
          {
            index: 3,
            title: 'Exponential',
            content: _(N.a, {
              content: [
                ['Open up the vaue editor', '../static/img/function_s1_l.png'],
                ['Select a data field', '../static/img/function_s3_m.png'],
                ['Edit value', '../static/img/function_s3_r.png'],
              ],
            }),
          },
        ],
        k = [
          {
            index: 1,
            title: 'Editing',
            content: _(N.a, {
              content: [
                ['A table design with graphs', '../static/img/complex_s1_l.png'],
                ['Value modifiers for zoom stops', '../static/img/complex_s1_m.png'],
                ['Code editor for complicated values', '../static/img/complex_s1_r.png'],
              ],
            }),
          },
          {
            index: 2,
            title: 'Visualize Values',
            content: _(N.a, {
              content: [
                ['One single value', '../static/img/complex_s2_l.png'],
                ['Graph with property value as x-axis', '../static/img/complex_s2_m.png'],
                ['Graph with zoom as x-axis', '../static/img/complex_s2_r.png'],
              ],
            }),
          },
          {
            index: 3,
            title: 'Color',
            content: _(N.a, {
              content: [
                ['Open up the vaue editor', '../static/img/complex_s3_l.png'],
                ['Select a data field', '../static/img/complex_s3_m.png'],
                ['Edit value', '../static/img/complex_s3_r.png'],
              ],
            }),
          },
        ]
      t.default = function () {
        return _(
          b.a,
          null,
          _(
            p.a,
            null,
            _(
              'style',
              null,
              '\n      .h0 {\n        height: 0.5rem !important;\n      }\n      .w0 {\n        width: 0.5rem !important;\n      }\n      @media screen and (min-width: 30em) {\n        .bg-near-white-ns {\n          background: #f4f4f4 !important;\n        }\n      }\n      .rotate-neg90 {\n\n    -ms-transform: rotate(-90deg); /* IE 9 */\n    -webkit-transform: rotate(-90deg); /* Chrome, Safari, Opera */\n    transform: rotate(-90deg);\n      }\n    ',
            ),
          ),
          _(
            'div',
            { className: ''.concat(f.a.limiter) },
            _(o.a, null),
            _(
              'div',
              { className: 'cf mt5 ' },
              _('div', { className: 'f5 o-80 mb2' }, 'Small Project'),
              _('div', { className: ''.concat(f.a.txtH1, ' nl1') }, 'Data-driven Styling '),
              _(
                'div',
                { className: ''.concat(f.a.txtIntro, ' w-80-ns w-100 ') },
                'Data-driven styling represents the capacity in our map SDKs to change styles based on data properties. For example, change circle layer radius based on population density. When this feature was first introduced in Mapbox GL JS in June 2016, I experimented with some UI concepts to explore design options and inform future technical decisions.',
              ),
              _(
                'div',
                { className: 'mt5' },
                _('div', { className: ''.concat(f.a.txtH2, ' mb4') }, 'Three types of property functions'),
                _(
                  'div',
                  { className: ''.concat(f.a.txtBody) },
                  'There are three types of functions that comes with data driven styling, exponential, interval, and categorical.',
                ),
              ),
              _(v, { content: E }),
            ),
          ),
          _(
            'div',
            { className: 'bg-near-white pv4 mt4' },
            _(
              'div',
              { className: ''.concat(f.a.limiter, ' ') },
              _('div', { className: ''.concat(f.a.txtH3, ' mb4 pt4') }, 'Three types of property functions'),
              _(r.a, { content: O }),
            ),
          ),
          _(
            'div',
            { className: ''.concat(f.a.limiter) },
            _(
              'div',
              { className: 'cf pv4' },
              _(
                'div',
                { className: 'mt4' },
                _('div', { className: ''.concat(f.a.txtH2, ' mb4') }, 'Property and zoom functions'),
                _(
                  'div',
                  { className: ''.concat(f.a.txtBody, ' w-80') },
                  "In addition to property functions (data-driven styling), Mapbox GL JS also provides the ability to style based on zoom levels. Zoom functions is a feature that's already included in the current Mapbox Studio. The real complexity comes when combining zoom functions with property functions.",
                ),
              ),
              _(v, { content: j }),
            ),
          ),
          _(
            'div',
            { className: 'bg-near-white pv4 mt4' },
            _(
              'div',
              { className: ''.concat(f.a.limiter, ' ') },
              _('div', { className: ''.concat(f.a.txtH3, ' mb4 pt4') }, 'Property function and zoom function UI'),
              _(N.a, {
                content: [
                  ['Property function only', '../static/img/f_property.png'],
                  ['Zoom fucntion only', '../static/img/f_zoom.png'],
                  ['Zoom and property function', '../static/img/f_zoom_property.png'],
                ],
              }),
            ),
          ),
          _(
            'div',
            { className: ''.concat(f.a.limiter) },
            _(
              'div',
              { className: 'cf pv4' },
              _(
                'div',
                { className: 'mt4 mb4' },
                _('div', { className: ''.concat(f.a.txtH2, ' mb4') }, 'Complex value editing'),
                _(
                  'div',
                  { className: ''.concat(f.a.txtBody, ' w-80') },
                  'The ability to style based on both zoom and property means maximum control and flexibility when styling base maps with complicated layer structures. It also means some new challenges for a learnable, simple UI. Below is a flow I sketched out to demonstrate the steps a user goes through to create a property and zoom function.',
                ),
              ),
              _(w, null),
            ),
          ),
          _(
            'div',
            { className: 'bg-near-white pt4 mt4' },
            _(
              'div',
              { className: ''.concat(f.a.limiter) },
              _('div', { className: ''.concat(f.a.txtH3, ' mb4') }, 'Complex value editing'),
              _(r.a, { height: 'h7-l h-auto', content: k }),
            ),
          ),
          _(
            'div',
            { className: ''.concat(f.a.limiter, ' mt5 nb5 cf') },
            _(
              'div',
              { className: ''.concat(f.a.txtBody, ' w-80 mt4') },
              "Designing a UI for something that's essentially a programming expression was an interesting challenge. It is hard to reduce abstraction when there is so much flexibility that comes with code. Another constraint here is we are building this on top of the exisiting interface (primarily for base map design), not designing a visualzation editor from ground up.",
            ),
            _(
              'div',
              { className: 'flex-l flex-non justify-center ' },
              _(
                'div',
                { className: 'pt5 mt3' },
                _('img', {
                  style: { width: 20, height: 20 },
                  className: 'o-90 db mb3',
                  src: '../static/icons/play_button.svg',
                }),
                _('div', { className: ''.concat(f.a.txtH3, ' mb2') }, 'Prototypes'),
                _(
                  'div',
                  { className: ''.concat(f.a.txtSbody, ' ') },
                  'I used prototypes to better communicate user flows.',
                ),
              ),
              _(
                'div',
                { className: 'nr5 dn db-l' },
                _(
                  'video',
                  {
                    style: { width: 800 },
                    controls: !1,
                    loop: !0,
                    autoPlay: !0,
                    poster: '../static/img/ds_animate.png',
                  },
                  _('source', { src: '../static/img/ds_animate.mp4', type: 'video/mp4' }),
                ),
              ),
              _(
                'div',
                { className: 'db dn-l' },
                _(
                  'video',
                  { className: 'w-100', controls: !0, loop: !0, autoPlay: !0, poster: '../static/img/ds_animate.png' },
                  _('source', { src: '../static/img/ds_animate.mp4', type: 'video/mp4' }),
                ),
              ),
            ),
          ),
          _(x.a, null),
        )
      }
    },
    'AT/M': function (e, t, n) {
      'use strict'
      function i(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return e
      }
      n.d(t, 'a', function () {
        return i
      })
    },
    Bp9Y: function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = !('undefined' === typeof window || !window.document || !window.document.createElement)),
        (e.exports = t.default)
    },
    MI3g: function (e, t, n) {
      'use strict'
      var i = n('XVgq'),
        a = n.n(i),
        o = n('Z7t5'),
        r = n.n(o)
      function s(e) {
        return (s =
          'function' === typeof r.a && 'symbol' === typeof a.a
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e && 'function' === typeof r.a && e.constructor === r.a && e !== r.a.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      function l(e) {
        return (l =
          'function' === typeof r.a && 'symbol' === s(a.a)
            ? function (e) {
                return s(e)
              }
            : function (e) {
                return e && 'function' === typeof r.a && e.constructor === r.a && e !== r.a.prototype ? 'symbol' : s(e)
              })(e)
      }
      var c = n('AT/M')
      function u(e, t) {
        return !t || ('object' !== l(t) && 'function' !== typeof t) ? Object(c.a)(e) : t
      }
      n.d(t, 'a', function () {
        return u
      })
    },
    Pe6d: function (e, t, n) {
      'use strict'
      var i = n('0iUn'),
        a = n('sLSF'),
        o = n('MI3g'),
        r = n('a7VT'),
        s = n('AT/M'),
        l = n('Tit0'),
        c = n('vYYK'),
        u = n('q1tI'),
        d = n.n(u),
        m = (n('1w3K'), n('8Kt/')),
        p = n.n(m),
        f = d.a.createElement,
        h = (function (e) {
          function t(e) {
            var n
            return (
              Object(i.a)(this, t),
              (n = Object(o.a)(this, Object(r.a)(t).call(this, e))),
              Object(c.a)(Object(s.a)(n), 'onClickNext', function () {
                n.setState({ activeIndex: 2 === n.state.activeIndex ? 0 : n.state.activeIndex + 1 })
              }),
              Object(c.a)(Object(s.a)(n), 'onClickPrev', function () {
                n.setState({ activeIndex: 0 === n.state.activeIndex ? 2 : n.state.activeIndex - 1 })
              }),
              Object(c.a)(Object(s.a)(n), 'goToFirst', function () {
                n.setState({ activeIndex: 0 })
              }),
              Object(c.a)(Object(s.a)(n), 'goToLast', function () {
                n.setState({ activeIndex: 2 })
              }),
              Object(c.a)(Object(s.a)(n), 'goToMiddle', function () {
                n.setState({ activeIndex: 1 })
              }),
              (n.state = { activeIndex: 0 }),
              n
            )
          }
          return (
            Object(l.a)(t, e),
            Object(a.a)(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.content
                  return f(
                    'div',
                    { className: 'relative' },
                    f(
                      p.a,
                      null,
                      f(
                        'style',
                        null,
                        '\n    @media screen and (min-width: 60em) {\n     .h7-l { height: 32rem; }\n    }\n    .example-enter {\n      opacity: 0.04;\n    }\n    .example-enter.example-enter-active {\n      opacity: 1;\n      transition: opacity 600ms ease-in;\n    }\n',
                      ),
                    ),
                    f(
                      'div',
                      { className: 'mb4' },
                      f(
                        'a',
                        {
                          onClick: this.goToFirst,
                          className: 'f6 dib mr3 pointer nl2 pv2 hover-black ph3-ns ph2 br-pill '.concat(
                            0 === this.state.activeIndex ? 'o-90 bg-white' : 'o-40',
                          ),
                        },
                        e[0].title,
                      ),
                      f(
                        'a',
                        {
                          onClick: this.goToMiddle,
                          className: 'f6 dib mr3 pointer nl2 pv2 hover-black ph3-ns ph2 br-pill '.concat(
                            1 === this.state.activeIndex ? 'o-90 bg-white' : 'o-40',
                          ),
                        },
                        e[1].title,
                      ),
                      f(
                        'a',
                        {
                          onClick: this.goToLast,
                          className: 'f6 dib mr3 pointer nl2 pv2 hover-black ph3-ns ph2 br-pill '.concat(
                            2 === this.state.activeIndex ? 'o-90 bg-white' : 'o-40',
                          ),
                        },
                        e[2].title,
                      ),
                    ),
                    f(
                      'div',
                      { className: 'items-center h-full mt5 absolute absolute--fill flex' },
                      f(
                        'a',
                        {
                          onClick: this.onClickPrev,
                          className:
                            'br-100 left-0 nl5 absolute  shadow shadow-1-on-hover pointer fl dib-l dn bg-white h2 items-center flex-l ph2',
                        },
                        f('img', { className: 'h1 w1 o-50 glow ', src: '../../static/icons/prev.svg' }),
                      ),
                      f(
                        'a',
                        {
                          onClick: this.onClickNext,
                          className:
                            'br-100 right-0 nr5 absolute shadow shadow-1-on-hover pointer fr dib-l dn bg-white h2 items-center flex-l ph2',
                        },
                        f('img', { className: 'h1 w1 o-50 glow ', src: '../../static/icons/next-b.svg' }),
                      ),
                    ),
                    f(
                      'div',
                      { className: 'h7-l h-auto mb4' },
                      0 === this.state.activeIndex && e[0].content,
                      1 === this.state.activeIndex && e[1].content,
                      2 === this.state.activeIndex && e[2].content,
                    ),
                  )
                },
              },
            ]),
            t
          )
        })(u.Component)
      Object(c.a)(h, 'defaultProps', { height: 'h6-l h5 h-auto' }), (t.a = h)
    },
    Qrca: function (e, t) {
      e.exports = function () {
        for (var e = arguments.length, t = [], n = 0; n < e; n++) t[n] = arguments[n]
        if (
          0 !==
          (t = t.filter(function (e) {
            return null != e
          })).length
        )
          return 1 === t.length
            ? t[0]
            : t.reduce(function (e, t) {
                return function () {
                  e.apply(this, arguments), t.apply(this, arguments)
                }
              })
      }
    },
    Tit0: function (e, t, n) {
      'use strict'
      var i = n('SqZg'),
        a = n.n(i),
        o = n('TRZx'),
        r = n.n(o)
      function s(e, t) {
        return (s =
          r.a ||
          function (e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      function l(e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function')
        ;(e.prototype = a()(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
          t && s(e, t)
      }
      n.d(t, 'a', function () {
        return l
      })
    },
    UnXY: function (e, t, n) {
      'use strict'
      t.__esModule = !0
      var i =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
          },
        a = l(n('Qrca')),
        o = l(n('q1tI')),
        r = l(n('17x9')),
        s = (l(n('6DQo')), n('8PcY'))
      function l(e) {
        return e && e.__esModule ? e : { default: e }
      }
      r.default.any, r.default.func, r.default.node
      var c = (function (e) {
        function t(n, a) {
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t)
          var o = (function (e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            return !t || ('object' !== typeof t && 'function' !== typeof t) ? e : t
          })(this, e.call(this, n, a))
          return (
            (o.performAppear = function (e, t) {
              ;(o.currentlyTransitioningKeys[e] = !0),
                t.componentWillAppear
                  ? t.componentWillAppear(o._handleDoneAppearing.bind(o, e, t))
                  : o._handleDoneAppearing(e, t)
            }),
            (o._handleDoneAppearing = function (e, t) {
              t.componentDidAppear && t.componentDidAppear(), delete o.currentlyTransitioningKeys[e]
              var n = (0, s.getChildMapping)(o.props.children)
              ;(n && n.hasOwnProperty(e)) || o.performLeave(e, t)
            }),
            (o.performEnter = function (e, t) {
              ;(o.currentlyTransitioningKeys[e] = !0),
                t.componentWillEnter
                  ? t.componentWillEnter(o._handleDoneEntering.bind(o, e, t))
                  : o._handleDoneEntering(e, t)
            }),
            (o._handleDoneEntering = function (e, t) {
              t.componentDidEnter && t.componentDidEnter(), delete o.currentlyTransitioningKeys[e]
              var n = (0, s.getChildMapping)(o.props.children)
              ;(n && n.hasOwnProperty(e)) || o.performLeave(e, t)
            }),
            (o.performLeave = function (e, t) {
              ;(o.currentlyTransitioningKeys[e] = !0),
                t.componentWillLeave
                  ? t.componentWillLeave(o._handleDoneLeaving.bind(o, e, t))
                  : o._handleDoneLeaving(e, t)
            }),
            (o._handleDoneLeaving = function (e, t) {
              t.componentDidLeave && t.componentDidLeave(), delete o.currentlyTransitioningKeys[e]
              var n = (0, s.getChildMapping)(o.props.children)
              n && n.hasOwnProperty(e)
                ? o.keysToEnter.push(e)
                : o.setState(function (t) {
                    var n = i({}, t.children)
                    return delete n[e], { children: n }
                  })
            }),
            (o.childRefs = Object.create(null)),
            (o.state = { children: (0, s.getChildMapping)(n.children) }),
            o
          )
        }
        return (
          (function (e, t) {
            if ('function' !== typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
            })),
              t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
          })(t, e),
          (t.prototype.componentWillMount = function () {
            ;(this.currentlyTransitioningKeys = {}), (this.keysToEnter = []), (this.keysToLeave = [])
          }),
          (t.prototype.componentDidMount = function () {
            var e = this.state.children
            for (var t in e) e[t] && this.performAppear(t, this.childRefs[t])
          }),
          (t.prototype.componentWillReceiveProps = function (e) {
            var t = (0, s.getChildMapping)(e.children),
              n = this.state.children
            for (var i in (this.setState({ children: (0, s.mergeChildMappings)(n, t) }), t)) {
              var a = n && n.hasOwnProperty(i)
              !t[i] || a || this.currentlyTransitioningKeys[i] || this.keysToEnter.push(i)
            }
            for (var o in n) {
              var r = t && t.hasOwnProperty(o)
              !n[o] || r || this.currentlyTransitioningKeys[o] || this.keysToLeave.push(o)
            }
          }),
          (t.prototype.componentDidUpdate = function () {
            var e = this,
              t = this.keysToEnter
            ;(this.keysToEnter = []),
              t.forEach(function (t) {
                return e.performEnter(t, e.childRefs[t])
              })
            var n = this.keysToLeave
            ;(this.keysToLeave = []),
              n.forEach(function (t) {
                return e.performLeave(t, e.childRefs[t])
              })
          }),
          (t.prototype.render = function () {
            var e = this,
              t = [],
              n = function (n) {
                var i = e.state.children[n]
                if (i) {
                  var r = 'string' !== typeof i.ref,
                    s = e.props.childFactory(i),
                    l = function (t) {
                      e.childRefs[n] = t
                    }
                  s === i && r && (l = (0, a.default)(i.ref, l)), t.push(o.default.cloneElement(s, { key: n, ref: l }))
                }
              }
            for (var r in this.state.children) n(r)
            var s = i({}, this.props)
            return (
              delete s.transitionLeave,
              delete s.transitionName,
              delete s.transitionAppear,
              delete s.transitionEnter,
              delete s.childFactory,
              delete s.transitionLeaveTimeout,
              delete s.transitionEnterTimeout,
              delete s.transitionAppearTimeout,
              delete s.component,
              o.default.createElement(this.props.component, s, t)
            )
          }),
          t
        )
      })(o.default.Component)
      ;(c.displayName = 'TransitionGroup'),
        (c.propTypes = {}),
        (c.defaultProps = {
          component: 'span',
          childFactory: function (e) {
            return e
          },
        }),
        (t.default = c),
        (e.exports = t.default)
    },
    VOcB: function (e, t, n) {
      'use strict'
      function i(e, t) {
        return e
          .replace(new RegExp('(^|\\s)' + t + '(?:\\s|$)', 'g'), '$1')
          .replace(/\s+/g, ' ')
          .replace(/^\s*|\s*$/g, '')
      }
      e.exports = function (e, t) {
        e.classList
          ? e.classList.remove(t)
          : 'string' === typeof e.className
          ? (e.className = i(e.className, t))
          : e.setAttribute('class', i((e.className && e.className.baseVal) || '', t))
      }
    },
    WbBG: function (e, t, n) {
      'use strict'
      e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
    },
    a7VT: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return s
      })
      var i = n('Bhuq'),
        a = n.n(i),
        o = n('TRZx'),
        r = n.n(o)
      function s(e) {
        return (s = r.a
          ? a.a
          : function (e) {
              return e.__proto__ || a()(e)
            })(e)
      }
    },
    ohE5: function (e, t, n) {
      'use strict'
      function i(e) {
        return function () {
          return e
        }
      }
      var a = function () {}
      ;(a.thatReturns = i),
        (a.thatReturnsFalse = i(!1)),
        (a.thatReturnsTrue = i(!0)),
        (a.thatReturnsNull = i(null)),
        (a.thatReturnsThis = function () {
          return this
        }),
        (a.thatReturnsArgument = function (e) {
          return e
        }),
        (e.exports = a)
    },
    'q5+k': function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var i,
        a = n('Bp9Y'),
        o = (i = a) && i.__esModule ? i : { default: i }
      var r,
        s = 'clearTimeout',
        l = function (e) {
          var t = new Date().getTime(),
            n = Math.max(0, 16 - (t - u)),
            i = setTimeout(e, n)
          return (u = t), i
        },
        c = function (e, t) {
          return e + (e ? t[0].toUpperCase() + t.substr(1) : t) + 'AnimationFrame'
        }
      o.default &&
        ['', 'webkit', 'moz', 'o', 'ms'].some(function (e) {
          var t = c(e, 'request')
          if (t in window)
            return (
              (s = c(e, 'cancel')),
              (l = function (e) {
                return window[t](e)
              })
            )
        })
      var u = new Date().getTime()
      ;((r = function (e) {
        return l(e)
      }).cancel = function (e) {
        window[s] && 'function' === typeof window[s] && window[s](e)
      }),
        (t.default = r),
        (e.exports = t.default)
    },
    rAQz: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return d
      })
      var i = n('0iUn'),
        a = n('sLSF'),
        o = n('MI3g'),
        r = n('a7VT'),
        s = n('Tit0'),
        l = n('q1tI'),
        c = n.n(l),
        u = c.a.createElement,
        d = (function (e) {
          function t() {
            return Object(i.a)(this, t), Object(o.a)(this, Object(r.a)(t).apply(this, arguments))
          }
          return (
            Object(s.a)(t, e),
            Object(a.a)(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.content
                  return u(
                    'div',
                    { className: 'flex flex-row-l flex-column justify-between' },
                    u(
                      'div',
                      { className: 'mr3 mb0-l mb4' },
                      u('div', { className: 'f6 o-60 ml2 mb3' }, e[0][0]),
                      u('img', { style: { width: 286 }, src: ''.concat(e[0][1]) }),
                    ),
                    u(
                      'div',
                      { className: 'mr3 mb0-l mb4' },
                      u('div', { className: 'f6 o-60 ml2 mb3' }, e[1][0]),
                      u('img', { style: { width: 286 }, src: ''.concat(e[1][1]) }),
                    ),
                    u(
                      'div',
                      { className: 'mb0-l mb4' },
                      u('div', { className: 'f6 o-60 ml2 mb3' }, e[2][0]),
                      u('img', { style: { width: 286 }, src: ''.concat(e[2][1]) }),
                    ),
                  )
                },
              },
            ]),
            t
          )
        })(c.a.Component)
    },
    sLSF: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      var i = n('hfKm'),
        a = n.n(i)
      function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n]
          ;(i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            'value' in i && (i.writable = !0),
            a()(e, i.key, i)
        }
      }
      function r(e, t, n) {
        return t && o(e.prototype, t), n && o(e, n), e
      }
    },
    vYYK: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return o
      })
      var i = n('hfKm'),
        a = n.n(i)
      function o(e, t, n) {
        return t in e ? a()(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e
      }
    },
    xU8c: function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.animationEnd = t.animationDelay = t.animationTiming = t.animationDuration = t.animationName = t.transitionEnd = t.transitionDuration = t.transitionDelay = t.transitionTiming = t.transitionProperty = t.transform = void 0)
      var i,
        a = n('Bp9Y')
      var o = 'transform',
        r = void 0,
        s = void 0,
        l = void 0,
        c = void 0,
        u = void 0,
        d = void 0,
        m = void 0,
        p = void 0,
        f = void 0,
        h = void 0,
        v = void 0
      if (((i = a) && i.__esModule ? i : { default: i }).default) {
        var b = (function () {
          for (
            var e = document.createElement('div').style,
              t = {
                O: function (e) {
                  return 'o' + e.toLowerCase()
                },
                Moz: function (e) {
                  return e.toLowerCase()
                },
                Webkit: function (e) {
                  return 'webkit' + e
                },
                ms: function (e) {
                  return 'MS' + e
                },
              },
              n = Object.keys(t),
              i = void 0,
              a = void 0,
              o = '',
              r = 0;
            r < n.length;
            r++
          ) {
            var s = n[r]
            if (s + 'TransitionProperty' in e) {
              ;(o = '-' + s.toLowerCase()), (i = t[s]('TransitionEnd')), (a = t[s]('AnimationEnd'))
              break
            }
          }
          !i && 'transitionProperty' in e && (i = 'transitionend')
          !a && 'animationName' in e && (a = 'animationend')
          return (e = null), { animationEnd: a, transitionEnd: i, prefix: o }
        })()
        ;(r = b.prefix),
          (t.transitionEnd = s = b.transitionEnd),
          (t.animationEnd = l = b.animationEnd),
          (t.transform = o = r + '-' + o),
          (t.transitionProperty = c = r + '-transition-property'),
          (t.transitionDuration = u = r + '-transition-duration'),
          (t.transitionDelay = m = r + '-transition-delay'),
          (t.transitionTiming = d = r + '-transition-timing-function'),
          (t.animationName = p = r + '-animation-name'),
          (t.animationDuration = f = r + '-animation-duration'),
          (t.animationTiming = h = r + '-animation-delay'),
          (t.animationDelay = v = r + '-animation-timing-function')
      }
      ;(t.transform = o),
        (t.transitionProperty = c),
        (t.transitionTiming = d),
        (t.transitionDelay = m),
        (t.transitionDuration = u),
        (t.transitionEnd = s),
        (t.animationName = p),
        (t.animationDuration = f),
        (t.animationTiming = h),
        (t.animationDelay = v),
        (t.animationEnd = l),
        (t.default = { transform: o, end: s, property: c, timing: d, delay: m, duration: u })
    },
    xfxO: function (e, t, n) {
      'use strict'
      ;(t.__esModule = !0),
        (t.nameShape = void 0),
        (t.transitionTimeout = function (e) {
          var t = 'transition' + e + 'Timeout',
            n = 'transition' + e
          return function (e) {
            if (e[n]) {
              if (null == e[t])
                return new Error(
                  t +
                    " wasn't supplied to CSSTransitionGroup: this can cause unreliable animations and won't be supported in a future version of React. See https://fb.me/react-animation-transition-group-timeout for more information.",
                )
              if ('number' !== typeof e[t]) return new Error(t + ' must be a number (in milliseconds)')
            }
            return null
          }
        })
      a(n('q1tI'))
      var i = a(n('17x9'))
      function a(e) {
        return e && e.__esModule ? e : { default: e }
      }
      t.nameShape = i.default.oneOfType([
        i.default.string,
        i.default.shape({ enter: i.default.string, leave: i.default.string, active: i.default.string }),
        i.default.shape({
          enter: i.default.string,
          enterActive: i.default.string,
          leave: i.default.string,
          leaveActive: i.default.string,
          appear: i.default.string,
          appearActive: i.default.string,
        }),
      ])
    },
    yD6e: function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t) {
          return e.classList
            ? !!t && e.classList.contains(t)
            : -1 !== (' ' + (e.className.baseVal || e.className) + ' ').indexOf(' ' + t + ' ')
        }),
        (e.exports = t.default)
    },
    ycFn: function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function (e, t) {
          e.classList
            ? e.classList.add(t)
            : (0, o.default)(e, t) ||
              ('string' === typeof e.className
                ? (e.className = e.className + ' ' + t)
                : e.setAttribute('class', ((e.className && e.className.baseVal) || '') + ' ' + t))
        })
      var i,
        a = n('yD6e'),
        o = (i = a) && i.__esModule ? i : { default: i }
      e.exports = t.default
    },
    zB99: function (e, t, n) {
      'use strict'
      t.__esModule = !0
      var i =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
          },
        a = m(n('ycFn')),
        o = m(n('VOcB')),
        r = m(n('q5+k')),
        s = n('xU8c'),
        l = m(n('q1tI')),
        c = m(n('17x9')),
        u = n('i8i4'),
        d = n('xfxO')
      function m(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function p(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !t || ('object' !== typeof t && 'function' !== typeof t) ? e : t
      }
      var f = []
      s.transitionEnd && f.push(s.transitionEnd), s.animationEnd && f.push(s.animationEnd)
      c.default.node,
        d.nameShape.isRequired,
        c.default.bool,
        c.default.bool,
        c.default.bool,
        c.default.number,
        c.default.number,
        c.default.number
      var h = (function (e) {
        function t() {
          var n, i
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t)
          for (var a = arguments.length, o = Array(a), r = 0; r < a; r++) o[r] = arguments[r]
          return (
            (n = i = p(this, e.call.apply(e, [this].concat(o)))),
            (i.componentWillAppear = function (e) {
              i.props.appear ? i.transition('appear', e, i.props.appearTimeout) : e()
            }),
            (i.componentWillEnter = function (e) {
              i.props.enter ? i.transition('enter', e, i.props.enterTimeout) : e()
            }),
            (i.componentWillLeave = function (e) {
              i.props.leave ? i.transition('leave', e, i.props.leaveTimeout) : e()
            }),
            p(i, n)
          )
        }
        return (
          (function (e, t) {
            if ('function' !== typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function, not ' + typeof t)
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
            })),
              t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t))
          })(t, e),
          (t.prototype.componentWillMount = function () {
            ;(this.classNameAndNodeQueue = []), (this.transitionTimeouts = [])
          }),
          (t.prototype.componentWillUnmount = function () {
            ;(this.unmounted = !0),
              this.timeout && clearTimeout(this.timeout),
              this.transitionTimeouts.forEach(function (e) {
                clearTimeout(e)
              }),
              (this.classNameAndNodeQueue.length = 0)
          }),
          (t.prototype.transition = function (e, t, n) {
            var i = (0, u.findDOMNode)(this)
            if (i) {
              var r = this.props.name[e] || this.props.name + '-' + e,
                l = this.props.name[e + 'Active'] || r + '-active',
                c = null,
                d = void 0
              ;(0, a.default)(i, r), this.queueClassAndNode(l, i)
              var m = function (e) {
                ;(e && e.target !== i) ||
                  (clearTimeout(c), d && d(), (0, o.default)(i, r), (0, o.default)(i, l), d && d(), t && t())
              }
              n
                ? ((c = setTimeout(m, n)), this.transitionTimeouts.push(c))
                : s.transitionEnd &&
                  (d = (function (e, t) {
                    return (
                      f.length
                        ? f.forEach(function (n) {
                            return e.addEventListener(n, t, !1)
                          })
                        : setTimeout(t, 0),
                      function () {
                        f.length &&
                          f.forEach(function (n) {
                            return e.removeEventListener(n, t, !1)
                          })
                      }
                    )
                  })(i, m))
            } else t && t()
          }),
          (t.prototype.queueClassAndNode = function (e, t) {
            var n = this
            this.classNameAndNodeQueue.push({ className: e, node: t }),
              this.rafHandle ||
                (this.rafHandle = (0, r.default)(function () {
                  return n.flushClassNameAndNodeQueue()
                }))
          }),
          (t.prototype.flushClassNameAndNodeQueue = function () {
            this.unmounted ||
              this.classNameAndNodeQueue.forEach(function (e) {
                e.node.scrollTop, (0, a.default)(e.node, e.className)
              }),
              (this.classNameAndNodeQueue.length = 0),
              (this.rafHandle = null)
          }),
          (t.prototype.render = function () {
            var e = i({}, this.props)
            return (
              delete e.name,
              delete e.appear,
              delete e.enter,
              delete e.leave,
              delete e.appearTimeout,
              delete e.enterTimeout,
              delete e.leaveTimeout,
              delete e.children,
              l.default.cloneElement(l.default.Children.only(this.props.children), e)
            )
          }),
          t
        )
      })(l.default.Component)
      ;(h.displayName = 'CSSTransitionGroupChild'), (h.propTypes = {}), (t.default = h), (e.exports = t.default)
    },
  },
  [['5rHH', 1, 0]],
])
