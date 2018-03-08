import React, {Component} from 'react'
import Head from 'next/head'
import { styles } from './styles'

class ScrollableContainer extends Component {
  constructor(props) {
    super(props);
  }
  static defaultPros = {
    title: '',
    subtitle: '',
    singleImageWidth: 900
  }
  render () {
    const scrollContainerWidth = (this.props.singleImageWidth + 70) *(this.props.containerContent.length);
    const id = this.props.id;
    return (
      <div>
        <Head>
          <style>{`
            .${id}-scroll-container { 
              width: ${scrollContainerWidth * 0.5}px;
            }
            @media screen and (min-width: 30em){
              .${id}-scroll-container {
                width: ${scrollContainerWidth * 0.7}px;
              }
            }
            @media screen and (min-width: 60em){
              .${id}-scroll-container {
                width: ${scrollContainerWidth}px;
              }
            }
          `}</style>
        </Head>
        <div className='bg-near-white pt4 pb5 mt4 overflow-hidden'>
          <div className={`mw-limiter pv4 ph6-l ph4 center cf`}>
            <div className={`${styles.txtH3}`}>{this.props.title}</div>
            <div className={`${styles.txtSbody} mt1 mb2`}>{this.props.subtitle}</div>
          </div>
          <div className='w-100 overflow-x-scroll'>
            <div className={`flex mw-none ${id}-scroll-container pl6-l ph4`}>
            {this.props.containerContent.map((c, i) => (
              <div className='mr4 mb3' key={this.props.id + i}>
                <img className="w-100 " src={c[0]} />
                <div className={`${styles.txtSbody} mt2`}>{c[1]}</div>
              </div>))}
             </div>
           </div>        
        </div>
      </div>
    )
  }
}

export default ScrollableContainer