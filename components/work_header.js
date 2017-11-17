import React from 'react'
import Head from 'next/head'
import { styles } from './styles'
import Link from 'next/link'
import Menu from './menu'
export default class WorkHeader extends React.Component {
  render () {
    let headerInfo = this.props.headerInfo
    return (
      <div className="bg-near-white overflow-hidden lh-title">
        <div className={`${styles.limiter}`}>
          <Menu />
          <div className="mt6-l f6 mt5 center cb cf">
            <div className="mb4 mt3 w-40-l fl-l fn">
              <div className="o-50 heading">Case Study</div>
              <div className={`${styles.txtH1}`}>{headerInfo.title}</div>
              <div className="w-40-m w-100-l fl w-100">
                <div className="fl">
                  <div className="mt3 heading o-50">My Role</div>
                  <div className="pt1 ">{headerInfo.role}</div>
                  <div className="mt3 heading o-50">Release</div>
                  <div className="pt1 ">{headerInfo.release}</div>
                </div>
              </div>
              <div className="w-60-m w-100 fl w-100-l">
                <div className="mt3 heading o-50">Team</div>
                 {headerInfo.team.map((role, i) => (<div key={`role` + i} className=" pt1">{role.name} <span className="o-40">{role.title}</span></div>))}
              </div>
            </div>
            {headerInfo.image}
          </div>
        </div>
      </div>
    )
}}
