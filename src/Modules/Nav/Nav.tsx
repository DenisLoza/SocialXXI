import React from "react"
import {NavLink} from "react-router-dom"
import style from "./Nav.module.css"
import friendsIcon from "../../components/img/icons/stickMans.png"
import messengerIcon from "../../components/img/icons/speechBubble1.png"
import myProfileIcon from "../../components/img/icons/userCircle.png"


export function Nav() {
  return (
    <div className={`${style.Nav}`}>

      <div className={`${style.item}`}>
        <NavLink activeClassName={style.active}
                 to="/myProfile">
          <div> <span> <img src={myProfileIcon} alt="icon"/> </span>
            My profile
          </div>
        </NavLink>
      </div>

      <div className={`${style.item}`}>
        <NavLink activeClassName={style.active}
                 to="/friends">
          <div> <span> <img src={friendsIcon} alt="icon"/> </span>
            Friends
          </div>
        </NavLink>
      </div>

      <div className={`${style.item}`}>
        <NavLink activeClassName={style.active}
                 to="/im">
          <div> <span> <img src={messengerIcon} alt="icon"/> </span>
            Messenger
          </div>
        </NavLink>
      </div>

    </div>
  )
}