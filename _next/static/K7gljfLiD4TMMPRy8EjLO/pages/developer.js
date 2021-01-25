;(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
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
        i = l(n('q1tI')),
        o = l(n('17x9')),
        r = l(n('UnXY')),
        s = l(n('zB99')),
        c = n('xfxO')
      function l(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function u(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !t || ('object' !== typeof t && 'function' !== typeof t) ? e : t
      }
      c.nameShape.isRequired,
        o.default.bool,
        o.default.bool,
        o.default.bool,
        (0, c.transitionTimeout)('Appear'),
        (0, c.transitionTimeout)('Enter'),
        (0, c.transitionTimeout)('Leave')
      var p = (function (e) {
        function t() {
          var n, a
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t)
          for (var o = arguments.length, r = Array(o), c = 0; c < o; c++) r[c] = arguments[c]
          return (
            (n = a = u(this, e.call.apply(e, [this].concat(r)))),
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
            return i.default.createElement(r.default, a({}, this.props, { childFactory: this._wrapChild }))
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
        o = n('WbBG')
      e.exports = function () {
        function e(e, t, n, a, r, s) {
          s !== o &&
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
      var a = o(n('+eFp')),
        i = o(n('UnXY'))
      function o(e) {
        return e && e.__esModule ? e : { default: e }
      }
      e.exports = { TransitionGroup: i.default, CSSTransitionGroup: a.default }
    },
    '2NuI': function (e, t, n) {
      'use strict'
      var a = function (e) {}
      e.exports = function (e, t, n, i, o, r, s, c) {
        if ((a(t), !e)) {
          var l
          if (void 0 === t)
            l = new Error(
              'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.',
            )
          else {
            var u = [n, i, o, r, s, c],
              p = 0
            ;(l = new Error(
              t.replace(/%s/g, function () {
                return u[p++]
              }),
            )).name = 'Invariant Violation'
          }
          throw ((l.framesToPop = 1), l)
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
          for (var o in e) t.hasOwnProperty(o) ? i.length && ((a[o] = i), (i = [])) : i.push(o)
          var r = void 0,
            s = {}
          for (var c in t) {
            if (a.hasOwnProperty(c))
              for (r = 0; r < a[c].length; r++) {
                var l = a[c][r]
                s[a[c][r]] = n(l)
              }
            s[c] = n(c)
          }
          for (r = 0; r < i.length; r++) s[i[r]] = n(i[r])
          return s
        })
      var a = n('q1tI')
    },
    '9bpi': function (e, t, n) {
      'use strict'
      n.r(t)
      var a = n('q1tI'),
        i = n.n(a),
        o = (n('ZHh6'), n('RSoV')),
        r = n('Pe6d'),
        s = (n('YFqc'), n('DHa6')),
        c = n('0M+7'),
        l = (n('rAQz'), n('u223')),
        u = n('0iUn'),
        p = n('sLSF'),
        d = n('MI3g'),
        m = n('a7VT'),
        f = n('Tit0'),
        h = n('vYYK'),
        v = n('8Kt/'),
        g = n.n(v),
        b = i.a.createElement,
        y = (function (e) {
          function t(e) {
            return Object(u.a)(this, t), Object(d.a)(this, Object(m.a)(t).call(this, e))
          }
          return (
            Object(f.a)(t, e),
            Object(p.a)(t, [
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = (this.props.singleImageWidth, this.props.containerContent.length, this.props.id)
                  return b(
                    'div',
                    null,
                    b(
                      g.a,
                      null,
                      b(
                        'style',
                        null,
                        '\n            .'.concat(
                          t,
                          '-scroll-container { \n              scroll-snap-type: x mandatory;\n            }\n            .scroll-item {\n                min-width: 100%;\n\n            }\n            @media screen and (min-width: 30em){\n              .scroll-item {\n                min-width: 86%;\n              }\n            }\n            @media screen and (min-width: 60em){\n              .scroll-item {\n                min-width: 800px;\n              }\n            }\n          ',
                        ),
                      ),
                    ),
                    b(
                      'div',
                      { className: 'bg-near-white pt4 pb5 mt4 overflow-hidden' },
                      b(
                        'div',
                        { className: 'mw-limiter pv4 ph6-l ph4 center cf' },
                        b('div', { className: ''.concat(c.a.txtH3) }, this.props.title),
                        b('div', { className: ''.concat(c.a.txtSbody, ' mt1 mb2') }, this.props.subtitle),
                      ),
                      b(
                        'div',
                        { className: 'w-100' },
                        b(
                          'div',
                          {
                            className: 'flex overflow-y-hidden overflow-x items-top '.concat(
                              t,
                              '-scroll-container pl6-l ph4',
                            ),
                          },
                          this.props.containerContent.map(function (t, n) {
                            return b(
                              'div',
                              {
                                style: { scrollSnapAlign: 'center' },
                                className: 'pr4 mb3 scroll-item',
                                key: e.props.id + n,
                              },
                              b('img', { className: 'w-100 ', src: t[0] }),
                              b('div', { className: ''.concat(c.a.txtSbody, ' mt2') }, t[1]),
                            )
                          }),
                        ),
                      ),
                    ),
                  )
                },
              },
            ]),
            t
          )
        })(a.Component)
      Object(h.a)(y, 'defaultPros', { title: '', subtitle: '', singleImageWidth: 900 })
      var w = y,
        N = i.a.createElement,
        x = [
          { index: 1, title: '1', content: N('img', { className: 'shadow br3', src: '../static/img/signup_1.png' }) },
          { index: 2, title: '2', content: N('img', { className: 'shadow br3', src: '../static/img/signup_2.png' }) },
          { index: 3, title: '3', content: N('img', { className: 'shadow br3', src: '../static/img/signup_3.png' }) },
        ],
        T = [
          ['../static/img/install_1.png', '1. Select a paltform'],
          ['../static/img/install_2.png', '2. Set up the dev enviroment'],
          ['../static/img/install_3.png', '3. Select a map style'],
          ['../static/img/install_4.png', '4. Complete and explore more examples'],
          ['../static/img/install_studio.png', '5. Analyze API usage from the dashboard'],
          ['../static/img/install_explore.png', '6. Explore other Mapbox products'],
        ],
        _ = [
          [
            '../static/img/help_home.png',
            'On home page, better search results formatting. Clear separation of categories.',
          ],
          ['../static/img/help_tutorial.png', 'Group tutorials based on language and difficulty levels.'],
          ['../static/img/help_guide.png', 'Organize step-by-step guides based on three main user groups.'],
        ],
        O = [
          ['../static/img/doc_developer.png', 'Developer home page.'],
          ['../static/img/doc_ios.png', 'iOS SDK documentation'],
          ['../static/img/doc_unity.png', 'Unity SDK documentation'],
        ]
      t.default = function () {
        return N(
          s.a,
          null,
          N(
            'div',
            { className: ''.concat(c.a.limiter) },
            N(o.a, null),
            N(
              'div',
              { className: 'cf mt5  w-80-ns w-100 ' },
              N('div', { className: 'f5 o-50 mb2 ' }, 'Case Study'),
              N('div', { className: ''.concat(c.a.txtH1, ' nl1') }, 'Developer Experience'),
              N(
                'div',
                { className: ''.concat(c.a.txtIntro) },
                "In December, 2016, we started an overhaul of our entire developer experience, from onboarding flow to the documentation system. The primary goal is to increase SDK activations and create a more engaging experience for developers across all the platforms. I had the opportunity to collaborate with many different teams at Mapbox, from support to business. Here is an overview of three individual projects that's part of this endeavor:",
              ),
            ),
          ),
          N(
            'div',
            { className: ''.concat(c.a.limiter) },
            N(
              'div',
              { className: 'cf pt5 bt b--black-20 w-80-ns w-100 ' },
              N('div', { className: ''.concat(c.a.txtH2, ' mb4') }, '1. Developer Onboarding'),
              N(
                'div',
                { className: 'cf f6 mb4' },
                N(
                  'div',
                  { className: 'w-50-l w-100 fl' },
                  N('div', { className: ''.concat('mt3 o-50') }, 'My Role'),
                  N('div', { className: 'pt1 ' }, 'UI'),
                  N('div', { className: ''.concat('mt3 o-50') }, 'Team'),
                  N(
                    'div',
                    { className: 'pt1' },
                    'Tom MacWright ',
                    N('span', { className: 'o-40' }, '(UX & engineering)'),
                  ),
                  N(
                    'div',
                    { className: 'pt1' },
                    'Saman Bemel-Benrud',
                    ' ',
                    N('span', { className: 'o-40' }, ' (UI & engineering)'),
                  ),
                  N('div', { className: 'pt1' }, 'David Clark ', N('span', { className: 'o-40' }, '(engineering)')),
                ),
                N(
                  'div',
                  { className: 'fl w-50-l w-100' },
                  N('div', { className: ''.concat('mt3 o-50') }, 'Release Date'),
                  N('div', { className: 'pt1 ' }, 'March, 2017'),
                  N(
                    'a',
                    { href: 'https://www.mapbox.com/install/', className: 'mt3 db link dim blue' },
                    ' ',
                    'View this live',
                    ' ',
                    N('img', { className: 'v-mid h1', src: '../static/icons/next.svg' }),
                  ),
                ),
              ),
              N(
                'div',
                { className: ''.concat(c.a.txtBody) },
                'Mapbox enables developers to control the entire experience of their applications, from the visual design of the map style to interactive features like spatial analysis and turn-by-turn navigation. Making the entire integration experience seamless is crucial to the success of our products.',
              ),
            ),
          ),
          N(w, {
            id: 'onboarding-flow',
            singleImageWidth: 900,
            title: 'Developer Onboarding flow',
            subtitle: 'Initial wireframes of steps users need to go through to install Mapbox SDK.',
            containerContent: T,
          }),
          N(
            'div',
            { className: ''.concat(c.a.limiter) },
            N(
              'div',
              { className: 'cf mt5  w-80-ns w-100 ' },
              N(
                'div',
                { className: ''.concat(c.a.txtBody, ' mb3') },
                'In early days, the onboarding flow focused heavily on professional GIS users and cartographers. As the product focus shifts to be more developer-oriented, we needed a method to help people start building and tinkering right away.',
              ),
              N(
                'div',
                { className: ''.concat(c.a.txtBody, ' mb3') },
                'For the new on-boarding flow we focused on a very simple task: adding a basic map view. After the install flow, we guide users to more complicated examples. A discovery through user interviews is that code examples, not documentations, are a primary source of how people get started with Mapbox tools.',
              ),
              N(
                'div',
                { className: ''.concat(c.a.txtBody, ' mb3') },
                "After the launch we've seen an increase in new account activations, mobile SDK adoptions, and other metrics. Platform separation also allows us to collect more accurate persona information for targeted marketing campaigns. The open/click-through rate of our on-boarding emails increased significanltly with an CTA of 30% for Android developers.",
              ),
              N(
                'div',
                { className: 'mt4 mb3' },
                N(r.a, { content: x, height: 'h7' }),
                N('div', { className: ''.concat(c.a.txtH3) }, 'Three versions of the signup page'),
                N(
                  'div',
                  { className: ''.concat(c.a.txtSbody, ' mt1') },
                  'The signup page was the main entry point to the onboarding flow. Each version focuses on a specific selling point of the SDK, including customization, ease of use, and search/navigation features.',
                ),
              ),
            ),
          ),
          N(
            'div',
            { className: ''.concat(c.a.limiter) },
            N(
              'div',
              { className: 'cf pt5 bt b--black-20 w-80-ns w-100 ' },
              N('div', { className: ''.concat(c.a.txtH2, ' mb4') }, '2. Help Redesign'),
              N(
                'div',
                { className: 'cf f6 mb2' },
                N(
                  'div',
                  { className: 'w-50-l fl' },
                  N('div', { className: ''.concat('mt3 o-50') }, 'My Role'),
                  N('div', { className: 'pt1 ' }, 'UI'),
                  N('div', { className: ''.concat('mt3 o-50') }, 'Team'),
                  N('div', { className: 'pt1' }, 'Katy Deborah ', N('span', { className: 'o-40' }, '(engineering)')),
                  N(
                    'div',
                    { className: 'pt1' },
                    'Colleen Mcginnis ',
                    N('span', { className: 'o-40' }, '(UX & engineering)'),
                  ),
                ),
                N(
                  'div',
                  { className: 'fl w-50' },
                  N('div', { className: ''.concat('mt3 o-50') }, 'Release Date'),
                  N('div', { className: 'f6 pt1 ' }, 'July, 2017'),
                  N(
                    'a',
                    { href: 'https://www.mapbox.com/help/', className: 'mt3 db link dim blue f6' },
                    ' ',
                    'View this live',
                    ' ',
                    N('img', { className: 'v-mid h1', src: '../static/icons/next.svg' }),
                  ),
                ),
              ),
            ),
          ),
          N(w, { id: 'help-redesign', singleImageWidth: 900, title: 'Help Redesign Wireframes', containerContent: _ }),
          N(
            'div',
            { className: ''.concat(c.a.limiter) },
            N(
              'div',
              { className: 'cf mt4  w-80-ns w-100 ' },
              N(
                'div',
                { className: ''.concat(c.a.txtBody, ' mb3') },
                'Mapbox has an incredibly complicated product system. It allows people to build powerful things, but it can also be a bit daunting to learn it at first. Our amazing support team has produced hundreds of narrative guides and step-by-step tutorials. But it can be challenging to navigate those content sometimes. Our help page at some point simply became an index page containing hundreds of links. Two questions we asked ourselves at the beginning of this project are: How can we help users find the content? How can make the existing content shine?',
              ),
              N(
                'div',
                { className: ''.concat(c.a.quote) },
                'How can we help users find the content? How can make the existing content shine?',
              ),
              N('img', { className: 'w-100 mb4', src: '../static/img/help_single.png' }),
              N(
                'div',
                { className: ''.concat(c.a.txtBody, ' mb3') },
                'One significant improvement of the redesign is definitely better search and navigation. We color-coded articles that belong to different categories and show those tags in the results listing. Moreover, the search input and the dropdown navigation are visible throughout the entire site. No matter which page the user is browsing, they will be able to find the information they are looking for. The article page is redesigned with better typography to help users focus on the content. Small details like floating sidebards makes links to related context more visible.',
              ),
              N(
                'div',
                { className: ' pr7-l pr0 br3 mt5 mb4' },
                N('img', { src: '../static/img/help_illustration.png' }),
                N('div', { className: ''.concat(c.a.txtH3, ' mt3') }, 'Guide page illustrations'),
                N(
                  'div',
                  { className: ''.concat(c.a.txtSbody, ' ') },
                  'Illustrations I created to help explain concepts and make the page more friendly.',
                ),
              ),
            ),
          ),
          N(
            'div',
            { className: ''.concat(c.a.limiter) },
            N(
              'div',
              { className: 'cf pt5 bt b--black-20 w-80-ns w-100 ' },
              N('div', { className: ''.concat(c.a.txtH2, ' mb4') }, '3. Documentation system'),
              N(
                'div',
                { className: 'cf mb2' },
                N(
                  'div',
                  { className: 'w-50-l f6 fl' },
                  N('div', { className: ''.concat('mt3 o-50') }, 'My Role'),
                  N('div', { className: 'pt1 ' }, 'UI & UX'),
                  N('div', { className: ''.concat('mt3 o-50') }, 'Team'),
                  N('div', { className: 'pt1' }, 'Nadia Barbosa ', N('span', { className: 'o-40' }, ' (iOS)')),
                  N('div', { className: 'pt1' }, 'Cameron Mace ', N('span', { className: 'o-40' }, ' (Android)')),
                  N('div', { className: 'pt1' }, 'Dan Swick ', N('span', { className: 'o-40' }, ' (Unity)')),
                ),
                N(
                  'div',
                  { className: 'fl w-50' },
                  N('div', { className: ''.concat('mt3 o-50') }, 'Release Date'),
                  N('div', { className: 'f6 pt1' }, 'Work in progress'),
                  N(
                    'a',
                    { href: 'https://www.mapbox.com/unity-sdk/', className: 'mt3 db link dim blue f6' },
                    ' ',
                    'View this live',
                    ' ',
                    N('img', { className: 'v-mid h1', src: '../static/icons/next.svg' }),
                  ),
                ),
              ),
            ),
          ),
          N(w, {
            id: 'doc-system',
            singleImageWidth: 900,
            title: 'Documentation System',
            subtitle:
              'Documentation system consists of a main developer page and documentation pages for different SDKs.',
            containerContent: O,
          }),
          N(
            'div',
            { className: ''.concat(c.a.limiter) },
            N(
              'div',
              { className: 'cf mt5  w-80-ns w-100 ' },
              N(
                'div',
                { className: ''.concat(c.a.txtBody, ' mb3') },
                'Documentation is the most crucial part of our developer experience. In the past, the technical documentation is managed separately by individual teams, with very different visual and content styles. Sometimes users were confused by the lack of consistency when they try to use more than one building block or develop on multiple platforms. We realized that the separation of teams should not be reflected in our documentation system. And the organizational structure should not prevent us from providing a cohesive product experience for our users.',
              ),
              N(
                'div',
                { className: ''.concat(c.a.txtBody, ' mb4') },
                'Standardization offers us a unique opportunity to rethink the content architecture and visual design. One unique challenge for Mapbox is it has a complex product structure. There are usually multiple SDKs for each platform and not all platform has the same features. To reduce the complexity, we allow users to pick a platform first before diving deeper into what they can build. We also created a few page templates page with reusable components such as top menu, left navigation, and sidenotes to ensure visual consistency.',
              ),
              N(
                'div',
                { className: 'bg-near-white pv4 ph4 br3' },
                N('img', { className: '', src: '../static/img/doc_nav.png' }),
              ),
              N('div', { className: ''.concat(c.a.txtH3, ' mt3 ') }, 'Two-level navigation system for documentation'),
              N(
                'div',
                { className: ''.concat(c.a.txtSbody, ' mb5') },
                'Allow users to pick a platfrom fisrt before diving into specific building blocks.',
              ),
              N(
                'div',
                { className: 'bg-near-white pv4 ph4 br3' },
                N('img', { className: '', src: '../static/img/doc_sidebar.png' }),
              ),
              N('div', { className: ''.concat(c.a.txtH3, ' mt3') }, 'Nested navigation component'),
              N(
                'div',
                { className: ''.concat(c.a.txtSbody, '  mb3') },
                "A reusable navigation component that's being used across all SDK pages.",
              ),
            ),
          ),
          N(l.a, null),
        )
      }
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
    F0jf: function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/developer',
        function () {
          return n('9bpi')
        },
      ])
    },
    MI3g: function (e, t, n) {
      'use strict'
      var a = n('XVgq'),
        i = n.n(a),
        o = n('Z7t5'),
        r = n.n(o)
      function s(e) {
        return (s =
          'function' === typeof r.a && 'symbol' === typeof i.a
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e && 'function' === typeof r.a && e.constructor === r.a && e !== r.a.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      function c(e) {
        return (c =
          'function' === typeof r.a && 'symbol' === s(i.a)
            ? function (e) {
                return s(e)
              }
            : function (e) {
                return e && 'function' === typeof r.a && e.constructor === r.a && e !== r.a.prototype ? 'symbol' : s(e)
              })(e)
      }
      var l = n('AT/M')
      function u(e, t) {
        return !t || ('object' !== c(t) && 'function' !== typeof t) ? Object(l.a)(e) : t
      }
      n.d(t, 'a', function () {
        return u
      })
    },
    Pe6d: function (e, t, n) {
      'use strict'
      var a = n('0iUn'),
        i = n('sLSF'),
        o = n('MI3g'),
        r = n('a7VT'),
        s = n('AT/M'),
        c = n('Tit0'),
        l = n('vYYK'),
        u = n('q1tI'),
        p = n.n(u),
        d = (n('1w3K'), n('8Kt/')),
        m = n.n(d),
        f = p.a.createElement,
        h = (function (e) {
          function t(e) {
            var n
            return (
              Object(a.a)(this, t),
              (n = Object(o.a)(this, Object(r.a)(t).call(this, e))),
              Object(l.a)(Object(s.a)(n), 'onClickNext', function () {
                n.setState({ activeIndex: 2 === n.state.activeIndex ? 0 : n.state.activeIndex + 1 })
              }),
              Object(l.a)(Object(s.a)(n), 'onClickPrev', function () {
                n.setState({ activeIndex: 0 === n.state.activeIndex ? 2 : n.state.activeIndex - 1 })
              }),
              Object(l.a)(Object(s.a)(n), 'goToFirst', function () {
                n.setState({ activeIndex: 0 })
              }),
              Object(l.a)(Object(s.a)(n), 'goToLast', function () {
                n.setState({ activeIndex: 2 })
              }),
              Object(l.a)(Object(s.a)(n), 'goToMiddle', function () {
                n.setState({ activeIndex: 1 })
              }),
              (n.state = { activeIndex: 0 }),
              n
            )
          }
          return (
            Object(c.a)(t, e),
            Object(i.a)(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.content
                  return f(
                    'div',
                    { className: 'relative' },
                    f(
                      m.a,
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
      Object(l.a)(h, 'defaultProps', { height: 'h6-l h5 h-auto' }), (t.a = h)
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
        o = n('TRZx'),
        r = n.n(o)
      function s(e, t) {
        return (s =
          r.a ||
          function (e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      function c(e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function')
        ;(e.prototype = i()(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
          t && s(e, t)
      }
      n.d(t, 'a', function () {
        return c
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
        i = c(n('Qrca')),
        o = c(n('q1tI')),
        r = c(n('17x9')),
        s = (c(n('6DQo')), n('8PcY'))
      function c(e) {
        return e && e.__esModule ? e : { default: e }
      }
      r.default.any, r.default.func, r.default.node
      var l = (function (e) {
        function t(n, i) {
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t)
          var o = (function (e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            return !t || ('object' !== typeof t && 'function' !== typeof t) ? e : t
          })(this, e.call(this, n, i))
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
                    var n = a({}, t.children)
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
            for (var a in (this.setState({ children: (0, s.mergeChildMappings)(n, t) }), t)) {
              var i = n && n.hasOwnProperty(a)
              !t[a] || i || this.currentlyTransitioningKeys[a] || this.keysToEnter.push(a)
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
                var a = e.state.children[n]
                if (a) {
                  var r = 'string' !== typeof a.ref,
                    s = e.props.childFactory(a),
                    c = function (t) {
                      e.childRefs[n] = t
                    }
                  s === a && r && (c = (0, i.default)(a.ref, c)), t.push(o.default.cloneElement(s, { key: n, ref: c }))
                }
              }
            for (var r in this.state.children) n(r)
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
              o.default.createElement(this.props.component, s, t)
            )
          }),
          t
        )
      })(o.default.Component)
      ;(l.displayName = 'TransitionGroup'),
        (l.propTypes = {}),
        (l.defaultProps = {
          component: 'span',
          childFactory: function (e) {
            return e
          },
        }),
        (t.default = l),
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
        o = n('TRZx'),
        r = n.n(o)
      function s(e) {
        return (s = r.a
          ? i.a
          : function (e) {
              return e.__proto__ || i()(e)
            })(e)
      }
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
        o = (a = i) && a.__esModule ? a : { default: a }
      var r,
        s = 'clearTimeout',
        c = function (e) {
          var t = new Date().getTime(),
            n = Math.max(0, 16 - (t - u)),
            a = setTimeout(e, n)
          return (u = t), a
        },
        l = function (e, t) {
          return e + (e ? t[0].toUpperCase() + t.substr(1) : t) + 'AnimationFrame'
        }
      o.default &&
        ['', 'webkit', 'moz', 'o', 'ms'].some(function (e) {
          var t = l(e, 'request')
          if (t in window)
            return (
              (s = l(e, 'cancel')),
              (c = function (e) {
                return window[t](e)
              })
            )
        })
      var u = new Date().getTime()
      ;((r = function (e) {
        return c(e)
      }).cancel = function (e) {
        window[s] && 'function' === typeof window[s] && window[s](e)
      }),
        (t.default = r),
        (e.exports = t.default)
    },
    rAQz: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return p
      })
      var a = n('0iUn'),
        i = n('sLSF'),
        o = n('MI3g'),
        r = n('a7VT'),
        s = n('Tit0'),
        c = n('q1tI'),
        l = n.n(c),
        u = l.a.createElement,
        p = (function (e) {
          function t() {
            return Object(a.a)(this, t), Object(o.a)(this, Object(r.a)(t).apply(this, arguments))
          }
          return (
            Object(s.a)(t, e),
            Object(i.a)(t, [
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
        })(l.a.Component)
    },
    sLSF: function (e, t, n) {
      'use strict'
      n.d(t, 'a', function () {
        return r
      })
      var a = n('hfKm'),
        i = n.n(a)
      function o(e, t) {
        for (var n = 0; n < t.length; n++) {
          var a = t[n]
          ;(a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            'value' in a && (a.writable = !0),
            i()(e, a.key, a)
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
      var a = n('hfKm'),
        i = n.n(a)
      function o(e, t, n) {
        return t in e ? i()(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e
      }
    },
    xU8c: function (e, t, n) {
      'use strict'
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.animationEnd = t.animationDelay = t.animationTiming = t.animationDuration = t.animationName = t.transitionEnd = t.transitionDuration = t.transitionDelay = t.transitionTiming = t.transitionProperty = t.transform = void 0)
      var a,
        i = n('Bp9Y')
      var o = 'transform',
        r = void 0,
        s = void 0,
        c = void 0,
        l = void 0,
        u = void 0,
        p = void 0,
        d = void 0,
        m = void 0,
        f = void 0,
        h = void 0,
        v = void 0
      if (((a = i) && a.__esModule ? a : { default: a }).default) {
        var g = (function () {
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
              o = '',
              r = 0;
            r < n.length;
            r++
          ) {
            var s = n[r]
            if (s + 'TransitionProperty' in e) {
              ;(o = '-' + s.toLowerCase()), (a = t[s]('TransitionEnd')), (i = t[s]('AnimationEnd'))
              break
            }
          }
          !a && 'transitionProperty' in e && (a = 'transitionend')
          !i && 'animationName' in e && (i = 'animationend')
          return (e = null), { animationEnd: i, transitionEnd: a, prefix: o }
        })()
        ;(r = g.prefix),
          (t.transitionEnd = s = g.transitionEnd),
          (t.animationEnd = c = g.animationEnd),
          (t.transform = o = r + '-' + o),
          (t.transitionProperty = l = r + '-transition-property'),
          (t.transitionDuration = u = r + '-transition-duration'),
          (t.transitionDelay = d = r + '-transition-delay'),
          (t.transitionTiming = p = r + '-transition-timing-function'),
          (t.animationName = m = r + '-animation-name'),
          (t.animationDuration = f = r + '-animation-duration'),
          (t.animationTiming = h = r + '-animation-delay'),
          (t.animationDelay = v = r + '-animation-timing-function')
      }
      ;(t.transform = o),
        (t.transitionProperty = l),
        (t.transitionTiming = p),
        (t.transitionDelay = d),
        (t.transitionDuration = u),
        (t.transitionEnd = s),
        (t.animationName = m),
        (t.animationDuration = f),
        (t.animationTiming = h),
        (t.animationDelay = v),
        (t.animationEnd = c),
        (t.default = { transform: o, end: s, property: l, timing: p, delay: d, duration: u })
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
            : (0, o.default)(e, t) ||
              ('string' === typeof e.className
                ? (e.className = e.className + ' ' + t)
                : e.setAttribute('class', ((e.className && e.className.baseVal) || '') + ' ' + t))
        })
      var a,
        i = n('yD6e'),
        o = (a = i) && a.__esModule ? a : { default: a }
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
        o = d(n('VOcB')),
        r = d(n('q5+k')),
        s = n('xU8c'),
        c = d(n('q1tI')),
        l = d(n('17x9')),
        u = n('i8i4'),
        p = n('xfxO')
      function d(e) {
        return e && e.__esModule ? e : { default: e }
      }
      function m(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return !t || ('object' !== typeof t && 'function' !== typeof t) ? e : t
      }
      var f = []
      s.transitionEnd && f.push(s.transitionEnd), s.animationEnd && f.push(s.animationEnd)
      l.default.node,
        p.nameShape.isRequired,
        l.default.bool,
        l.default.bool,
        l.default.bool,
        l.default.number,
        l.default.number,
        l.default.number
      var h = (function (e) {
        function t() {
          var n, a
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
          })(this, t)
          for (var i = arguments.length, o = Array(i), r = 0; r < i; r++) o[r] = arguments[r]
          return (
            (n = a = m(this, e.call.apply(e, [this].concat(o)))),
            (a.componentWillAppear = function (e) {
              a.props.appear ? a.transition('appear', e, a.props.appearTimeout) : e()
            }),
            (a.componentWillEnter = function (e) {
              a.props.enter ? a.transition('enter', e, a.props.enterTimeout) : e()
            }),
            (a.componentWillLeave = function (e) {
              a.props.leave ? a.transition('leave', e, a.props.leaveTimeout) : e()
            }),
            m(a, n)
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
              var r = this.props.name[e] || this.props.name + '-' + e,
                c = this.props.name[e + 'Active'] || r + '-active',
                l = null,
                p = void 0
              ;(0, i.default)(a, r), this.queueClassAndNode(c, a)
              var d = function (e) {
                ;(e && e.target !== a) ||
                  (clearTimeout(l), p && p(), (0, o.default)(a, r), (0, o.default)(a, c), p && p(), t && t())
              }
              n
                ? ((l = setTimeout(d, n)), this.transitionTimeouts.push(l))
                : s.transitionEnd &&
                  (p = (function (e, t) {
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
                  })(a, d))
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
              c.default.cloneElement(c.default.Children.only(this.props.children), e)
            )
          }),
          t
        )
      })(c.default.Component)
      ;(h.displayName = 'CSSTransitionGroupChild'), (h.propTypes = {}), (t.default = h), (e.exports = t.default)
    },
  },
  [['F0jf', 1, 0]],
])
