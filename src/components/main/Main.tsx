import React from 'react';
import style from "./Main.module.css"
import { Profile } from '../Profile/Profile';

export function Main() {
    return (
        <div className={style.main}>
            <Profile />
        </div>
    )
}