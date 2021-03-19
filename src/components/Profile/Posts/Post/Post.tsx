import React from "react"
import style from "./Post.module.css"
import avatar_man from "../../../img/avatars/man_5.jpg"
import like from "../../../img/icons/heart.png"
import {postDataType} from "../../../../Store/State"


export function Post(props: postDataType) {

  let message = props.message
  let likesCount = props.likesCount

  return (
    <div className={style.Post}>
      <div className={style.avatarHeader}>
        <img src={avatar_man} alt="avatar"/>
        <div>
          <div>NAME</div>
          <div>TIME</div>
        </div>
      </div>

      <div className={style.message}>
        {message}
      </div>

      <div className={style.count}>
        <div>
          <img src={like} alt="like"/>
        </div>
        <div className={style.likesCount}>
          {likesCount}
        </div>

      </div>
    </div>
  )
}