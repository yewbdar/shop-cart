import React from 'react'
import {useContext} from 'react'
import {NewContext} from '../context/shopContext'
import style from './productList.module.css'
export default function ProductList() {
    
    const { product , isProduct  , addToCart ,cart, removeFromCart} = useContext(NewContext)
    console.log(product)
    const distinctId = [...new Set(cart.map(id => id.id))]
    const data = isProduct ? product : cart
    const buttonText = isProduct ? 'Add to cart': 'Remove from cart'
    const buttonFunction = isProduct ? addToCart : removeFromCart
    return (
        <div>
            {data && data.map(item => 
            <div className={style.product} key={item.id}>{item.name} 
            <span>{item.price}</span> 
            <span>({isProduct?item.total:item.inCart})</span>
            <button onClick={()=>buttonFunction(item.id)}>{buttonText}</button></div>)}
        </div>
    )
}
