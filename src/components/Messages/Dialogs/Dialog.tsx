import React from "react"
import style from "./Dialog.module.css"
import avatar_man from "../../img/avatars/man_5.jpg"


export function Dialog(props: any) {

  let item = props.item

  return (
    <div className={`${style.Dialog_wrap}`}>
      <div className={`${style.DialogAvatar}`}>
        <img src={avatar_man} alt="avatar"/>
      </div>
      <div className={`${style.DialogItem}`}>
        <div className={`${style.DialogItemTitle}`}>
          <div className={`${style.ItemTitleName}`}>Denis</div>
          <div className={`${style.ItemTitleTime}`}>23.30</div>
        </div>
        <div className={`${style.ItemMessage}`}>
          {item}
        </div>
      </div>
      <div className={`${style.DialogStar}`}>
      </div>
    </div>
  )
}