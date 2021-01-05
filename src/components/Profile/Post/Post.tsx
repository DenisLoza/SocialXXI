import React from 'react';
import style from "./Post.module.css"
import avatar_man from "../img/avatars/ava_man.jpg"


export function Post(props: PostType) {
    let message = props.message
    let likesCount = props.likesCount
    
    return (
        <div className={style.avatar}>
            <img src={avatar_man} alt="avatar" />

            {message}

            <div className={style.count}>

                like {likesCount}
            
            </div>
        </div>
    )
}

type PostType = {
    message: string
    likesCount: number
}