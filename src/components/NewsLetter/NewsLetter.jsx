import React from 'react'
import './NewsLetter.css' 

export const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Excluse Offers on Your Email</h1>
        <p>Subscribe to our  NewsLetter and stay updated</p>
        <div>
            <input type='email' placeholder='example@gmail.com'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter