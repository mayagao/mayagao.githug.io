import React from 'react'
import Header from '../components/header'
import Link from 'next/link'
export default () => (
  <div>
   <Header />
    <div className="ph4 bt b--navy bw2 pt4 pt5-ns ph5-ns">
<div className="mw7 center">
<div className="f3 navy ">Maya Gao</div>


<div className="f5 f4 navy lh-copy">
<p className="mt4">👋 I am a product designer living and working in Washington D.C. Currently I design and build things for Mapbox. I've worked on a wide range of projects here from the <a className="blue dim link" href="mapbox-studio">Mapbox Studio style editor </a> and <a className="blue dim link"  href="data-editor">data editor</a>, to the documentation system and the mobile navigation SDK. I often switch between UI design, communication design, and front-end development in my day-to-day work. </p><p>Before Mapbox, I was a UI designer at Lonely Planet and a design intern at <a className="blue dim link" href="https://www.upstatement.com/">Upstatement</a>.</p>

<div className="pt3">
  <div className="f4 mb2">Works</div>
  <Link href="/mapbox-studio"><a className="blue dim link db mt3" >Mapbox Studio</a></Link>
  <div className="f5 o-80 mt0">A point-and-click map design interface.</div>
  <Link href="/data-editor "><a className="blue dim link db mt3">Dataset Editor</a></Link>
  <div className="f5 o-80 mt0">A tool for spatial data editing.</div>
</div>



<div className="f6 o-50 mt5"> </div>

<div className="dib"><a className="blue dim link mr2" href="https://dribbble.com/mayagao">Dribbble</a></div>
<div className="dib"><a className="blue dim link mr2" href="https://github.com/mayagao">Github</a></div>
<div className="dib"><a className="blue dim link" href="https://www.linkedin.com/in/mayagq">LinkedIn</a></div>
</div>
</div></div>


  </div>)