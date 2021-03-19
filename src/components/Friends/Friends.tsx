import React, {useState} from "react"
import style from "./Friends.module.css"
import {friendDataType} from "../../Store/State"
import {friendsData} from "../../Store/State"
import {Friend} from "./Friend/Friend"
import {Search} from "../../Functions/Search"


// ф-ция подсчета кол-ва друзей
export function quantityFriends(props: Array<friendDataType>) {
  return props.length
}


export function Friends() {

  let [friends, setFriends] = useState(friendsData)

  // колбэк пробрасываем в <Search>
  let onSearch = (valueSearch: string) => {
    let searchResults = friendsData.filter((item) => {
      return item.friendName.toLowerCase().indexOf(valueSearch.toLowerCase()) > -1
    })
    setFriends(searchResults)
  }


  let friendsDataMap = friends.map(data =>
    <Friend key={data.id}
            id={data.id}
            friendName={data.friendName}
            avatarSrc={data.avatarSrc}
    />
  )

  return (
    <div className={`${style.Friends}`}>
      <Search onSearch={onSearch}/>

      {friendsDataMap}

    </div>
  )
}