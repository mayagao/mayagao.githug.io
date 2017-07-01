import React from 'react'
import Head from 'next/head'
import { styles } from './styles'
import Link from 'next/link'
import Menu from './menu'
export default class WorkHeader extends React.Component {
  render () {
    let headerInfo = this.props.headerInfo
    return (
      <div className="bg-near-white overflow-hidden bt bw2 lh-title">
        <div className={`${styles.limiter}`}>
          <Menu />
          <div className="mt6-l mt5 center cb cf">
            <div className="mb4 mt3 w-40-l fl-l fn">
              <div className="f5 o-40">Case Study</div>
              <div className={`${styles.txtH1}`}>{headerInfo.title}</div>
              <div className="w-40-m w-100-l fl w-100">
                <div className=" mb3 fl">
                  <div className="f6 mt3 o-40">My Role</div>
                  <div className="f6 pt1 ">{headerInfo.role}</div>
                  <div className="f6 mt3 o-40">Release</div>
                  <div className="f6 pt1 ">{headerInfo.release}</div>
                </div>
              </div>
              <div className="w-60-m w-100 fl w-100-l">
                <div className="f6 mt3 o-40">Team</div>
                 {headerInfo.team.map((role, i) => (<div key={`role` + i} className="f6 pt1">{role.name} <span className="o-40">{role.title}</span></div>))}
              </div>
            </div>
            {headerInfo.image}
          </div>
        </div>
      </div>
    )
}}
