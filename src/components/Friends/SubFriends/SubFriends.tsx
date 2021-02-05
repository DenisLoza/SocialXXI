import React from "react"
import style from "./SubFriends.module.css"


export function SubFriends() {
  return (
    <div className={`${style.SubFriends}`}>
      <div>
        <div className={`${style.SubFriendsItem} ${style.active}`}>My friends</div>
        <div className={`${style.SubFriendsItem}`}>Friend requests</div>
        <div className={`${style.SubFriendsItem}`}>Find friends</div>
        <div className={`${style.hr}`}> </div>
      </div>
    </div>
  )
}