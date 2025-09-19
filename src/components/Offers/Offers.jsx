import React from 'react'
import './Offers.css'
import excluse_image from '../../context/assets/exclusive_image.png'

export const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers for you</h1>
            <p>ONLY BEST SELLERS PRODUCT</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={excluse_image} alt="" />
        </div>
    </div>
  )
}

export default Offers