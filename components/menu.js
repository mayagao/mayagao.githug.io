import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
export default () => (
  <div className="tr heading cf mt3">
   <a href="/" className="f4 fl black no-underline  dib">Maya Gao</a>
   <a href="/" className="f5 mr3 dim black link">Works</a>
   <Link href="/about"><a className="f5 dim black link">About</a></Link>
</div>)