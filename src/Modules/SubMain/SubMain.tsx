import React from "react"
import style from "./SubMain.module.css"
import {Route} from "react-router-dom"
import {SubProfile} from "../../components/Profile/SubProfile/SubProfile"
import {SubMessages} from "../../components/Messages/SubMessages/SubMessages"
import {SubFriends} from "../../components/Friends/SubFriends/SubFriends"

export function SubMain() {
  return (
    <div className={`${style.SubMain}`}>
      <Route path="/myProfile" render={() => <SubProfile/>} />
      <Route path="/friends" render={() => <SubFriends/>} />
      <Route path="/im" render={() => <SubMessages/>} />
    </div>
  )
}