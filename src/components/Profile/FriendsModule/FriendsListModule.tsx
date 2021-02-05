import React from "react"
import style from "./FriendsListModule.module.css"
import {NavLink} from "react-router-dom"
import {friendsData} from "../../../Store/State"


// отбираем первые шесть элементов массива FriendsData
function sixFriendsDataF() {
  let sixFriendsData = []
  for (let i = 0; i < 6; i++) {
    sixFriendsData.push(friendsData[i])
  }
  return sixFriendsData
}

let sixFriendsData = sixFriendsDataF()

let mapFriendsData = sixFriendsData.map(data =>
  <>
    <NavLink activeClassName={style.active}
             to={"/friends/" + data.friendName}>
      <div>
        <img src={data.avatarSrc} alt="avatar"/>
      </div>
      <div>
        {data.friendName}
      </div>
    </NavLink>
  </>
)


export function FriendsListModule() {
  return (
    <div className={`${style.FriendsListModule}`}>
      <div className={`${style.friendsListItem}`}>
        {mapFriendsData}
      </div>
    </div>
  )
}