import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
export default () => (
  <div className=" bg-near-white center mb0 bb bw2 pb5 pt5 black ">
    <div className="mw-limiter center cf ph6-l ph4 ">
      <div className="w-70-l w-100 f5 lh-copy">
      <p className=" o-60">
👋 &nbsp; I am a product designer living and working in Washington D.C. Currently I design and build things at Mapbox. Previously I worked at Lonely Planet and Upstatement.</p>
      <Link prefetch href="/"><a className="db blue link">Back</a></Link>
      </div>
    </div>
</div>)