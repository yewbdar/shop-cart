import React,{useContext} from 'react'
import style from './header.module.css'
import {NewContext} from '../context/shopContext'
import NewCom from './NewCom'
export default function Header() {
     const {activButton , cart , product } = useContext(NewContext)
    return (
        <div className={style.header}>
            <button onClick={()=> activButton('prduct')}>product </button><span>{product.length}</span>
            <button onClick={()=> activButton('cart')}>cart </button><span>{cart.length}</span>
             {/* <NewCom/> */}
        </div>
    )
}
