import React, {Component} from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import Head from 'next/head'

class Slideshow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }
  onClickNext = () => {
    this.setState({
      activeIndex: (this.state.activeIndex + 1) % 3
    })
  }
  onClickPrev = () => {
    this.setState({
      activeIndex: (this.state.activeIndex - 1) % 3
    })
  }
  componentDidMount() {
    this.interval = setInterval(() => this.onClickNext(), 2000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render () {
    let content = this.props.content

    return (
      <div className='relative'>
      <Head>
      <style>{`
@media screen and (min-width: 60em) {
 .h6-l { height: 19rem; }
}

        .example-enter {
  opacity: 0.04;
}

.example-enter.example-enter-active {
  opacity: 1;
  transition: opacity 600ms ease-in;
}
`}</style>
      </Head>
        <div className='mb4'>
        {content.map((c, i) => (
          <div
            className={`f6 dib mr3 nl2 pv2 ph3 br-pill ${this.state.activeIndex === i ? 'o-90 bg-white' : 'o-40'}`}>
              {c.title}
          </div>))}
        </div>
        <div className='items-center h5 absolute absolute--fill flex'>
        <a onClick={this.onClickPrev} className='br-100 left-0 nl5 absolute  shadow shadow-1-on-hover pointer fl dib bg-white h2 items-center flex ph2'>
            <img className='h1 w1 o-50 glow ' src='../../static/icons/prev.svg' />
          </a>

          <a onClick={this.onClickNext} className='br-100 right-0 nr5 absolute shadow shadow-1-on-hover pointer fr dib bg-white h2 items-center flex ph2'>
            <img className='h1 w1 o-50 glow ' src='../../static/icons/next.svg' />
          </a>


        </div>
        <div className='h6-l h5'>
        {content.map((c,i) => (

          this.state.activeIndex === i && c.content

          ))}
         </div>
      </div>
    )
  }
}

export default Slideshow