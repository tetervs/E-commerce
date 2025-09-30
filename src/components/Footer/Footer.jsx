import React from 'react'
import './Footer.css'
import footer_logo from '../../context/assets/logo_big.png'
import insta_icon from '../../context/assets/instagram_icon.png'
import pin_icon from '../../context/assets/pintester_icon.png'
import wa_icon from '../../context/assets/whatsapp_icon.png'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className='footer-link'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-container-container">
                <img src={insta_icon} alt="" />
            </div>
            <div className="footer-container-container">
                <img src={pin_icon} alt="" />
            </div>
            <div className="footer-container-container">
                <img src={wa_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2025 - All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer