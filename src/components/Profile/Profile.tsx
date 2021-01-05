import React from 'react';
import style from "./Profile.module.css"
import { MyPosts } from './MyPosts';



export function Profile() {
    return (
        <div>
            <div>
                AVA + description
           </div>
            <MyPosts />
        </div>
    )
}