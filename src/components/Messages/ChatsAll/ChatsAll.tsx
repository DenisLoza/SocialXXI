import style from "./ChatsAll.module.css"
import {NavLink} from "react-router-dom"
import React from "react"
import {messageDataType} from "../../../Store/State"



export function ChatsAll(props: messageDataType) {

  let path = "/im/" + props.friendName

  return (
    <div className={`${style.ChatsAll}`}>
      <NavLink activeClassName={style.active}
               to={path}>

        <div className={style.Chats}>

          <div className={`${style.ChatsAvatar}`}>
            <img src={props.avatarSrc} alt="avatar"/>
          </div>

          <div className={`${style.ChatsTitle}`}>
            <div className={`${style.friendName}`}>
              <div>
                {props.friendName}
              </div>
              <div className={`${style.ChatsTime}`}>
                {props.time}
              </div>
            </div>
            <div className={`${style.ChatsLastMessage}`}>
              {props.lastMessage}
            </div>
          </div>

        </div>

      </NavLink>
    </div>
  )
}