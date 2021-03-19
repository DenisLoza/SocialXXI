import style from "./Message.module.css"
import {NavLink} from "react-router-dom"
import React from "react"
import {messageDataType} from "../../../Store/State"


export function Message(props: messageDataType) {

  let path = "/dialog/" + props.friendName

  return (
    <div className={`${style.Message}`}>
      <NavLink activeClassName={style.active}
               to={path}>

        <div className={style.MessageItem}>

          <div className={`${style.MessageAvatar}`}>
            <img src={props.avatarSrc} alt="avatar"/>
          </div>

          <div className={`${style.MessageTitle}`}>
            <div className={`${style.friendName}`}>
              <div>
                {props.friendName}
              </div>
              <div className={`${style.MessageTime}`}>
                {props.time}
              </div>
            </div>
            <div className={`${style.LastMessage}`}>
              {props.lastMessage}
            </div>
          </div>

        </div>

      </NavLink>
    </div>
  )
}