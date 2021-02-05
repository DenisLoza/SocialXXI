import React from "react"
import style from "./Dialogs.module.css"
import mail from "../../img/mail.png"
import {dialogsDataType} from "../../../Store/State"


export function Dialogs(props: dialogsDataType) {
  return (
    <div className={style.Dialogs}>
      <h4>Dialogs</h4>
      <div className={`${style.mail}`}>
        <img src={mail}
             alt="mail"
        />
      </div>
      <div className={`${style.post}`}>
        <div className={`${style.col}`}>
          <div>
            <div> <span> {props.name} </span> </div>
            <div> {props.message} </div>
          </div>
          <div className={`${style.time}`}> {props.time} </div>
        </div>
      </div>
    </div>
  )
}
