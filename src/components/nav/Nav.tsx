import React from 'react';
import style from "./Nav.module.css"

export function Nav() {
    return (
        <div>
            <div className={`${style.item}`}>
                Main
            </div>
            <div className={`${style.item}`}>
                Friends
            </div>
            <div className={`${style.item}`}>
                Messages
            </div>
        </div>
    )
}