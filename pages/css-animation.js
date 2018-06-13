import React from 'react'
import Head from 'next/head'
import Header from '../components/header'
import { styles } from '../components/styles'
// import Lowlight from 'react-lowlight'
// import css from 'highlight.js/lib/languages/css'


// Lowlight.registerLanguage('css', css)

const cssProperties = { animation: {

'animation-name': {
  color: 'red',
  values: ['The name of the keyframe']
},
'animation-duration': {
  color: 'green',
  values: ['In seconds, e.g.: 3s, 5000ms']
},
'animation-delay': {
  color: 'green',
  values: ['In seconds, e.g. 3s, 5000ms']
},
'animation-timing-function': {
  color: 'purple',
  values: ['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear', 'step-start', 'step-end', 'cubic-bezier(0.1, 0.7, 1.0, 0.1)', 'steps(6, start)', 'steps(6, end)']
},
'animation-iteration-count': {
  color: 'purple',
  values: ['A number, e.g. 10, or inifinite']
},
'animation-direction': {
  color: 'blue',
  values: ['alternative']
},
'animation-fill-mode': {
  color: 'blue',
  values: ['none(default)', 'forwards', 'backwards', 'both']
},
'animation-play-state': {
  color: 'blue',
  values: ['running']
}},



transform : {}, grid: {} , column: {} , flexbox: {} }



export default () => (
  <div>
    <Head> 
     <style>{`
      .bg-light-1 { background: #FCFBFD; }
      .bg-light-2 { background: #F8F7FD; }
      @keyframes move1 {
        from {background: #DDDAFA; transform: translate(0,0);}
        to  {background: #8E83E1; transform: translate(300px, 0);}
      }

    `}</style>
    </Head>
    <Header />
    <div className={`${styles.limiter}`}>
    <div className=''>

      <h1 className='f3' >CSS properties</h1>
      <div className='mt4 flex'>

        <aside className='w-20 mr4'>
          <ul className='list'>
            {Object.keys(cssProperties).map((cp, i) => <li className='pv1 mb1'>{cp}</li>)}
          </ul>
        </aside>
         <div className='w-80'>
      {cssProperties['animation']['animation-timing-function'].values.map((tf, i) => 
        <div key={i} className={`w-100 pv2 flex justify-between ${i > 0 && 'bt b--light-gray b--dashed' }`}>
          <div className='f7'>{tf}</div>
          <div 
          className='mr3'
          style={{width: 300}}>
           <div 
             style={{
               animation: `move1 3s ` +  `${tf}`  + ` infinite alternate`,
               background: '#DDDAFA'
             }}
             className='relative h1 w1 br-100 ba3'>
           </div>
           </div>
           
        </div>

      )}</div>



        <div>


     

        </div>
      </div>
     

      </div>

    </div>
  </div>

)