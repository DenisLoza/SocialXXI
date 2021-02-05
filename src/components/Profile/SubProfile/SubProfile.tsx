import React from "react"
import style from "./SubProfile.module.css"
import profileAvatar from "../../img/avatars/profile_avatar.jpg"
import {FriendsListModule} from "../FriendsModule/FriendsListModule"
import {quantityFriends} from "../../Friends/Friends"
import {NavLink} from "react-router-dom"
import {friendsData} from "../../../Store/State"


// импорт FriendsData
let qf = quantityFriends(friendsData)


export function SubProfile() {
  return (
    <div>
      <div className={`${style.SubProfile}`}>
        <div>
          <img src={profileAvatar}
               alt="avatar"
          />
        </div>
        <button>Edit</button>
      </div>

      <div className={`${style.friends}`}>
        <NavLink activeClassName={style.active}
                 to="/friends">
          <div className={`${style.friendsHeader}`}>
            <div>
              Friends
            </div>
            <div className={`${style.friendsHeaderCount}`}>
              {qf}
            </div>
          </div>
        </NavLink>

        <div>
          <FriendsListModule/>
        </div>

      </div>
    </div>
  )
}
