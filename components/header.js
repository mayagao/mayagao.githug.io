import React from 'react'
import Head from 'next/head'
export default () => (
    <Head>
      <meta charset="utf-8" />
      <title>Maya Gao</title>
      <meta name="description" content="👋 Hi, I am a product designer living and working in Washington D.C. I enjoy working on tools that can enable and empower people to create new things. Currently I help build software for developers and designers at Mapbox." />
      <meta name="author" content="Maya Gao" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, minimum-scale=.25, user-scalable=yes"/>
      <link rel="stylesheet" href="https://unpkg.com/tachyons@4.6.1/css/tachyons.min.css"/>
      <link rel="stylesheet" href="../static/site.css"/>
      <meta property="og:title" content="Maya Gao" />
      <meta property="og:image" content="../static/og_image.png"/>
      <script dangerouslySetInnerHTML={{__html: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga'); ga('create', 'UA-48675207-1', 'auto'); ga('send', 'pageview');`}} />
    </Head>
)