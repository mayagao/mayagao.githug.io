import React from 'react'
import Head from 'next/head'
export default () => (
  <Head>
    <meta charSet="utf-8" />
    <title>Maya Gao</title>
    <meta
      name="description"
      content="Product Designer building developer tools at Stripe. Previously Mapbox, Lonely Planet."
    />
    <meta name="author" content="Maya Gao" />

    <meta property="og:title" content="Maya Gao" />
    <meta
      property="og:description"
      content="Product Designer building developer tools at Stripe. Previously Mapbox, Lonely Planet."
    />

    <meta property="og:image" content="http://mayagao.com/static/img/og_image.png" />
    <meta name="twitter:image" content="http://mayagao.com/static/img/og_image.png" />
    <meta name="twitter:card" content="summary_large_image" />

    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=5, minimum-scale=.25, user-scalable=yes"
    />
    <link rel="stylesheet" href="https://unpkg.com/tachyons@4.6.1/css/tachyons.min.css" />
    <link rel="stylesheet" href="../static/reset.css" />
    <link rel="stylesheet" href="../static/site.css" />
    <link rel="stylesheet" href="../static/agate.css" />
    <link rel="stylesheet" href="../static/home.css" />
    <script
      dangerouslySetInnerHTML={{
        __html: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga'); ga('create', 'UA-48675207-1', 'auto'); ga('send', 'pageview');`,
      }}
    />
  </Head>
)
