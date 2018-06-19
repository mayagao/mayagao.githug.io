import React from 'react'
import Head from 'next/head'
import Header from '../components/header'
import { styles } from '../components/styles'
// import Lowlight from 'react-lowlight'
// import css from 'highlight.js/lib/languages/css'
import { cssProperties } from '../components/css_properties'

// Lowlight.registerLanguage('css', css)



const highlightItemClass = (color) => `bb relative dib mr2 highlighted-item bw2 b--${color} bg-faint-${color} ph1 pv1 ${color} fw5`
export default () => (
  <div>
    <Head> 
     <style>{`
      .red { color: #DA654D; }
      .green { color: #3DB27A;}
      .purple { color: #8E83E1;}
      .blue { color: #5192DF;}



      .b--red { border-color: #DA654D; }
      .b--green { border-color: #3DB27A;}
      .b--purple { border-color: #8E83E1;}
      .b--blue { border-color: #5192DF;}
      .b--light-2 { border-color: #F9F8FE;}


      .bg-red { background: #DA654D;}
      .bg-green { background: #3DB27A;}
      .bg-purple { background: #8E83E1;}
      .bg-blue { background: #5192DF;}

      .bg-faint-red { background: #F6E1DF;}
      .bg-faint-green { background: #D1ECDE;}
      .bg-faint-purple { background: #DBD7F5;}
      .bg-faint-blue { background: #DCE7F7;}

      .bg-light-1 { background: #F9F8FE; }
      .bg-light-2 { background: #F1F0FB; }
      @keyframes move1 {
        from {background: #DDDAFA; transform: translate(0,0);}
        to  {background: #8E83E1; transform: translate(300px, 0);}
      }
      .property-reset { counter-reset: hi; } 
      

      .circle {
        padding: 6px;
        height: 12px;
        width: 12px;

      }
      .highlighted-item::before {
        counter-increment: hi;
        content: counter(hi);
        background: inherit;
        border-radius: 32px;
        position: absolute;
        padding: 6px;
        height: 12px;
        width: 12px;
        text-align: center;
        font-size: 10px;
        margin-top: 30px;
        margin: 30px -4px 0px;
      }

      .highlighted-item.in-list::before {
        margin: -4px 0px;
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

         <div className='w-80 f7'>
         <div className='mb5'>
           <pre className='bg-light-2 b--light-2 ba bw1 property-reset ph4 pt4 pb5 br--top br3'>
             <div className='br2 bg-light-2 mb3 f7 o-30 ttu tracked dib'>shorthand</div>
             <div>animation: {Object.keys(cssProperties['animation']).map((a, i) => {
              const ob = cssProperties['animation'][a]
              return (<span 
                 className={highlightItemClass(ob.color)}>{ob.value}</span> 
              )})
             }</div>
                  
           </pre>
           <pre className='bg-light-1 ph4 pb4 pt4 br3 br--bottom'>
            <div className='br2 bg-light-2 f7 o-30 ttu tracked mb4 dib'>values</div>
            <div 

             className='property-reset '>{Object.keys(cssProperties['animation']).map((a, i) => {
              const ob = cssProperties['animation'][a]
              return (<div
                className='mb3'>
                  <span className={`in-list highlighted-item mr4 bg-faint-${ob.color} ${ob.color}`}></span>
                  {a}
                  <div style={{ wordBreak: 'break-word', wordWrap: 'break-word', whiteSpace: 'normal' }} className='ml4 lh-title o-50 mt2'>{ob.values.join('/')}</div>
                   {ob.showDetails && ob.showDetails()} 
                </div>
              )})
             }</div>
           </pre>
         </div>

        </div>



        <div>


        </div>
      </div>
     

      </div>

    </div>
  </div>

)