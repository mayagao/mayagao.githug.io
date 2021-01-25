;(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    '+eFp': function (e, t, n) {
      'use strict'
      t.__esModule = !0
      var a =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
            }
            return e
          },
        i = c(n('q1tI')),
        r = c(n('17x9')),
        o = c(n('UnXY')),
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
        r.default.bool,
        r.default.bool,
        r.default.bool,
        (0, l.transitionTimeout)('Appear'),
        (0, l.transitionTimeout)('Enter'),
        (0, l.transitionTimeout)('Leave')
      var p = (function (e) {
        function t() {
          var n, a
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t)
          for (var r = arguments.length, o = Array(r), l = 0; l < r; l++) o[l] = arguments[l]
          return (
            (n = a = u(this, e.call.apply(e, [this].concat(o)))),
            (a._wrapChild = function (e) {
              return i.default.createElement(
                s.default,
                {
                  name: a.props.transitionName,
                  appear: a.props.transitionAppear,
                  enter: a.props.transitionEnter,
                  leave: a.props.transitionLeave,
                  appearTimeout: a.props.transitionAppearTimeout,
                  enterTimeout: a.props.transitionEnterTimeout,
                  leaveTimeout: a.props.transitionLeaveTimeout,
                },
                e,
              )
            }),
            u(a, n)
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
            return i.default.createElement(o.default, a({}, this.props, { childFactory: this._wrapChild }))
          }),
          t
        )
      })(i.default.Component)
      ;(p.displayName = 'CSSTransitionGroup'),
        (p.propTypes = {}),
        (p.defaultProps = { transitionAppear: !1, transitionEnter: !0, transitionLeave: !0 }),
        (t.default = p),
        (e.exports = t.default)
    },
    '0iUn': function (e, t, n) {
      'use strict'
      function a(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
      }
      n.d(t, 'a', function () {
        return a
      })
    },
    '16Al': function (e, t, n) {
      'use strict'
      var a = n('ohE5'),
        i = n('2NuI'),
        r = n('WbBG')
      e.exports = function () {
        function e(e, t, n, a, o, s) {
          s !== r &&
            i(
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
        return (n.checkPropTypes = a), (n.PropTypes = n), n
      }
    },
    '17x9': function (e, t, n) {
      e.exports = n('16Al')()
    },
    '1w3K': function (e, t, n) {
      'use strict'
      var a = r(n('+eFp')),
        i = r(n('UnXY'))
      function r(e) {
        return e && e.__esModule ? e : { default: e }
      }
      e.exports = { TransitionGroup: i.default, CSSTransitionGroup: a.default }
    },
    '2NuI': function (e, t, n) {
      'use strict'
      var a = function (e) {}
      e.exports = function (e, t, n, i, r, o, s, l) {
        if ((a(t), !e)) {
          var c
          if (void 0 === t)
            c = new Error(
              'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.',
            )
          else {
            var u = [n, i, r, o, s, l],
              p = 0
            ;(c = new Error(
              t.replace(/%s/g, function () {
                return u[p++]
              }),
            )).name = 'Invariant Violation'
          }
          throw ((c.framesToPop = 1), c)
        }
      }
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
            a.Children.map(e, function (e) {
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
          var a = {},
            i = []
          for (var r in e) t.hasOwnProperty(r) ? i.length && ((a[r] = i), (i = [])) : i.push(r)
          var o = void 0,
            s = {}
          for (var l in t) {
            if (a.hasOwnProperty(l))
              for (o = 0; o < a[l].length; o++) {
                var c = a[l][o]
                s[a[l][o]] = n(c)
              }
            s[l] = n(l)
          }
          for (o = 0; o < i.length; o++) s[i[o]] = n(i[o])
          return s
        })
      var a = n('q1tI')
    },
    'AT/M': function (e, t, n) {
      'use strict'
      function a(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return e
      }
      n.d(t, 'a', function () {
        return a
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
      var a = n('XVgq'),
        i = n.n(a),
        r = n('Z7t5'),
        o = n.n(r)
      function s(e) {
        return (s =
          'function' === typeof o.a && 'symbol' === typeof i.a
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e && 'function' === typeof o.a && e.constructor === o.a && e !== o.a.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      function l(e) {
        return (l =
          'function' === typeof o.a && 'symbol' === s(i.a)
            ? function (e) {
                return s(e)
              }
            : function (e) {
                return e && 'function' === typeof o.a && e.constructor === o.a && e !== o.a.prototype ? 'symbol' : s(e)
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
      var a = n('0iUn'),
        i = n('sLSF'),
        r = n('MI3g'),
        o = n('a7VT'),
        s = n('AT/M'),
        l = n('Tit0'),
        c = n('vYYK'),
        u = n('q1tI'),
        p = n.n(u),
        d = (n('1w3K'), n('8Kt/')),
        f = n.n(d),
        m = p.a.createElement,
        h = (function (e) {
          function t(e) {
            var n
            return (
              Object(a.a)(this, t),
              (n = Object(r.a)(this, Object(o.a)(t).call(this, e))),
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
            Object(i.a)(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.content
                  return m(
                    'div',
                    { className: 'relative' },
                    m(
                      f.a,
                      null,
                      m(
                        'style',
                        null,
                        '\n    @media screen and (min-width: 60em) {\n     .h7-l { height: 32rem; }\n    }\n    .example-enter {\n      opacity: 0.04;\n    }\n    .example-enter.example-enter-active {\n      opacity: 1;\n      transition: opacity 600ms ease-in;\n    }\n',
                      ),
                    ),
                    m(
                      'div',
                      { className: 'mb4' },
                      m(
                        'a',
                        {
                          onClick: this.goToFirst,
                          className: 'f6 dib mr3 pointer nl2 pv2 hover-black ph3-ns ph2 br-pill '.concat(
                            0 === this.state.activeIndex ? 'o-90 bg-white' : 'o-40',
                          ),
                        },
                        e[0].title,
                      ),
                      m(
                        'a',
                        {
                          onClick: this.goToMiddle,
                          className: 'f6 dib mr3 pointer nl2 pv2 hover-black ph3-ns ph2 br-pill '.concat(
                            1 === this.state.activeIndex ? 'o-90 bg-white' : 'o-40',
                          ),
                        },
                        e[1].title,
                      ),
                      m(
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
                    m(
                      'div',
                      { className: 'items-center h-full mt5 absolute absolute--fill flex' },
                      m(
                        'a',
                        {
                          onClick: this.onClickPrev,
                          className:
                            'br-100 left-0 nl5 absolute  shadow shadow-1-on-hover pointer fl dib-l dn bg-white h2 items-center flex-l ph2',
                        },
                        m('img', { className: 'h1 w1 o-50 glow ', src: '../../static/icons/prev.svg' }),
                      ),
                      m(
                        'a',
                        {
                          onClick: this.onClickNext,
                          className:
                            'br-100 right-0 nr5 absolute shadow shadow-1-on-hover pointer fr dib-l dn bg-white h2 items-center flex-l ph2',
                        },
                        m('img', { className: 'h1 w1 o-50 glow ', src: '../../static/icons/next-b.svg' }),
                      ),
                    ),
                    m(
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
      var a = n('SqZg'),
        i = n.n(a),
        r = n('TRZx'),
        o = n.n(r)
      function s(e, t) {
        return (s =
          o.a ||
          function (e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      function l(e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function')
        ;(e.prototype = i()(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
          t && s(e, t)
      }
      n.d(t, 'a', function () {
        return l
      })
    },
    UnXY: function (e, t, n) {
      'use strict'
      t.__esModule = !0
      var a =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
            }
            return e
          },
        i = l(n('Qrca')),
        r = l(n('q1tI')),
        o = l(n('17x9')),
        s = (l(n('6DQo')), n('8PcY'))
      function l(e) {
        return e && e.__esModule ? e : { default: e }
      }
      o.default.any, o.default.func, o.default.node
      var c = (function (e) {
        function t(n, i) {
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t)
          var r = (function (e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            return !t || ('object' !== typeof t && 'function' !== typeof t) ? e : t
          })(this, e.call(this, n, i))
          return (
            (r.performAppear = function (e, t) {
              ;(r.currentlyTransitioningKeys[e] = !0),
                t.componentWillAppear
                  ? t.componentWillAppear(r._handleDoneAppearing.bind(r, e, t))
                  : r._handleDoneAppearing(e, t)
            }),
            (r._handleDoneAppearing = function (e, t) {
              t.componentDidAppear && t.componentDidAppear(), delete r.currentlyTransitioningKeys[e]
              var n = (0, s.getChildMapping)(r.props.children)
              ;(n && n.hasOwnProperty(e)) || r.performLeave(e, t)
            }),
            (r.performEnter = function (e, t) {
              ;(r.currentlyTransitioningKeys[e] = !0),
                t.componentWillEnter
                  ? t.componentWillEnter(r._handleDoneEntering.bind(r, e, t))
                  : r._handleDoneEntering(e, t)
            }),
            (r._handleDoneEntering = function (e, t) {
              t.componentDidEnter && t.componentDidEnter(), delete r.currentlyTransitioningKeys[e]
              var n = (0, s.getChildMapping)(r.props.children)
              ;(n && n.hasOwnProperty(e)) || r.performLeave(e, t)
            }),
            (r.performLeave = function (e, t) {
              ;(r.currentlyTransitioningKeys[e] = !0),
                t.componentWillLeave
                  ? t.componentWillLeave(r._handleDoneLeaving.bind(r, e, t))
                  : r._handleDoneLeaving(e, t)
            }),
            (r._handleDoneLeaving = function (e, t) {
              t.componentDidLeave && t.componentDidLeave(), delete r.currentlyTransitioningKeys[e]
              var n = (0, s.getChildMapping)(r.props.children)
              n && n.hasOwnProperty(e)
                ? r.keysToEnter.push(e)
                : r.setState(function (t) {
                    var n = a({}, t.children)
                    return delete n[e], { children: n }
                  })
            }),
            (r.childRefs = Object.create(null)),
            (r.state = { children: (0, s.getChildMapping)(n.children) }),
            r
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
            for (var a in (this.setState({ children: (0, s.mergeChildMappings)(n, t) }), t)) {
              var i = n && n.hasOwnProperty(a)
              !t[a] || i || this.currentlyTransitioningKeys[a] || this.keysToEnter.push(a)
            }
            for (var r in n) {
              var o = t && t.hasOwnProperty(r)
              !n[r] || o || this.currentlyTransitioningKeys[r] || this.keysToLeave.push(r)
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
                var a = e.state.children[n]
                if (a) {
                  var o = 'string' !== typeof a.ref,
                    s = e.props.childFactory(a),
                    l = function (t) {
                      e.childRefs[n] = t
                    }
                  s === a && o && (l = (0, i.default)(a.ref, l)), t.push(r.default.cloneElement(s, { key: n, ref: l }))
                }
              }
            for (var o in this.state.children) n(o)
            var s = a({}, this.props)
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
              r.default.createElement(this.props.component, s, t)
            )
          }),
          t
        )
      })(r.default.Component)
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
      function a(e, t) {
        return e
          .replace(new RegExp('(^|\\s)' + t + '(?:\\s|$)', 'g'), '$1')
          .replace(/\s+/g, ' ')
          .replace(/^\s*|\s*$/g, '')
      }
      e.exports = function (e, t) {
        e.classList
          ? e.classList.remove(t)
          : 'string' === typeof e.className
          ? (e.className = a(e.className, t))
          : e.setAttribute('class', a((e.className && e.className.baseVal) || '', t))
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
      var a = n('Bhuq'),
        i = n.n(a),
        r = n('TRZx'),
        o = n.n(r)
      function s(e) {
        return (s = o.a
          ? i.a
          : function (e) {
              return e.__proto__ || i()(e)
            })(e)
      }
    },
    jC5p: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return f
      })
      var a = n('0iUn'),
        i = n('sLSF'),
        r = n('MI3g'),
        o = n('a7VT'),
        s = n('Tit0'),
        l = n('q1tI'),
        c = n.n(l),
        u = (n('8Kt/'), n('0M+7')),
        p = (n('YFqc'), n('RSoV')),
        d = c.a.createElement,
        f = (function (e) {
          function t() {
            return Object(a.a)(this, t), Object(r.a)(this, Object(o.a)(t).apply(this, arguments))
          }
          return (
            Object(s.a)(t, e),
            Object(i.a)(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.headerInfo
                  return d(
                    'div',
                    { className: 'bg-near-white overflow-hidden lh-title' },
                    d(
                      'div',
                      { className: ''.concat(u.a.limiter) },
                      d(p.a, null),
                      d(
                        'div',
                        { className: 'mt6-l f6 mt5 center cb cf' },
                        d(
                          'div',
                          { className: 'mb4 mt3 w-40-l fl-l fn' },
                          d('div', { className: 'o-80 f5' }, 'Case Study'),
                          d('div', { className: ''.concat(u.a.txtH1) }, e.title),
                          d(
                            'div',
                            { className: 'w-40-m w-100-l fl w-100' },
                            d(
                              'div',
                              { className: 'fl' },
                              d('div', { className: 'mt3 o-50' }, 'My Role'),
                              d('div', { className: 'pt1 ' }, e.role),
                              d('div', { className: 'mt3 o-50' }, 'Release'),
                              d('div', { className: 'pt1 ' }, e.release),
                            ),
                          ),
                          d(
                            'div',
                            { className: 'w-60-m w-100 fl w-100-l' },
                            d('div', { className: 'mt3 o-50' }, 'Team'),
                            e.team.map(function (e, t) {
                              return d(
                                'div',
                                { key: 'role' + t, className: ' pt1' },
                                e.name,
                                ' ',
                                d('span', { className: 'o-40' }, e.title),
                              )
                            }),
                          ),
                        ),
                        e.image,
                      ),
                    ),
                  )
                },
              },
            ]),
            t
          )
        })(c.a.Component)
    },
    kntS: function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('q1tI'),
        i = n.n(a),
        r = n('u223'),
        o = n('jC5p'),
        s = n('DHa6'),
        l = (n('YFqc'), n('0M+7')),
        c = n('Pe6d'),
        u = i.a.createElement,
        p = [
          {
            index: 1,
            title: '',
            content: u(
              'div',
              null,
              u('img', { className: '', src: '../static/img/ns1.png' }),
              u(
                'div',
                { className: ''.concat(l.a.txtSbody, '  ph4-l ph1') },
                'Find the neareast restaurant or hotel and get driving directions there.',
              ),
            ),
          },
          {
            index: 2,
            title: '',
            content: u(
              'div',
              null,
              u('img', { className: '', src: '../static/img/ns2.png' }),
              u(
                'div',
                { className: ''.concat(l.a.txtSbody, ' ph4-l ph1') },
                'Get walking directions based on a travel itinery with multiple stops.',
              ),
            ),
          },
          {
            index: 3,
            title: '',
            content: u(
              'div',
              null,
              u('img', { className: '', src: '../static/img/ns3.png' }),
              u(
                'div',
                { className: ''.concat(l.a.txtSbody, ' ph4-l ph1') },
                'Rerouting based on live traffic and incident reports by other drivers.',
              ),
            ),
          },
        ],
        d = {
          title: 'Navigation SDK',
          role: 'UI & UX Design',
          release: 'May, 2017',
          team: [
            { name: 'Nat Slaughter', title: '(cartographer)' },
            { name: 'Bobby Sudekum', title: '(iOS engineer)' },
            { name: 'Cameron Mace', title: '(Android engineer)' },
            { name: 'Minh Nguy\u1ec5n', title: '(iOS engineer)' },
          ],
          image: u(
            'div',
            null,
            u(
              'div',
              { className: 'w-60-l dn db-l w-100 fl nt4 nb6 mb3' },
              u('img', { style: { width: 430 }, className: 'fr', src: '../static/img/ns_header.png' }),
            ),
          ),
        }
      t.default = function () {
        return u(
          s.a,
          null,
          u(o.a, { headerInfo: d }),
          u(
            'div',
            { className: ''.concat(l.a.limiter, ' ').concat(l.a.columnContainer) },
            u(
              'div',
              { className: ''.concat(l.a.leftColumn) },
              u(
                'div',
                { className: ''.concat(l.a.txtBody, ' mb3') },
                'Mapbox Navigation SDK is a product we released earlier this year available on both iOS and Android. It provides a simple, customizable framework for developers to add turn-by-turn navigation to their application. For this project, I was tasked to collaborate closely with the cartography, iOS and Android engineer team to create a customizable design system for the SDK.',
              ),
              u(
                'div',
                { className: ''.concat(l.a.txtBody) },
                "In addition to the mobile UI, I also designed a landing page and a marketing package for the sales team to showcase what's possible with the SDK.",
              ),
              u('div', { className: ''.concat(l.a.txtH2, ' f4 mt5') }, 'Styleguide'),
              u(
                'div',
                { className: ''.concat(l.a.txtBody) },
                'I started from creating a simple, easy-to-customize font and color system for the UI.',
              ),
            ),
          ),
          u(
            'div',
            { className: ''.concat(l.a.limiter, ' nt4') },
            u(
              'div',
              { className: 'flex-l center flex-none pb4' },
              u(
                'div',
                { style: { flex: '1 1 50%' }, className: 'mr4-l mb5 mb0-l mr0' },
                u('img', { className: '', src: '../static/img/ns_font.png' }),
              ),
              u(
                'div',
                { style: { flex: '1 1 50%' }, className: 'ml4-l ml0' },
                u('img', { className: '', src: '../static/img/ns_color.png' }),
              ),
            ),
          ),
          u(
            'div',
            { className: 'w-100 bg-near-white pt3' },
            u(
              'div',
              { className: ''.concat(l.a.limiter, ' pv5-l pv4') },
              u(
                'div',
                { className: 'flex-l center flex-none pb4' },
                u(
                  'div',
                  { style: { flex: '1 1 20%' }, className: 'mr3' },
                  u('div', { className: ''.concat(l.a.txtH2, ' f4 mt4') }, 'Direction Icons'),
                  u(
                    'div',
                    { className: ''.concat(l.a.txtBody) },
                    'I mocked up how icons look at different sizes to make sure they are legible in all the contexts.',
                  ),
                ),
                u(
                  'div',
                  { style: { flex: '1 1 80%' }, className: 'ml4-l mt0-l mt4 ml0 nr5-l nr0' },
                  u('img', { className: '', src: '../static/img/icons.png' }),
                ),
              ),
            ),
          ),
          u(
            'div',
            { className: ''.concat(l.a.limiter, ' pv5-l pv4') },
            u(
              'div',
              { className: 'flex-l center flex-none pb4 mt3 tc tl-ns' },
              u(
                'div',
                { style: { flex: '4 1 30%' }, className: 'mr3 pb0-l pb4' },
                u('div', { className: ''.concat(l.a.txtH2, ' f4 tl') }, 'Interactions'),
                u(
                  'div',
                  { className: ''.concat(l.a.txtBody, ' pr4-ns pr0 tl') },
                  'Framer prototypes helped better communicate interaction details like sound toggle, menu drawer and route list view.',
                ),
              ),
              u(
                'div',
                {
                  style: { flex: '0 1 200px', borderRadius: '2rem', width: '200px' },
                  className: 'dib shadow br-full ba bw1 b--light-gray pt4 ph2 pb4 mr4-ns mr0 mb4 mb0-l',
                },
                u('img', { className: 'br1 ba b--black-10 mb3 mt2', src: '../static/img/sound.gif' }),
              ),
              u(
                'div',
                {
                  style: { flex: '0 1 200px', borderRadius: '2rem', width: '200px' },
                  className: 'dib shadow br4 ba bw1 b--light-gray pt4 ph2 pb4 mr4-ns mr0 mb4 mb0-l',
                },
                u('img', { className: 'br1 ba b--black-10 mb3 mt2', src: '../static/img/list.gif' }),
              ),
              u(
                'div',
                {
                  style: { flex: '0 1 200px', borderRadius: '2rem', width: '200px' },
                  className: 'dib nr4-ns nr0 shadow br4 ba bw1 b--light-gray pt4 ph2 pb4 mb4 mb0-l',
                },
                u('img', { className: 'br1 ba b--black-10 mb3 mt2', src: '../static/img/scroll.gif' }),
              ),
            ),
          ),
          u(
            'div',
            { className: 'w-100 bg-near-white pt3' },
            u(
              'div',
              { className: ''.concat(l.a.limiter) },
              u('div', { className: ''.concat(l.a.txtH2, ' f4 mt4') }, 'Dark and Light Theme'),
              u(
                'div',
                { className: ''.concat(l.a.txtBody, ' mw7') },
                "The SDK provides two default UI styles, light and dark, that's suitable for daytime and nighttime driving. Our amazing cartographer Nat Slaughter designed those two map styles.",
              ),
              u(
                'div',
                { className: 'flex-ns mt4 center flex-none pb4' },
                u(
                  'div',
                  { style: { flex: '1 1 48%' }, className: 'nl4-ns nl0' },
                  u('img', { className: '', src: '../static/img/ns_light.png' }),
                ),
                u(
                  'div',
                  { style: { flex: '1 1 4%' }, className: 'items-center  justify-center flex' },
                  u('img', { className: 'w3 dn db-ns', src: '../static/img/switch.png' }),
                ),
                u(
                  'div',
                  { style: { flex: '1 1 48%' }, className: ' nr4-ns nr0' },
                  u('img', { className: '', src: '../static/img/ns_dark.png' }),
                ),
              ),
            ),
          ),
          u(
            'div',
            { className: 'overflow-hidden lh-title' },
            u(
              'div',
              { className: ''.concat(l.a.limiter, ' mb6') },
              u(
                'div',
                { className: 'w-30-ns w-100 mr6 pt5 fl' },
                u('div', { className: ''.concat(l.a.txtH2, ' f4 mt4') }, 'Example Apps'),
                u(
                  'div',
                  { className: ''.concat(l.a.txtBody, ' mb2 ph0') },
                  'The SDK allows developers to take control of user\u2019s experience all the way to their final destination. Here are a few scenarios to showcase what the in-app navigation flow looks like and how it can be customized for different use cases.',
                ),
              ),
              u('div', { className: 'w-40-ns w-100 fl' }, u(c.a, { content: p })),
            ),
          ),
          u(r.a, null),
        )
      }
    },
    mMLF: function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/navigation-sdk',
        function () {
          return n('kntS')
        },
      ])
    },
    ohE5: function (e, t, n) {
      'use strict'
      function a(e) {
        return function () {
          return e
        }
      }
      var i = function () {}
      ;(i.thatReturns = a),
        (i.thatReturnsFalse = a(!1)),
        (i.thatReturnsTrue = a(!0)),
        (i.thatReturnsNull = a(null)),
        (i.thatReturnsThis = function () {
          return this
        }),
        (i.thatReturnsArgument = function (e) {
          return e
        }),
        (e.exports = i)
    },
    'q5+k': function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 })
      var a,
        i = n('Bp9Y'),
        r = (a = i) && a.__esModule ? a : { default: a }
      var o,
        s = 'clearTimeout',
        l = function (e) {
          var t = new Date().getTime(),
            n = Math.max(0, 16 - (t - u)),
            a = setTimeout(e, n)
          return (u = t), a
        },
        c = function (e, t) {
          return e + (e ? t[0].toUpperCase() + t.substr(1) : t) + 'AnimationFrame'
        }
      r.default &&
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
      ;((o = function (e) {
        return l(e)
      }).cancel = function (e) {
        window[s] && 'function' === typeof window[s] && window[s](e)
      }),
        (t.default = o),
        (e.exports = t.default)
    },
    sLSF: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return o
      })
      var a = n('hfKm'),
        i = n.n(a)
      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n]
          ;(a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            'value' in a && (a.writable = !0),
            i()(e, a.key, a)
        }
      }
      function o(e, t, n) {
        return t && r(e.prototype, t), n && r(e, n), e
      }
    },
    vYYK: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      var a = n('hfKm'),
        i = n.n(a)
      function r(e, t, n) {
        return t in e ? i()(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e
      }
    },
    xU8c: function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.animationEnd = t.animationDelay = t.animationTiming = t.animationDuration = t.animationName = t.transitionEnd = t.transitionDuration = t.transitionDelay = t.transitionTiming = t.transitionProperty = t.transform = void 0)
      var a,
        i = n('Bp9Y')
      var r = 'transform',
        o = void 0,
        s = void 0,
        l = void 0,
        c = void 0,
        u = void 0,
        p = void 0,
        d = void 0,
        f = void 0,
        m = void 0,
        h = void 0,
        v = void 0
      if (((a = i) && a.__esModule ? a : { default: a }).default) {
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
              a = void 0,
              i = void 0,
              r = '',
              o = 0;
            o < n.length;
            o++
          ) {
            var s = n[o]
            if (s + 'TransitionProperty' in e) {
              ;(r = '-' + s.toLowerCase()), (a = t[s]('TransitionEnd')), (i = t[s]('AnimationEnd'))
              break
            }
          }
          !a && 'transitionProperty' in e && (a = 'transitionend')
          !i && 'animationName' in e && (i = 'animationend')
          return (e = null), { animationEnd: i, transitionEnd: a, prefix: r }
        })()
        ;(o = b.prefix),
          (t.transitionEnd = s = b.transitionEnd),
          (t.animationEnd = l = b.animationEnd),
          (t.transform = r = o + '-' + r),
          (t.transitionProperty = c = o + '-transition-property'),
          (t.transitionDuration = u = o + '-transition-duration'),
          (t.transitionDelay = d = o + '-transition-delay'),
          (t.transitionTiming = p = o + '-transition-timing-function'),
          (t.animationName = f = o + '-animation-name'),
          (t.animationDuration = m = o + '-animation-duration'),
          (t.animationTiming = h = o + '-animation-delay'),
          (t.animationDelay = v = o + '-animation-timing-function')
      }
      ;(t.transform = r),
        (t.transitionProperty = c),
        (t.transitionTiming = p),
        (t.transitionDelay = d),
        (t.transitionDuration = u),
        (t.transitionEnd = s),
        (t.animationName = f),
        (t.animationDuration = m),
        (t.animationTiming = h),
        (t.animationDelay = v),
        (t.animationEnd = l),
        (t.default = { transform: r, end: s, property: c, timing: p, delay: d, duration: u })
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
      i(n('q1tI'))
      var a = i(n('17x9'))
      function i(e) {
        return e && e.__esModule ? e : { default: e }
      }
      t.nameShape = a.default.oneOfType([
        a.default.string,
        a.default.shape({ enter: a.default.string, leave: a.default.string, active: a.default.string }),
        a.default.shape({
          enter: a.default.string,
          enterActive: a.default.string,
          leave: a.default.string,
          leaveActive: a.default.string,
          appear: a.default.string,
          appearActive: a.default.string,
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
            : (0, r.default)(e, t) ||
              ('string' === typeof e.className
                ? (e.className = e.className + ' ' + t)
                : e.setAttribute('class', ((e.className && e.className.baseVal) || '') + ' ' + t))
        })
      var a,
        i = n('yD6e'),
        r = (a = i) && a.__esModule ? a : { default: a }
      e.exports = t.default
    },
    zB99: function (e, t, n) {
      'use strict'
      t.__esModule = !0
      var a =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
            }
            return e
          },
        i = d(n('ycFn')),
        r = d(n('VOcB')),
        o = d(n('q5+k')),
        s = n('xU8c'),
        l = d(n('q1tI')),
        c = d(n('17x9')),
        u = n('i8i4'),
        p = n('xfxO')
      function d(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function f(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !t || ('object' !== typeof t && 'function' !== typeof t) ? e : t
      }
      var m = []
      s.transitionEnd && m.push(s.transitionEnd), s.animationEnd && m.push(s.animationEnd)
      c.default.node,
        p.nameShape.isRequired,
        c.default.bool,
        c.default.bool,
        c.default.bool,
        c.default.number,
        c.default.number,
        c.default.number
      var h = (function (e) {
        function t() {
          var n, a
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t)
          for (var i = arguments.length, r = Array(i), o = 0; o < i; o++) r[o] = arguments[o]
          return (
            (n = a = f(this, e.call.apply(e, [this].concat(r)))),
            (a.componentWillAppear = function (e) {
              a.props.appear ? a.transition('appear', e, a.props.appearTimeout) : e()
            }),
            (a.componentWillEnter = function (e) {
              a.props.enter ? a.transition('enter', e, a.props.enterTimeout) : e()
            }),
            (a.componentWillLeave = function (e) {
              a.props.leave ? a.transition('leave', e, a.props.leaveTimeout) : e()
            }),
            f(a, n)
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
            var a = (0, u.findDOMNode)(this)
            if (a) {
              var o = this.props.name[e] || this.props.name + '-' + e,
                l = this.props.name[e + 'Active'] || o + '-active',
                c = null,
                p = void 0
              ;(0, i.default)(a, o), this.queueClassAndNode(l, a)
              var d = function (e) {
                ;(e && e.target !== a) ||
                  (clearTimeout(c), p && p(), (0, r.default)(a, o), (0, r.default)(a, l), p && p(), t && t())
              }
              n
                ? ((c = setTimeout(d, n)), this.transitionTimeouts.push(c))
                : s.transitionEnd &&
                  (p = (function (e, t) {
                    return (
                      m.length
                        ? m.forEach(function (n) {
                            return e.addEventListener(n, t, !1)
                          })
                        : setTimeout(t, 0),
                      function () {
                        m.length &&
                          m.forEach(function (n) {
                            return e.removeEventListener(n, t, !1)
                          })
                      }
                    )
                  })(a, d))
            } else t && t()
          }),
          (t.prototype.queueClassAndNode = function (e, t) {
            var n = this
            this.classNameAndNodeQueue.push({ className: e, node: t }),
              this.rafHandle ||
                (this.rafHandle = (0, o.default)(function () {
                  return n.flushClassNameAndNodeQueue()
                }))
          }),
          (t.prototype.flushClassNameAndNodeQueue = function () {
            this.unmounted ||
              this.classNameAndNodeQueue.forEach(function (e) {
                e.node.scrollTop, (0, i.default)(e.node, e.className)
              }),
              (this.classNameAndNodeQueue.length = 0),
              (this.rafHandle = null)
          }),
          (t.prototype.render = function () {
            var e = a({}, this.props)
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
  [['mMLF', 1, 0]],
])
