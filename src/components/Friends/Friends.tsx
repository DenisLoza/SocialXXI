import React, {useState} from "react"
import style from "./Friends.module.css"
import searchIcon from "../img/icons/magnifying-glass.png"
import {friendDataType} from "../../Store/State"
import {friendsData} from "../../Store/State"
import {FriendsAll} from "./FriendsAll"
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
    <FriendsAll key={data.id}
                id={data.id}
                friendName={data.friendName}
                avatarSrc={data.avatarSrc}
    />
  )

  return (
    <div className={`${style.Friends}`}>
      <div className={`${style.search}`}>
        <div className={`${style.searchWindow}`}>
          <img src={searchIcon} alt="icon"/>
          <Search onSearch={onSearch}/>
        </div>
      </div>
      {friendsDataMap}
    </div>
  )
}