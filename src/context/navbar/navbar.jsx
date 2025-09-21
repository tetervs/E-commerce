import React, { useContext, useRef, useState } from 'react';
import './Navbar.css'


import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../ShopContext';
import nav_dropdown from '../assets/nav_dropdown.png'

export const Navbar = () => {

    const [menue,setMenue] = useState("Shop")
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();

    //for dropdown 
    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menue-visible');
        e.target.classList.toggle('open');
    }

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt=""/>
            <p>SHOPPER</p>
        </div>
        <img onClick={dropdown_toggle} src={nav_dropdown} alt="" />
        <ul ref={menuRef} className="nav-menue">
            <li onClick={() => setMenue("shop")}>
                <Link style={{textDecoration: 'none'}} to='/'>Shop</Link>
                {menue === "shop" ? <hr /> : <></>}
            </li>
            <li onClick={() => setMenue("mens")}>
                <Link style={{textDecoration: 'none'}} to='/mens'>Men</Link>
                {menue === "mens" ? <hr /> : <></>}
            </li>
            <li onClick={() => setMenue("womens")}>
                <Link style={{textDecoration: 'none'}} to='/womens'>Women</Link>
                {menue === "womens" ? <hr /> : <></>}
              </li>
            <li onClick={() => setMenue("kids")}>
                <Link style={{textDecoration: 'none'}} to='/kids'>Kids</Link>
                {menue === "kids" ? <hr /> : <></>}
            </li>
        </ul>

        <div className="nav-login-cart">
            <Link to='/login'>
                <button>Login</button>
            </Link>
            <Link to='/cart'>
                <img src={cart_icon} alt="" />
            </Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>

    </div>
  )
}

export default Navbar