import React from 'react'

export default class SlideColumn extends React.Component {
  render () {
    let c = this.props.content
    return (
      <div className={`flex flex-row-l flex-column justify-between`}>
         <div className='mr3 mb0-l mb4'>
           <div className='f6 o-60 ml2 mb3'>{c[0][0]}</div>
           <img style={{ width: 286}} src={`${c[0][1]}`} />
         </div>
         <div className='mr3 mb0-l mb4'>
           <div className='f6 o-60 ml2 mb3'>{c[1][0]}</div>
           <img style={{ width: 286}} src={`${c[1][1]}`} />
         </div>
         <div className='mb0-l mb4'>
           <div className='f6 o-60 ml2 mb3'>{c[2][0]}</div>
           <img style={{ width: 286}} src={`${c[2][1]}`} />
         </div>
      </div>
    )
}}