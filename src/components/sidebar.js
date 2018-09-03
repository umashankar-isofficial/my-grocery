import React from 'react'
import {sidebarMenusConfig} from './../config/app-config'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

export default class SideBar extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    const $sideBarMenus = sidebarMenusConfig.map((menuConfig) => {
      return (
        <NavLink className="menu-item"
            key={menuConfig.id}
            to={`/categories/${menuConfig.id}`}>
                <img src={menuConfig.icon} className="icon" />
                <div className="text">{menuConfig.title}</div>
        </NavLink>
      )
    })
    return (
      <aside className="sidebar">
        <ul>
          {$sideBarMenus}
        </ul>
        <div className="footer">
          <button className="btn btn-primary settings">
             Admin Settings
          </button>
        </div>
      </aside>
    )
  }
}
