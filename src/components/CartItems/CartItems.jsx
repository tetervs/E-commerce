import React, { useContext } from 'react'
import './CartItems.css'
import {ShopContext} from '../../context/ShopContext'

export const CartItems = () => {
    const {all_product, CartItems, removeFromCart} = useContext(ShopContext)
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Prince</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
    </div>
  )
}

export default CartItems