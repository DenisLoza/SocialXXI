import React from "react"
import style from "./Header.module.css"
import logo from "./logo.png"
import {NavLink} from "react-router-dom"
import avatar_man from "../../components/img/avatars/man_5.jpg"
import {Search} from "../../Functions/Search"



export function Header() {

  const onSearch = () => {

  }

  return (
    <div className={`${style.Header}`}>
      <div className={`${style.header_wrap}`}>
        <div className={`${style.logo}`}>
          <div>
            <NavLink activeClassName={`${style.active}`}
                     to="/">
              <img src={logo}
                   alt="logo"
              />
            </NavLink>
          </div>
        </div>
        <div className={`${style.search_wrap}`}>
            <Search onSearch={onSearch}/>
          <div className={`${style.notifications}`}> + notifications + </div>
        </div>
        <div className={`${style.avatar}`}>
          <div className={`${style.name}`}>Denis</div>
          <div><img src={avatar_man} alt="avatar"/></div>
        </div>
      </div>
    </div>
  )
}