;(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    '0iUn': function (e, t, a) {
      'use strict'
      function s(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
      }
      a.d(t, 'a', function () {
        return s
      })
    },
    'AT/M': function (e, t, a) {
      'use strict'
      function s(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return e
      }
      a.d(t, 'a', function () {
        return s
      })
    },
    CJ58: function (e, t, a) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/mapbox-studio',
        function () {
          return a('P5ug')
        },
      ])
    },
    MI3g: function (e, t, a) {
      'use strict'
      var s = a('XVgq'),
        i = a.n(s),
        n = a('Z7t5'),
        o = a.n(n)
      function l(e) {
        return (l =
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
      function c(e) {
        return (c =
          'function' === typeof o.a && 'symbol' === l(i.a)
            ? function (e) {
                return l(e)
              }
            : function (e) {
                return e && 'function' === typeof o.a && e.constructor === o.a && e !== o.a.prototype ? 'symbol' : l(e)
              })(e)
      }
      var r = a('AT/M')
      function d(e, t) {
        return !t || ('object' !== c(t) && 'function' !== typeof t) ? Object(r.a)(e) : t
      }
      a.d(t, 'a', function () {
        return d
      })
    },
    P5ug: function (e, t, a) {
      'use strict'
      a.r(t)
      var s = a('q1tI'),
        i = a.n(s),
        n = a('u223'),
        o = a('jC5p'),
        l = a('DHa6'),
        c = a('8Kt/'),
        r = a.n(c),
        d = (a('YFqc'), a('0M+7')),
        m = i.a.createElement,
        u = {
          title: 'Mapbox Studio',
          role: 'UI Design & Dev',
          release: 'November, 2015',
          team: [
            { name: 'Tom MacWright', title: '(design & engineering)' },
            { name: 'Eden Halperin', title: '(design & engineering)' },
            { name: 'Saman Bemel-Benrud', title: '(design & engineering)' },
            { name: 'Scott Andrews', title: '(engineering)' },
            { name: 'Matthew Whittemore', title: '(engineering)' },
          ],
          image: m(
            'div',
            null,
            m(
              'div',
              { className: 'w-60-l dn db-l w-100 fl nt5 mb3' },
              m('img', { style: { minWidth: 925 }, className: '', src: '../static/img/ms_header.png' }),
            ),
            m(
              'div',
              { className: 'w-60-l db dn-l mt4 w-100 fl nb6 nl5-l nl2 mb4' },
              m('img', { style: { minWidth: 660 }, src: '../static/img/home_studio.png' }),
            ),
          ),
        },
        p = [
          {
            imageSource: '../static/img/ms_3.png',
            title: 'Different layer states',
            description: 'Clear, distinguishable states for nested, selected and hidden layers.',
          },
          {
            imageSource: '../static/img/ms_1.png',
            title: 'Property categories',
            description: 'Divide layer properties into four categories to improve visibility.',
          },
          {
            imageSource: '../static/img/ms_2.png',
            title: 'Data source hierarchy',
            description: 'Visual hierarchy between the parent sources and their subset sources.',
          },
        ],
        h = [
          {
            imageSource: '../static/img/ramp_1.png',
            title: 'Ramp graphs',
            description:
              'The large detailed graphs helps users understand how functions work and how values change at various zoom levels. I ended up simplifying the small graphs a lot more to make them look less clickable.',
          },
          {
            imageSource: '../static/img/ms_ramp_edit.png',
            title: 'Editable graph',
            description:
              "Prototyping helped us discover some accuracy intricacies with this interaction, which is why we didn't move forward with it.",
          },
          {
            imageSource: '../static/img/ramp_2.png',
            title: 'Position indicator',
            description:
              'I added a diamond pointer to indicate values at current zoom level. The distinct styles of small graphs help users differentiate between color, enum and number functions at a glance. ',
          },
        ]
      t.default = function () {
        return m(
          l.a,
          null,
          m(r.a, null, m('style', null, '\n      .vertical {\n        width: 0px;\n      }\n    ')),
          m(o.a, { headerInfo: u }),
          m(
            'div',
            { className: ''.concat(d.a.limiter, ' ').concat(d.a.columnContainer) },
            m(
              'div',
              { className: ''.concat(d.a.leftColumn) },
              m(
                'a',
                {
                  href: 'https://www.wired.com/2015/09/mapbox-studio/',
                  className: 'db mb4 relative link light-silver hover-moon-gray',
                },
                m(
                  'div',
                  null,
                  m('img', { style: { width: 100 }, className: 'o-20', src: '../static/img/wired.svg' }),
                  m('div', { className: 'f3 mt2' }, 'A Powerful New Mapmaking Tool Fit for Both Pros and Newbies'),
                ),
              ),
              m(
                'a',
                {
                  href: 'https://medium.com/uber-design/crafting-data-driven-maps-b0835b620554',
                  className: 'db mb4 relative link light-silver hover-moon-gray',
                },
                m(
                  'div',
                  null,
                  m('img', { style: { width: 80 }, className: 'o-20', src: '../static/img/uber.svg' }),
                  m('div', { className: 'f3 mt2' }, 'Mapbox Studio\u200a\u2014\u200aBest in Class Map Style Editor'),
                ),
              ),
              m(
                'div',
                { className: ''.concat(d.a.txtBody, ' mb4') },
                'I started working on Mapbox Studio four months before its public launch. A main focus of the release was the style editor, a professional map design tool. As the first visual designer in the team, I was tasked to create a more cohesive, consistent and friendly visual language for the tool.',
              ),
              m('div', { className: ''.concat(d.a.txtH2) }, 'Style Editor'),
              m(
                'div',
                { className: ''.concat(d.a.txtBody) },
                'The editor provides complete design control over how the map looks. Users can select a map layer, edit data sources, and edit properties such as texture, color and fonts. Retaining flexibility that comes with all those poweful customization options, while designing a UI that feels approachable and learnable was definitely a big challenge.',
              ),
            ),
            m(
              'div',
              { className: ''.concat(d.a.rightColumn) },
              m(
                'div',
                { className: ''.concat(d.a.rightColumnContent) },
                m('img', { style: { width: 179 }, className: 'nl2 dib', src: '../static/img/direct_select.png' }),
                m(
                  'div',
                  { className: ''.concat(d.a.txtNote) },
                  'Powered by the fast, client-side GL renderer, Studio allows users to directly select and edit map layers and view changes instantly.',
                ),
              ),
            ),
          ),
          m(
            'div',
            { className: 'w-100 mt4 bg-mb pv3-l p3 pl4-l pl3 pr2 overflow-hidden' },
            m(
              'div',
              { className: 'pt4 white f6 flex' },
              m(
                'div',
                { style: { width: 1200 }, className: ' self-center center mb0' },
                m('div', null, m('span', { className: 'o-70' }, 'Style Editor Iteration')),
                m(
                  'div',
                  { style: { zIndex: 11111 }, className: 'w-100 none f7 db-l dn nb3 o-50 mt3 cf' },
                  [
                    'Layer list',
                    'Data source panel',
                    'Data source popover',
                    'Layer editing panel',
                    'Property panel',
                  ].map(function (e, t) {
                    return m(
                      'div',
                      { key: t, className: 'w-20 fl relative' },
                      e,
                      m('hr', { className: 'vertical h1 nb1 db absolute ml2 o-70' }),
                    )
                  }),
                ),
              ),
            ),
            m(
              'div',
              { className: 'flex flex-row pb2 overflow-scroll' },
              m('img', {
                style: { width: 1200 },
                className: 'center  db-ns dn self-center',
                src: '../static/img/ms_editor.png',
              }),
              m('img', {
                style: { maxWidth: '230%' },
                className: 'center  db dn-ns self-center',
                src: '../static/img/ms_editor.png',
              }),
            ),
          ),
          m(
            'div',
            { className: 'bg-near-white pv3 lh-copy' },
            m(
              'div',
              { className: ''.concat(d.a.limiter) },
              p.map(function (e, t) {
                return m(
                  'div',
                  { key: 'feature + '.concat(t), className: 'fl pv3 w-100  w-third-ns pr4-ns' },
                  m('img', { style: { width: 280 }, src: e.imageSource }),
                  m('div', { className: ''.concat(d.a.txtH3, ' mt2') }, e.title),
                  m('div', { className: ''.concat(d.a.txtSbody) }, e.description),
                )
              }),
            ),
          ),
          m(
            'div',
            { className: ''.concat(d.a.limiter) },
            m(
              'div',
              { className: ''.concat(d.a.columnContainer) },
              m(
                'div',
                { className: ''.concat(d.a.leftColumn) },
                m('div', { className: ''.concat(d.a.txtH2) }, 'Property Function'),
                m(
                  'div',
                  { className: ''.concat(d.a.txtBody, ' mb3') },
                  'Property functions allows for adjusting values at different',
                  ' ',
                  m('b', null, 'zoom stops'),
                  ". Functions of number, color and enum properties all behave in different ways. For number properties, users can even control how fast the value increases or decreases. It is a powerful feature but also something that's difficult to design and visualize.",
                ),
                m(
                  'div',
                  { className: ''.concat(d.a.quote) },
                  'Priotization and deciding on what to build is always hard. User testing and prototyping helped us better identify problems and manage implementation scopes.',
                ),
                m(
                  'div',
                  { className: ''.concat(d.a.txtBody) },
                  'To help users better understand how property function works, we introduced detailed ramp graphs to indicate precisely how values change at different zoom stops. We also added automatic sorting and other smart validation rules to prevent people',
                  ' ',
                  'from making mistakes. There are many seemingly great ideas that were abandoned along the way, such as making an editable graph. Priotization and deciding on what to build is always hard. User testing and prototyping in code helped us better identify problems and manage scopes.',
                ),
              ),
              m(
                'div',
                { className: ''.concat(d.a.rightColumn) },
                m(
                  'div',
                  { className: ''.concat(d.a.rightColumnContent) },
                  m('img', { style: { width: 154 }, className: 'nl2 dib', src: '../static/img/ramp.png' }),
                  m(
                    'div',
                    { className: ''.concat(d.a.txtNote) },
                    'An example use case of propoerty function: increase the city label size when zooming in.',
                  ),
                ),
              ),
            ),
          ),
          m(
            'div',
            { className: 'bg-near-white ' },
            m(
              'div',
              { className: ''.concat(d.a.limiter) },
              h.map(function (e, t) {
                return m(
                  'div',
                  { key: 'functions + '.concat(t), className: 'w-100 mt3 flex-l flex-none br2 mb3-l mb4' },
                  m(
                    'div',
                    { className: 'pv2 br2 flex-no-shrink ' },
                    m('img', { style: { width: 545 }, className: '', src: e.imageSource }),
                  ),
                  m(
                    'div',
                    { className: 'lh-copy ph4-l mw6 ph0' },
                    m('div', { className: ''.concat(d.a.txtH3, ' mt2') }, e.title),
                    m('div', { className: ''.concat(d.a.txtSbody) }, e.description),
                  ),
                )
              }),
            ),
          ),
          m(
            'div',
            { className: ''.concat(d.a.limiter) },
            m(
              'div',
              { className: ''.concat(d.a.leftColumn, ' mb4 mt4') },
              m('div', { className: ''.concat(d.a.txtH2) }, 'Dashboard'),
              m(
                'div',
                { className: ''.concat(d.a.txtBody) },
                'In addition to being a map design tool, Studio also serves as an online platform that connects all the different Mapbox products, from the data upload and processing pipeline to the developer APIs and SDKs. Users can design maps, manage custom data, analyze API usage, and manage account information, all in one place.',
              ),
            ),
            m(
              'div',
              { className: 'w-100 mt5 flex-l flex-none br2 mb3' },
              m(
                'div',
                { style: { flex: 'auto 1 824px' }, className: '' },
                m('img', { style: { width: 824 }, className: '', src: '../static/img/slide1.png' }),
              ),
              m(
                'div',
                { style: { flex: '1 1 240px' }, className: 'lh-copy flex f7 pl4-l pl0' },
                m(
                  'div',
                  { className: 'self-end mb4-l' },
                  m('div', { className: ''.concat(d.a.txtH3, ' mt3') }, 'Home page'),
                  m(
                    'div',
                    { className: ''.concat(d.a.txtSbody, ' mt2') },
                    'The goal of the home page is to help user navigate and find what they are looking for. We identified three most common tasks: design, develop and data visualization.',
                    ' ',
                  ),
                ),
              ),
            ),
            m(
              'div',
              { className: 'w-100 mt4 flex-l flex-none br2 mb4' },
              m(
                'div',
                { style: { flex: 'auto 1 824px' }, className: '' },
                m('img', { style: { width: 824 }, className: '', src: '../static/img/slide2.png' }),
              ),
              m(
                'div',
                { style: { flex: '1 1 240px' }, className: 'lh-copy flex pl4-l pl0' },
                m(
                  'div',
                  { className: 'self-end f7 mb4-l' },
                  m('div', { className: ''.concat(d.a.txtH3, ' mt3') }, 'Listing pages'),
                  m(
                    'div',
                    { className: ''.concat(d.a.txtSbody, ' mt2') },
                    "The listing pages consist of a left main view with all styles/tilesets in a user's account, and a right sidebar explaining how to use those resources. The left popover shows current data uploads status.",
                    ' ',
                  ),
                ),
              ),
            ),
          ),
          m(
            'div',
            { className: 'w-100 bg-near-white pv4 lh-copy' },
            m(
              'div',
              { className: ''.concat(d.a.limiter) },
              m(
                'div',
                { className: ''.concat(d.a.txtBody, ' mb4') },
                'Modal is another main UI component. The challenge here is explaining abstract concepts in a confined space.',
              ),
              m(
                'div',
                { className: 'flex-l flex-none' },
                m(
                  'div',
                  { style: { flex: '1 1 501px' }, className: 'mr4-l mb4 mb0-l mr0' },
                  m(
                    'div',
                    { className: ' overflow-y-hidden mb2' },
                    m('img', {
                      style: { width: 501 },
                      className: 'shadow',
                      src: '../static/img/ms_modal_create_style.png',
                    }),
                  ),
                  m('div', { className: ''.concat(d.a.txtH3) }, 'New style modal'),
                  m(
                    'div',
                    { className: ''.concat(d.a.txtSbody, ' mw6') },
                    'There are six styles users can choose as a base template for their design. The goal of this modal is to help them make an informed decision on which style to pick based on different needs.',
                    ' ',
                  ),
                ),
                m(
                  'div',
                  { style: { flex: '1 1 397px' }, className: 'ml4-l ml0' },
                  m(
                    'div',
                    { className: 'overflow-y-hidden mb2' },
                    m('img', {
                      style: { width: 397 },
                      className: 'shadow',
                      src: '../static/img/ms_modal_composite.png',
                    }),
                  ),
                  m('div', { className: ''.concat(d.a.txtH3) }, 'Layer composite modal'),
                  m(
                    'div',
                    { className: ''.concat(d.a.txtSbody, ' mw6') },
                    'Composite means combining various data sources for use cases like label collision detection. Here I tried to use illustration to explain the concept a bit better.',
                    ' ',
                  ),
                ),
              ),
            ),
          ),
          m(
            'div',
            { className: ''.concat(d.a.limiter) },
            m(
              'div',
              { className: ''.concat(d.a.columnContainer, ' pb3 cf') },
              m(
                'div',
                { className: ''.concat(d.a.leftColumn) },
                m('div', { className: ''.concat(d.a.txtH2) }, 'What I learned'),
                m(
                  'div',
                  { className: ''.concat(d.a.txtBody, ' mb3') },
                  'Coming to the team at a later stage definitely makes the job more challenging since I have less context about the product history. A big part of what I do at the beginning was just reading through the Github ticket to better understand how decisions were made, since everything, down to every small UI tweaks, are documentated.',
                ),
                m(
                  'div',
                  { className: ''.concat(d.a.quote) },
                  'Using the same tool helps build deeper',
                  ' ',
                  'empathy between designers and engineers. Prototyping in code brings more credibility to my design decisions.',
                ),
                m(
                  'div',
                  { className: ''.concat(d.a.txtBody, ' mb3') },
                  "Open communication becomes especially important when collaborating closely with a engineering team, I've learned to always demonstrate clearly with mockups and prototypes what I am trying to achieve and also gather constant feedbacks from engineers to build consensus. It's also important to document the reason behind every design decision with clarity.",
                ),
                m(
                  'div',
                  { className: ''.concat(d.a.txtBody, ' mb3') },
                  'Using the same tool (Github) to design, develop and communicate really helps build deeper',
                  ' ',
                  'empathy between designers and engineers. In a highly iterative environment, opening a pull request also brings more credibility to the design decisions than static images. It allows me to establish trust and introduce systematic changes merely a few months before the launch.',
                ),
                m(
                  'div',
                  { className: ''.concat(d.a.txtBody) },
                  'Mapbox Studio is free and in active development. You can learn more about the tool',
                  ' ',
                  m('a', { className: ''.concat(d.a.link), href: 'https://www.mapbox.com/mapbox-studio/' }, 'here'),
                  ' ',
                  'and start using it today!',
                ),
              ),
            ),
            m(
              'div',
              { className: 'flex-l flex-none' },
              m(
                'div',
                {
                  style: { background: '#3887BE' },
                  className: 'flex-auto br3 mr2-l mr0 justify-center flex items-center pv5 ph4',
                },
                m('img', { style: { width: 360 }, src: '../static/img/2.svg' }),
              ),
              m(
                'div',
                {
                  style: { background: '#56B881' },
                  className: 'flex-auto br3 ml2-l ml0 mt3 mt0-l justify-center flex items-center pv5 ph4 ',
                },
                m('img', { style: { width: 360 }, src: '../static/img/3.svg' }),
              ),
            ),
            m('div', { className: 'o-60 f7 mt3' }, 'Some illustrations I did for the Studio sign up page.', ' '),
          ),
          m(n.a, null),
        )
      }
    },
    Tit0: function (e, t, a) {
      'use strict'
      var s = a('SqZg'),
        i = a.n(s),
        n = a('TRZx'),
        o = a.n(n)
      function l(e, t) {
        return (l =
          o.a ||
          function (e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      function c(e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function')
        ;(e.prototype = i()(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
          t && l(e, t)
      }
      a.d(t, 'a', function () {
        return c
      })
    },
    a7VT: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return l
      })
      var s = a('Bhuq'),
        i = a.n(s),
        n = a('TRZx'),
        o = a.n(n)
      function l(e) {
        return (l = o.a
          ? i.a
          : function (e) {
              return e.__proto__ || i()(e)
            })(e)
      }
    },
    jC5p: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return p
      })
      var s = a('0iUn'),
        i = a('sLSF'),
        n = a('MI3g'),
        o = a('a7VT'),
        l = a('Tit0'),
        c = a('q1tI'),
        r = a.n(c),
        d = (a('8Kt/'), a('0M+7')),
        m = (a('YFqc'), a('RSoV')),
        u = r.a.createElement,
        p = (function (e) {
          function t() {
            return Object(s.a)(this, t), Object(n.a)(this, Object(o.a)(t).apply(this, arguments))
          }
          return (
            Object(l.a)(t, e),
            Object(i.a)(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.headerInfo
                  return u(
                    'div',
                    { className: 'bg-near-white overflow-hidden lh-title' },
                    u(
                      'div',
                      { className: ''.concat(d.a.limiter) },
                      u(m.a, null),
                      u(
                        'div',
                        { className: 'mt6-l f6 mt5 center cb cf' },
                        u(
                          'div',
                          { className: 'mb4 mt3 w-40-l fl-l fn' },
                          u('div', { className: 'o-80 f5' }, 'Case Study'),
                          u('div', { className: ''.concat(d.a.txtH1) }, e.title),
                          u(
                            'div',
                            { className: 'w-40-m w-100-l fl w-100' },
                            u(
                              'div',
                              { className: 'fl' },
                              u('div', { className: 'mt3 o-50' }, 'My Role'),
                              u('div', { className: 'pt1 ' }, e.role),
                              u('div', { className: 'mt3 o-50' }, 'Release'),
                              u('div', { className: 'pt1 ' }, e.release),
                            ),
                          ),
                          u(
                            'div',
                            { className: 'w-60-m w-100 fl w-100-l' },
                            u('div', { className: 'mt3 o-50' }, 'Team'),
                            e.team.map(function (e, t) {
                              return u(
                                'div',
                                { key: 'role' + t, className: ' pt1' },
                                e.name,
                                ' ',
                                u('span', { className: 'o-40' }, e.title),
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
        })(r.a.Component)
    },
    sLSF: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return o
      })
      var s = a('hfKm'),
        i = a.n(s)
      function n(e, t) {
        for (var a = 0; a < t.length; a++) {
          var s = t[a]
          ;(s.enumerable = s.enumerable || !1),
            (s.configurable = !0),
            'value' in s && (s.writable = !0),
            i()(e, s.key, s)
        }
      }
      function o(e, t, a) {
        return t && n(e.prototype, t), a && n(e, a), e
      }
    },
  },
  [['CJ58', 1, 0]],
])
