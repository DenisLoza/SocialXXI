import React from "react"
import style from "./SubMessages.module.css"

export function SubMessages() {
  return (
    <div className={`${style.SubMessages}`}>
      <div>
        <div className={`${style.SubMessagesItem} ${style.active}`}>All chats</div>
        <div className={`${style.SubMessagesItem}`}>Unread</div>
        <div className={`${style.SubMessagesItem}`}>Starred messages</div>
        <div className={`${style.hr}`}> </div>
      </div>
    </div>
  )
}