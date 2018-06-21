import React from 'react';
import Head from 'next/head';
import { styles } from './styles';
import Link from 'next/link';
import Menu from './menu';
export default class DsTable extends React.Component {
  render() {
    let content = this.props.content;
    return (
      <div>
        {content.map((ft, i) => (
          <div
            key={i}
            className="flex lh-copy bt b--black-10 pt4 items-end-m content-stretch items-start items-start-l f6 flex-row-ns flex-column mt4"
          >
            <div className="flex flex-row-l w-100 flex-column ">
              <div className={`dib mr2 mb2 w4 f5`}>{ft.title}</div>
              <div className="flex flex-row-ns w-100 flex-column">
                <div className={`o-70 w-80 mb3 mw5-l mw-auto mr4`}>
                  {ft.description}
                </div>
                <div className="f7 br3 o-70 w-100 ph3 mr4 mb0-ns mb4 pv1 bg-near-white round">
                  <pre>{ft.code}</pre>
                </div>
              </div>
            </div>
            <div className="flex w5-l w4 tc flex-column">{ft.image}</div>
          </div>
        ))}
      </div>
    );
  }
}
