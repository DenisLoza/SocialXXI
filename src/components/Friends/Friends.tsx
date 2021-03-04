import React from "react"
import style from "./Friends.module.css"
import searchIcon from "../img/icons/magnifying-glass.png"
import {friendDataType} from "../../Store/State"
import {friendsData} from "../../Store/State"
import {FriendsAll} from "./FriendsAll"


// ф-ция подсчета кол-ва друзей
export function quantityFriends(props: Array<friendDataType>) {
  return props.length
}

let friendsDataMap = friendsData.map(data =>
  <FriendsAll key={data.id}
              id={data.id}
              friendName={data.friendName}
              avatarSrc={data.avatarSrc}
  />
)


export function Friends() {
  return (
    <div className={`${style.Friends}`}>
      <div className={`${style.search}`}>
        <div className={`${style.searchWindow}`}>
          <img src={searchIcon} alt="icon"/>
          <input type="text"
                 placeholder={"Search"}
          />
        </div>
      </div>
      {friendsDataMap}
    </div>
  )
}