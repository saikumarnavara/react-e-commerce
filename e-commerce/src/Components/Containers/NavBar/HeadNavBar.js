import React, { useContext } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsSearch } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { cartStore } from '../../../App';
import { wishListItems } from '../../../App';
import { AiFillHeart } from "react-icons/ai";
const HeadNavBar = () => {
    const [cartId] = useContext(cartStore)
    const [wishList] = useContext(wishListItems)
    return (
        <nav className='navbar fixed-top navbar-expand-lg navbar-light bg-light' style={{ marginBottom: '0px' }}>
            <div className='container' style={{ height: '40px', color: 'blue' }}>
                <h2><BsSearch /></h2>
                <NavLink
                    className="nav-link"
                    exact
                    to="/"

                >
                    <h2 className='navbar-text mx-auto' style={{ color: 'blue' }}>AyeJude</h2>
                </NavLink>
                <div style={{ display: 'flex' }}>
                    <NavLink
                        className="nav-link"
                        exact
                        to="/wishlist"
                    >
                        <div style={{ display: 'flex' }}>
                            <h2><AiFillHeart /></h2><p style={{ color: 'orange', fontWeight: '600' }}>{wishList.length}</p>
                        </div>
                    </NavLink>
                    <NavLink
                        className="nav-link"
                        exact
                        to="/cart"
                    >
                        <div style={{ display: 'flex' }}>
                            <h2><AiOutlineShoppingCart /></h2><p style={{ color: 'orange', fontWeight: '600' }}>{cartId.length}</p>
                        </div>
                    </NavLink>
                </div>

            </div>
        </nav >
    )
}

export default HeadNavBar
