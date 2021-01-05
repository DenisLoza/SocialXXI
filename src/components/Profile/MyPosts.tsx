import React from 'react';
import { Post } from './Post/Post';
import style from "./MyPosts.module.css"


export function MyPosts() {
    
    return (
        <div className={style.MyPosts}>
            <div>MyPosts:</div>
            <textarea className={style.textarea}>
            </textarea>
            <div>
                <button>Add post</button>
            </div>
            <Post message="Hello!" likesCount={11}/>
            <Post message="It's my first post!" likesCount={33}/>
        </div>
    )
}

