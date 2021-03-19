import React from "react"
import style from "./Main.module.css"
import {Route} from "react-router-dom"
import {Profile} from "../../components/Profile/Profile"
import {Messages} from "../../components/Messages/Messages"
import {Friends} from "../../components/Friends/Friends"
import {Dialogs} from "../../components/Messages/Dialogs/Dialogs"
import {store} from "../../Store/State"

export function Main() {
  return (
    <div className={style.Main}>
      <Route path="/myProfile" render={() => <Profile/>}/>
      <Route path="/friends" render={() => <Friends/>}/>
      <Route path="/im" render={() => <Messages/>}/>
      <Route path="/dialog/" render={() => <Dialogs messagesData={store._state.messagesComponent.messagesData}/>}/>
    </div>
  )
}