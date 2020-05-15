import React,{ useContext } from 'react'

import {NewContext} from '../context/shopContext'
import style from './productList.module.css'
export default function ProductList() {
    
    const { product, isProduct, addToCart, cart, removeFromCart } = useContext(NewContext)
    // console.log(product)
    const carts = cart.filter(item => item.shop == false)
    console.log('filter' , cart)
    const data = isProduct ? product : carts 
    const buttonText = isProduct  ? 'Add to cart': 'Remove from cart'

    
    return (
        <div>
            {data && data.map(item => 
            item.total > 0 && 
            <div className={style.product} key={item.id}>{item.name} 
            <span>{item.price}</span> 
            <span>({isProduct ? item.total:item.inCart})</span>
            <button onClick={() => isProduct ? addToCart(item.id):removeFromCart(item.id)}>{buttonText}</button></div>)}
        </div>
    )
}
