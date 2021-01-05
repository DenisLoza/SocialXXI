import React from 'react';
import style from "./Header.module.css"
import logo from "../header/logo.png"

export function Header() {
    return (
        <div className={`${style.header}`}>
            <a href="#">
                <img src={logo} alt="logo" />
            </a>
        </div>
    )
}