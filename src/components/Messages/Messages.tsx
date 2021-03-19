import React, {useState} from "react"
import style from "./Messages.module.css"
import {Message} from "./Message/Message"
import {messagesData} from "../../Store/State"
import {Search} from "../../Functions/Search"


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
    <Message key={data.id}
             id={data.id}
             time={data.time}
             friendName={data.friendName}
             avatarSrc={data.avatarSrc}
             lastMessage={data.lastMessage}
    />
  )

  return (
    <div className={`${style.Messages}`}>
      <Search onSearch={onSearch}/>

      {messagesDataMap}

    </div>
  )
}

