import style from "./FriendsAll.module.css"
import {NavLink} from "react-router-dom"
import React from "react"
import {friendDataType} from "../../Store/State"


export function FriendsAll(props: friendDataType) {

  let path = "/friends/" + props.friendName

  return (
    <div className={`${style.FriendsAll}`}>
      <NavLink activeClassName={style.active}
               to={path}>

        <div className={style.Chats}>
          <div className={`${style.FriendsAllAvatar}`}>
            <img src={props.avatarSrc} alt="avatar"/>
          </div>

          <div className={`${style.FriendsAllTitle}`}>
            <div className={`${style.friendName}`}>
              <div>
                {props.friendName}
              </div>
            </div>

            <div>
              description
            </div>

          </div>
        </div>
      </NavLink>
    </div>
  )
}