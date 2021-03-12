import React, {useState} from "react"
import style from "./Messages.module.css"
import {Dialogs} from "./Dialogs/Dialogs"
import {ChatsAll} from "./ChatsAll/ChatsAll"
import searchIcon from "../img/icons/magnifying-glass.png"
import {dialogsData, friendsData, messagesData} from "../../Store/State"
import {Search} from "../../Functions/Search"



let dialogsDataMap = dialogsData.map(data =>
  <Dialogs key={data.id}
           id={data.id}
           name={data.name}
           time={data.time}
           message={data.message}
  />
)

export function Messages() {

  let [messages, setMessages] = useState(messagesData)

  // колбэк пробрасываем в <Search>
  let onSearch = (valueSearch: string) => {
    let searchResults = messagesData.filter((item) => {
      return item.lastMessage.toLowerCase().indexOf(valueSearch.toLowerCase()) > -1
    })
    setMessages(searchResults)
  }

  let messagesDataMap = messages.map(data =>
    <ChatsAll key={data.id}
              id={data.id}
              time={data.time}
              friendName={data.friendName}
              avatarSrc={data.avatarSrc}
              lastMessage={data.lastMessage}
    />
  )

  return (
    <div className={`${style.Messages}`}>

      <div className={`${style.search}`}>
        <div className={`${style.searchWindow}`}>
          <img src={searchIcon} alt="icon"/>
          <Search onSearch={onSearch}/>
        </div>
      </div>
        {messagesDataMap}
    </div>
  )
}

