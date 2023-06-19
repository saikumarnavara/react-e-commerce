import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsSearch } from "react-icons/bs";
const HeadNavBar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light' style={{ backgroundColor: 'white', marginBottom: '0px' }}>
            <div className='container' style={{ height: '40px' }}>
                <h2><BsSearch /></h2>
                <a className='navbar-brand' href='/'>
                    <h2 className='navbar-text mx-auto'>AyeJude</h2>
                </a>
                <a className='navbar-brand' href='/cart'>
                    {/* <img src='...' alt='loading...' width='50' height='50' /> */}
                    <h2><AiOutlineShoppingCart /></h2>

                </a>
            </div>
        </nav>
    )
}

export default HeadNavBar
