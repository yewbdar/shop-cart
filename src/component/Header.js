import React from 'react'
import style from './header.module.css'
export default function Header() {
    return (
        <div className={style.header}>
            <button>product </button><span>4</span>
            <button>cart </button><span>8</span>
        </div>
    )
}
