import React, { useContext } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsSearch } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { cartStore } from '../../../App';
const HeadNavBar = () => {
    const [cartId] = useContext(cartStore)
    return (
        <nav className='navbar fixed-top navbar-expand-lg navbar-light bg-light' style={{ marginBottom: '0px' }}>
            <div className='container' style={{ height: '40px' }}>
                <h2><BsSearch /></h2>
                <NavLink
                    className="nav-link"
                    exact
                    to="/"
                >
                    <h2 className='navbar-text mx-auto'>AyeJude</h2>
                </NavLink>

                <NavLink
                    className="nav-link"
                    exact
                    to="/cart"
                >
                    <div style={{ display: 'flex' }}>
                        <h2><AiOutlineShoppingCart /></h2><p style={{ color: 'orange' }}>{cartId.length}</p>
                    </div>
                </NavLink>
            </div>
        </nav >
    )
}

export default HeadNavBar
