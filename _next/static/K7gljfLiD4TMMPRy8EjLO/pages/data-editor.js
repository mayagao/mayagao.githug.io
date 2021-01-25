;(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    '0iUn': function (e, t, a) {
      'use strict'
      function i(e, t) {
        if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
      }
      a.d(t, 'a', function () {
        return i
      })
    },
    'AT/M': function (e, t, a) {
      'use strict'
      function i(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return e
      }
      a.d(t, 'a', function () {
        return i
      })
    },
    MI3g: function (e, t, a) {
      'use strict'
      var i = a('XVgq'),
        s = a.n(i),
        n = a('Z7t5'),
        o = a.n(n)
      function l(e) {
        return (l =
          'function' === typeof o.a && 'symbol' === typeof s.a
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e && 'function' === typeof o.a && e.constructor === o.a && e !== o.a.prototype
                  ? 'symbol'
                  : typeof e
              })(e)
      }
      function r(e) {
        return (r =
          'function' === typeof o.a && 'symbol' === l(s.a)
            ? function (e) {
                return l(e)
              }
            : function (e) {
                return e && 'function' === typeof o.a && e.constructor === o.a && e !== o.a.prototype ? 'symbol' : l(e)
              })(e)
      }
      var c = a('AT/M')
      function m(e, t) {
        return !t || ('object' !== r(t) && 'function' !== typeof t) ? Object(c.a)(e) : t
      }
      a.d(t, 'a', function () {
        return m
      })
    },
    Tit0: function (e, t, a) {
      'use strict'
      var i = a('SqZg'),
        s = a.n(i),
        n = a('TRZx'),
        o = a.n(n)
      function l(e, t) {
        return (l =
          o.a ||
          function (e, t) {
            return (e.__proto__ = t), e
          })(e, t)
      }
      function r(e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError('Super expression must either be null or a function')
        ;(e.prototype = s()(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
          t && l(e, t)
      }
      a.d(t, 'a', function () {
        return r
      })
    },
    W2YW: function (e, t, a) {
      'use strict'
      a.r(t)
      var i = a('q1tI'),
        s = a.n(i),
        n = a('u223'),
        o = a('jC5p'),
        l = a('DHa6'),
        r = (a('YFqc'), a('0M+7')),
        c = s.a.createElement,
        m = {
          title: 'Dataset Editor',
          role: 'UI Design & Dev',
          release: 'August, 2016',
          team: [
            { name: 'Matthew Whittemore', title: '(engineering)' },
            { name: 'Saman Bemel-Benrud', title: '(engineering)' },
            { name: 'David Clark', title: '(engineering)' },
            { name: 'Tom MacWright', title: '(engineering)' },
          ],
          image: c(
            'div',
            null,
            c(
              'div',
              { className: 'w-60-l dn db-l w-100 fl nt5 mb3' },
              c('img', { style: { minWidth: 925 }, className: '', src: '../static/img/de_header.png' }),
            ),
            c(
              'div',
              { className: 'w-60-l db dn-l mt4 w-100 fl nb6 nl5-l nl2 mb4' },
              c('img', { style: { minWidth: 660 }, className: '', src: '../static/img/home_data.png' }),
            ),
          ),
        },
        d = [
          {
            imageSource: '../static/img/de_field.png',
            title: 'Add property',
            description: 'Preview existing fields in the dataset and add all fields with one click.',
          },
          {
            imageSource: '../static/img/de_value.png',
            title: 'Add value',
            description: 'Show existing values for a field and the aiblity to define number or string type.',
          },
          {
            imageSource: '../static/img/de_search.png',
            title: 'Search features',
            description: 'A quick to search for features based on field and value in the map context.',
          },
        ]
      t.default = function () {
        return c(
          l.a,
          null,
          c(o.a, { headerInfo: m }),
          c(
            'div',
            { className: ''.concat(r.a.limiter, ' ').concat(r.a.columnContainer) },
            c(
              'div',
              { className: ''.concat(r.a.leftColumn) },
              c(
                'div',
                { className: ''.concat(r.a.txtBody, ' mb4') },
                'Mapbox Studio dataset editor provides a simple way to create and modify geospatial data. It stores data as GeoJSON files. GeoJSONs are essentially a list of features with coordinates, geometry and property information. Users can draw, import, edit and manage features with the editor. Traditioanl GIS software often has complicated interfaces and requires specialized training to use. We wanted this tool to be accessible to not just GIS professionals, but also designers and developers who want to create data visualizations or need custom data for their apps.',
              ),
              c('div', { className: ''.concat(r.a.txtH2) }, 'The Challenges'),
              c(
                'div',
                { className: ''.concat(r.a.txtBody) },
                "The most difficult part of this project is definitely prioritizing features, deciding which to build for the initial release. We wanted to provide a foundation for more complicated features down the line while maintaining a balance between simplicity and flexibility. A few main design challenges we've identified early on:",
              ),
              c(
                'ol',
                { className: ''.concat(r.a.txtBody, ' mb-list mt4') },
                c(
                  'li',
                  { className: 'pb2' },
                  c('span', { className: 'f5 dib ' }, 'Shared property fields'),
                  '.',
                  ' ',
                  c(
                    'span',
                    { className: '' },
                    "Feautures inside one dataset usually share the same set of property fields. However we don't store such information in GeoJSON files.",
                    ' ',
                  ),
                ),
                c(
                  'li',
                  { className: 'pb2' },
                  c('span', { className: 'f5 dib ' }, 'Search'),
                  c(
                    'span',
                    { className: '' },
                    '. It was difficult to filter the dataset and find specific features.',
                    ' ',
                  ),
                ),
                c(
                  'li',
                  { className: '' },
                  c('span', { className: 'f5 dib ' }, 'Precision'),
                  c(
                    'span',
                    { className: '' },
                    ". Spatial data is precise and we want to give users full control when it's needed.",
                  ),
                  ' ',
                ),
              ),
            ),
          ),
          c(
            'div',
            { className: 'w-100 bg-mb pv3-l white ph4-l ph0 pb3 pb0-l' },
            c(
              'div',
              { className: 'pt4 tc mb4 f6' },
              c('span', { className: 'o-70 pl1' }, 'Dataset Editor Iteration 1'),
            ),
            c(
              'div',
              { className: 'flex mw8 center pb4 overflow-scroll' },
              c(
                'div',
                { style: { flex: '1 0 434px' }, className: 'ml4 ml0-l mr4' },
                c('img', { className: '', src: '../static/img/de1_left.png' }),
                c('div', { className: 'pv2 tl relative f6 o-70 mb4 mb0-ns' }, 'Feature list and property panel'),
              ),
              c(
                'div',
                { style: { flex: '1 0 538px' }, className: '' },
                c('img', { className: 'mr4 mr0-l', src: '../static/img/de1_right.png' }),
                c('div', { className: 'pv2 tl relative f6 o-70 mb0-ns' }, 'Geometry panel and multi-select'),
              ),
            ),
          ),
          c(
            'div',
            { className: ''.concat(r.a.limiter, ' ').concat(r.a.columnContainer) },
            c(
              'div',
              { className: ''.concat(r.a.leftColumn) },
              c('div', { className: 'f5 mt2 mb2' }, 'Iteration 1'),
              c('div', { className: ''.concat(r.a.txtH2) }, 'Multi-select and Feature List'),
              c(
                'div',
                { className: ''.concat(r.a.txtBody, ' mb3') },
                'In early iterations of the data editor, the UI consisted of a feature list on the left, and a map view on the right. In the list every feature needs a unique identifier. This introduces a problem because a concept like "name" does not exist in GeoJSON. Creating such a concept adds significant implementation burden.',
              ),
              c(
                'div',
                { className: ''.concat(r.a.txtBody, ' mb3') },
                'Another problem I tried to tackle here is editing the fields of multiple features at the same time. Similar to "names", the concept of "shared property fields" also don\'t exist in GeoJSON. Every feature can have a list of different property fields.',
              ),
              c(
                'div',
                { className: ''.concat(r.a.txtBody, ' mb3') },
                'The question is if we want to adopt a UI that\'s similar to the GeoJSON structure, or diverge from it more dramatically. We took a step back and did a few user testings. We discovered that "names" don\'t really help people find what they are looking for. They usually associate one feature with multiple properties and its actual location on the map. Tom suggested removing the list design and simplifying the UI to focus on the main tasks: draw, import and edit.',
              ),
            ),
          ),
          c(
            'div',
            { className: 'w-100 bg-mb pv3-l white ph4-l ph2 pb3 pb0-l' },
            c(
              'div',
              { className: 'pt4 tc mb4 f6' },
              c('span', { className: 'o-70 pl1' }, 'Dataset Editor Iteration 2'),
            ),
            c(
              'div',
              { className: 'flex mw8 center pb4 overflow-scroll' },
              c(
                'div',
                { style: { flex: '1 0 533px' }, className: 'ml4 ml0-l mr4' },
                c('img', { className: '', src: '../static/img/de2_left.png' }),
                c('div', { className: 'pv2 tl relative f6 o-70 mb4 mb0-ns' }, 'Property panel and code panel'),
              ),
              c(
                'div',
                { style: { flex: '1 0 359px' }, className: '' },
                c('img', { className: 'mr4 mr0-l', src: '../static/img/de2_right.png' }),
                c(
                  'div',
                  { className: 'pv2 tl relative f6 o-70 mb0-ns' },
                  'A layout variation: display editor inside a popover.',
                ),
              ),
            ),
          ),
          c(
            'div',
            { className: ''.concat(r.a.limiter, ' ').concat(r.a.columnContainer) },
            c(
              'div',
              { className: ''.concat(r.a.leftColumn) },
              c('div', { className: 'f5 mt2 mb2' }, 'Iteration 2'),
              c('div', { className: ''.concat(r.a.txtH2) }, 'Property and Code Editor'),
              c(
                'div',
                { className: ''.concat(r.a.txtBody, ' mb3') },
                'The second major iteration is mostly about simplifying. Without the feature list panel, there\'s a lot more space to directly draw on the map. By removing multi-select, we can focus on refining single feature edit. The "name" concept was completely removed in this iteration. Instead we used geometry type plus coordinates to represent the feature.',
              ),
              c(
                'div',
                { className: ''.concat(r.a.txtBody, ' mb3') },
                'A big feature we added here is the code editor. Users can access it through the ',
                c('code', { className: 'f7' }, 'view source'),
                " tab. This allows for more precise control over the data, especially when people want to copy-paste coordinates. The design also reflects how the data is represented in the API level. It is a good example of how we retain flexibility and show complexity only when it's needed.",
              ),
              c(
                'div',
                { className: ''.concat(r.a.txtBody, ' mb3') },
                'Another main focus of this iteration is the draw interactions. How to start drawing, modify a node of the shape or close a shape? I sketched out some ideas and worked with Matthew to implement them in mapbox-gl-draw, the framework dataset editor uses for this interaction.',
              ),
            ),
            c(
              'div',
              { className: ''.concat(r.a.rightColumn) },
              c(
                'div',
                { className: ''.concat(r.a.rightColumnContent) },
                c('img', { style: { width: 266 }, className: 'pl1 dib', src: '../static/img/de_draw.png' }),
                c('div', { className: 'o-30 mt3  f7 lh-copy' }, 'Draw interactions'),
              ),
            ),
          ),
          c(
            'div',
            { className: 'w-100 bg-mb pv3-l white ph4-l ph2 pb4 pb0-l' },
            c(
              'div',
              { className: 'pt4 tc mb4 f6' },
              c('span', { className: 'o-70 pl1' }, 'Dataset Editor Iteration 3'),
            ),
            c(
              'div',
              { className: 'flex mw8 center pb4 overflow-scroll' },
              c(
                'div',
                { style: { flex: '1 0 500px' }, className: 'ml4 ml0-l mr4' },
                c('img', { className: '', src: '../static/img/de3_left.png' }),
                c('div', { className: 'pv2 tl relative f6 o-70 mb4 mb0-ns' }, 'Property panel'),
              ),
              c(
                'div',
                { style: { flex: '1 0 335px' }, className: '' },
                c('img', { className: 'mr4 mr0-l', src: '../static/img/de3_right.png' }),
                c('div', { className: 'pv2 tl relative f6 o-70 mb0-ns' }, 'Location and feature search.'),
              ),
            ),
          ),
          c(
            'div',
            { className: 'bg-near-white w-100 pv4 lh-copy' },
            c(
              'div',
              { className: ''.concat(r.a.limiter) },
              d.map(function (e, t) {
                return c(
                  'div',
                  { className: 'fl pv3 w-100  w-third-ns pr4-ns' },
                  c('img', { style: { width: 280 }, src: e.imageSource }),
                  c('div', { className: 'f5 mt3' }, e.title),
                  c('div', { className: 'f6 o-60 mt1' }, e.description),
                )
              }),
            ),
          ),
          c(
            'div',
            { className: ''.concat(r.a.limiter) },
            c(
              'div',
              { className: ''.concat(r.a.leftColumn, ' mt4 mb4') },
              c('div', { className: 'f5 mt2 mb2' }, 'Iteration 3'),
              c('div', { className: ''.concat(r.a.txtH2) }, 'Property Editing and Feature Search'),
              c(
                'div',
                { className: ''.concat(r.a.txtBody, ' mb3') },
                'With almost all the basic functionalities in place, we started more aggressively user-testing the tool every week. User testings at this stage helped us identify intricate problems and solve them through minimum UI changes.',
              ),
              c(
                'div',
                { className: ''.concat(r.a.txtBody) },
                'The property values can be a number or string type. This differentiation is important when creating filters for visualization. I added a type toggle next to values that contains number characters only to solve the problem. We also added to a grid of small location preview images to the search UI to help users find features more quickly.',
              ),
            ),
            c(
              'div',
              { className: 'w-100 mt5 flex-l flex-none br2 mb4' },
              c(
                'div',
                { style: { flex: 'auto 1 824px' }, className: '' },
                c('img', { style: { width: 824 }, className: 'br2 shadow nl0', src: '../static/img/de_view.png' }),
              ),
              c(
                'div',
                { style: { flex: '1 1 240px' }, className: 'lh-copy flex pl4-l pl0' },
                c(
                  'div',
                  { className: 'self-end f7 mb4-l mt3 mt0-l' },
                  c('div', { className: ''.concat(r.a.txtH3) }, 'Dataset view page'),
                  c(
                    'div',
                    { className: ''.concat(r.a.txtSbody) },
                    'An overview of the dataset and a starting point for further actions like visualization or development.',
                  ),
                ),
              ),
            ),
          ),
          c(
            'div',
            { className: 'w-100 bg-near-white pv3 lh-copy' },
            c(
              'div',
              { className: ''.concat(r.a.limiter) },
              c(
                'div',
                { className: 'flex-l flex-none items-end' },
                c(
                  'div',
                  { style: { flex: '1 1 500px' }, className: 'mr4-l mr0 mb4 mb0-l' },
                  c(
                    'div',
                    { className: ' overflow-y-hidden' },
                    c('img', { style: { width: 500 }, className: 'shadow', src: '../static/img/de_modal_new.png' }),
                  ),
                  c('div', { className: ''.concat(r.a.txtH3, ' mt2') }, 'New dataset'),
                  c(
                    'div',
                    { className: ''.concat(r.a.txtSbody) },
                    'Create a blank dataset or import from other sources.',
                  ),
                ),
                c(
                  'div',
                  { style: { flex: '1 1 500px' }, className: 'ml4-l ml0' },
                  c(
                    'div',
                    { className: 'overflow-y-hidden' },
                    c('img', { style: { width: 500 }, className: 'shadow', src: '../static/img/de_modal_export.png' }),
                  ),
                  c('div', { className: ''.concat(r.a.txtH3, ' mt2') }, 'Dataset export'),
                  c('div', { className: ''.concat(r.a.txtSbody) }, 'Export to a new tileset or overwrite.'),
                ),
              ),
            ),
          ),
          c(
            'div',
            { className: ''.concat(r.a.limiter) },
            c(
              'div',
              { className: ''.concat(r.a.leftColumn) },
              c('div', { className: ''.concat(r.a.txtH2, ' mt3') }, 'What I learned'),
              c(
                'div',
                { className: ''.concat(r.a.txtBody, ' mb3') },
                "Test early and often. Sometimes the problems are so intricate it's hard to believe their existance without watching another person struggling with it with my own eyes. User testing prevents us from relying too much on what have been done in the past. It helps us focus on designing practical systems that support interactions.",
              ),
              c(
                'div',
                { className: ''.concat(r.a.txtBody, ' mb3') },
                "Design is really a team team effort, especially for a complicated product with many moving parts. In the past I often became frustrated when I could not get other people to like my work. But arguments can often bring in new perspectives. I don't need to agree with all of them but I have to understand them. It's less about winning all the battles, and more about realizing that I can not produce the best work without the people around me.",
              ),
              c(
                'div',
                { className: ''.concat(r.a.txtBody, ' mb4') },
                'Mapbox Studio dataset editor is free and in active development. You can learn more about the tool',
                ' ',
                c('a', { className: ''.concat(r.a.link), href: 'https://www.mapbox.com/mapbox-studio/' }, 'here'),
                ' ',
                'and start using it today!',
              ),
            ),
          ),
          c(n.a, null),
        )
      }
    },
    a7VT: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return l
      })
      var i = a('Bhuq'),
        s = a.n(i),
        n = a('TRZx'),
        o = a.n(n)
      function l(e) {
        return (l = o.a
          ? s.a
          : function (e) {
              return e.__proto__ || s()(e)
            })(e)
      }
    },
    jC5p: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return f
      })
      var i = a('0iUn'),
        s = a('sLSF'),
        n = a('MI3g'),
        o = a('a7VT'),
        l = a('Tit0'),
        r = a('q1tI'),
        c = a.n(r),
        m = (a('8Kt/'), a('0M+7')),
        d = (a('YFqc'), a('RSoV')),
        p = c.a.createElement,
        f = (function (e) {
          function t() {
            return Object(i.a)(this, t), Object(n.a)(this, Object(o.a)(t).apply(this, arguments))
          }
          return (
            Object(l.a)(t, e),
            Object(s.a)(t, [
              {
                key: 'render',
                value: function () {
                  var e = this.props.headerInfo
                  return p(
                    'div',
                    { className: 'bg-near-white overflow-hidden lh-title' },
                    p(
                      'div',
                      { className: ''.concat(m.a.limiter) },
                      p(d.a, null),
                      p(
                        'div',
                        { className: 'mt6-l f6 mt5 center cb cf' },
                        p(
                          'div',
                          { className: 'mb4 mt3 w-40-l fl-l fn' },
                          p('div', { className: 'o-80 f5' }, 'Case Study'),
                          p('div', { className: ''.concat(m.a.txtH1) }, e.title),
                          p(
                            'div',
                            { className: 'w-40-m w-100-l fl w-100' },
                            p(
                              'div',
                              { className: 'fl' },
                              p('div', { className: 'mt3 o-50' }, 'My Role'),
                              p('div', { className: 'pt1 ' }, e.role),
                              p('div', { className: 'mt3 o-50' }, 'Release'),
                              p('div', { className: 'pt1 ' }, e.release),
                            ),
                          ),
                          p(
                            'div',
                            { className: 'w-60-m w-100 fl w-100-l' },
                            p('div', { className: 'mt3 o-50' }, 'Team'),
                            e.team.map(function (e, t) {
                              return p(
                                'div',
                                { key: 'role' + t, className: ' pt1' },
                                e.name,
                                ' ',
                                p('span', { className: 'o-40' }, e.title),
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
    kXG4: function (e, t, a) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/data-editor',
        function () {
          return a('W2YW')
        },
      ])
    },
    sLSF: function (e, t, a) {
      'use strict'
      a.d(t, 'a', function () {
        return o
      })
      var i = a('hfKm'),
        s = a.n(i)
      function n(e, t) {
        for (var a = 0; a < t.length; a++) {
          var i = t[a]
          ;(i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            'value' in i && (i.writable = !0),
            s()(e, i.key, i)
        }
      }
      function o(e, t, a) {
        return t && n(e.prototype, t), a && n(e, a), e
      }
    },
  },
  [['kXG4', 1, 0]],
])
