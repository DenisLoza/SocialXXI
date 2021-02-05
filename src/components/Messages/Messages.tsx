import React from "react"
import style from "./Messages.module.css"
import {Dialogs} from "./Dialogs/Dialogs"
import {ChatsAll} from "./ChatsAll/ChatsAll"
import searchIcon from "../img/icons/magnifying-glass.png"
import {dialogsData, messagesData} from "../../Store/State"


let messagesDataMap = messagesData.map(data =>
  <ChatsAll key={data.id}
            id={data.id}
            time={data.time}
            friendName={data.friendName}
            avatarSrc={data.avatarSrc}
            lastMessage={data.lastMessage}
  />
)

let dialogsDataMap = dialogsData.map(data =>
  <Dialogs key={data.id}
           id={data.id}
           name={data.name}
           time={data.time}
           message={data.message}
  />
)

export function Messages() {
  return (
    <div className={`${style.Messages}`}>

      <div className={`${style.search}`}>
        <div className={`${style.searchWindow}`}>
          <img src={searchIcon} alt="icon"/>
          <input type="text"
                 placeholder={"Search"}
          />
        </div>
      </div>
        {messagesDataMap}
    </div>
  )
}

