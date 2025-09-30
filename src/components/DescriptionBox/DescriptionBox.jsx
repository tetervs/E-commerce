import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-nav">
            <div className="descriptionbox-navbox">
                Description
            </div>
            <div className="descriptionbox-navbox fade">
                Reviews (122)
            </div>
        </div>
        <div className="descriptionbox-desc">
            <p>An e-commerce website is an online platform that facilitates buying and selling of products or services over the internet. It serves as a virtual marketplace where buisnesses and individuals can showcase their products, interact with customers and conduct transactions without need of physical presence.</p>
        </div>
    </div>
  )
}

export default DescriptionBox