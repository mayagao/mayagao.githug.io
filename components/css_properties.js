export const cssProperties = { animation: {

'animation-name': {
  color: 'red',
  value: 'move',
  values: ['The name of the keyframe']
},
'animation-duration': {
  color: 'green',
  value: '2s',
  values: ['In seconds, e.g.: 3s, 5000ms']
},
'animation-delay': {
  color: 'green',
  value: '1s',
  values: ['In seconds, e.g. 3s, 5000ms']
},
'animation-timing-function': {
  color: 'purple',
  value: 'ease-in-out',
  values: ['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear', 'step-start', 'step-end', 'cubic-bezier(0.1, 0.7, 1.0, 0.1)', 'steps(6, start)', 'steps(6, end)'],
  showDetails: function() { 
    const v = this.values;
    return (<div className='relative ml4 pv3 mb4'>
  <div 
  style={{ marginRight: 7 }}
  className='absolute right-0 h-100 bl bw1 b--light-gray' />
  <div 
  style={{ marginRight: 307 }}
  className='absolute right-0 h-100 bl bw1 b--light-gray ' />
  {v.map((tf, i) =>
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
  )}
</div>)}
},
'animation-iteration-count': {
  color: 'purple',
  value: '10',
  values: ['A number, e.g. 10, or inifinite']
},
'animation-direction': {
  color: 'blue',
  value: 'alternate',
  values: ['alternate']
},
'animation-fill-mode': {
  color: 'blue',
  value: 'forwards',
  values: ['non(default)', 'forwards', 'backwards', 'both']
},
'animation-play-state': {
  color: 'blue',
  value: 'running',
  values: ['runing']
}},



transform : {}, grid: {} , column: {} , flexbox: {} }
