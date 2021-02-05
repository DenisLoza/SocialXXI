import React from "react"
import style from "./Main.module.css"
import {Route} from "react-router-dom"
import {Profile} from "../../components/Profile/Profile"
import {Messages} from "../../components/Messages/Messages"
import {Friends} from "../../components/Friends/Friends"

export function Main() {
  return (
    <div className={style.main}>
      <Route path="/myProfile" render={() => <Profile/>}/>
      <Route path="/friends" render={() => <Friends/>}/>
      <Route path="/im" render={() => <Messages/>}/>
    </div>
  )
}