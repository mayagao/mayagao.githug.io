;(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    '7DGc': function (e, i, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/index2',
        function () {
          return n('fC+r')
        },
      ])
    },
    'fC+r': function (e, i, n) {
      'use strict'
      n.r(i)
      var t = n('q1tI'),
        a = n.n(t),
        s = n('ZHh6'),
        l = n('RSoV'),
        m = n('u223'),
        c = n('YFqc'),
        d = n.n(c),
        o = n('8Kt/'),
        r = n.n(o),
        p = n('0M+7'),
        h = a.a.createElement,
        g = [
          {
            themeColor: '#8a88cd',
            type: 'UI & UX',
            image: h(
              'div',
              { className: 'mt4-ns mt2 ph4-ns ph0 nb4-ns nb0' },
              h('img', { style: { width: '644px' }, className: 'br3 ', src: 'static/img/home-rk.png' }),
            ),
            title: 'Runkit Rebrand',
            link: '/runkit-brand',
            description: 'A unique, approachable, and recognizable brand system for a developer facing product.',
          },
          {
            themeColor: '#8a88cd',
            type: 'UI & UX',
            image: h(
              'div',
              { className: 'mt4-ns mt2 ph4-ns ph0 nb4-ns nb0' },
              h('img', { style: { width: '717px' }, className: 'br3 shadow', src: 'static/img/signup_3.png' }),
            ),
            title: 'Developer Experience',
            link: '/developer',
            description:
              'Design a seamless, cohesive developer experience across signup onboarding, help guide, and documentation system.',
          },
          {
            themeColor: '#8a88cd',
            type: 'UI & UX, development',
            image: h(
              'div',
              { className: 'mt4-ns mt2 ph4-ns ph0 nb4-ns nb0' },
              h('img', { style: { width: '717px' }, className: '', src: 'static/img/home_studio.png' }),
            ),
            title: 'Mapbox Studio',
            link: '/mapbox-studio',
            description:
              'Retaining flexibility that comes with powerful customization options while designing an interface that feels learnable.',
          },
          {
            themeColor: '#8a88cd',
            type: 'UI & UX',
            image: h(
              'div',
              { className: 'mt4-ns mt2 ph4-ns ph0 nb4-ns nb0' },
              h('img', { style: { width: '717px' }, className: '', src: 'static/img/home_ds.png' }),
            ),
            title: 'Data-driven Styling',
            link: '/data-driven-styling',
            description: 'A fun little experiment of designing for complicated programming expressions.',
          },
          {
            themeColor: '#6b88a6',
            type: 'UI & UX, development',
            image: h(
              'div',
              { className: 'mt4-ns mt2 ph4-ns ph0 nb4-ns nb0' },
              h('img', { style: { width: '717px' }, src: 'static/img/home_data.png' }),
            ),
            title: 'Data Editor',
            link: '/data-editor',
            description: 'Building a fast, simple spatial data editing tool for developers and designers.',
          },
        ]
      i.default = function () {
        return h(
          'div',
          { className: '' },
          h(
            r.a,
            null,
            h(
              'style',
              null,
              '\n\n      @media screen and (min-width: 30em) {\n        .bg-near-white-ns {\n          background: #f4f4f4 !important;\n        }\n      }\n\n    ',
            ),
          ),
          h(s.a, null),
          h('div', { className: '' }, h('div', { className: ''.concat(p.a.limiter) }, h(l.a, null))),
          h(
            'div',
            { className: ''.concat(p.a.limiter, ' nt5') },
            h(
              'div',
              { className: 'f5 mb5 fl w-100 f4 lh-copy' },
              g.map(function (e, i) {
                return h(
                  d.a,
                  { key: i, prefetch: !0, href: e.link },
                  h(
                    'a',
                    { className: 'mb3 hide-child near-black link hover-blue' },
                    h(
                      'div',
                      { className: 'w-100 mt5 flex-l flex-none mb3' },
                      h(
                        'div',
                        {
                          style: { flex: '1 1 70%' },
                          className: 'tc bg-transparent bg-near-white-ns br3 overflow-hidden',
                        },
                        e.image,
                      ),
                      h(
                        'div',
                        { style: { flex: '1 1 30%' }, className: 'lh-copy mt3 mt0-l flex f7 pl4-l pl0' },
                        h(
                          'div',
                          { className: 'self-end' },
                          h('div', { className: 'txt-xl db link lh-title o-100 heading mb2' }, e.title),
                          h('div', { className: ''.concat(p.a.txtBody, ' black') }, e.description),
                          h(
                            'div',
                            { className: 'mt2 db blue f5' },
                            ' ',
                            'Learn more ',
                            h('img', { className: 'v-top child mt1 h1 ', src: '../static/icons/next.svg' }),
                          ),
                        ),
                      ),
                    ),
                  ),
                )
              }),
            ),
          ),
          h(m.a, null),
        )
      }
    },
  },
  [['7DGc', 1, 0]],
])
