import React, { useContext } from 'react'
import './CSS/shopcategory.css'
import { ShopContext } from '../context/ShopContext'
import drop from '../context/assets/dropdown_icon.png' 
import Item from '../components/Items/item'

export const ShopCategory = (props) => {

  const { all_product } = useContext(ShopContext)

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className='shopcategory-IndexSort'>
        <p>
          <span>Showing 1-12</span> out of {all_product.length} Products
        </p>
        <div className="shopcategory-Sort">
          Sort by <img src={drop} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item 
                key={i} 
                id={item.id} 
                name={item.name} 
                image={item.image} 
                new_price={item.new_price} 
                old_price={item.old_price} 
              />
            )
          }
          return null
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
