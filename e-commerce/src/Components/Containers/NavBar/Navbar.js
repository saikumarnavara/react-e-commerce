import React from 'react'
import { NavLink } from 'react-router-dom';
import BrandingHeader from './BrandingHeader';
import HeadNavBar from './HeadNavBar';
import shopping_logo from '../../../assests/favicon/shopping_logo.png'

const Navbar = () => {
    return (
        <div className='navbar-container'>
            {/* <BrandingHeader /> */}
            <HeadNavBar />
            <nav class="navbar fixed-top navbar-expand-lg  navbar-light bg-light" style={{ marginTop: '50px' }}>

                <div class="container-fluid">
                    <NavLink className="nav-link" exact to="/" activeClassName="active"
                        style={{ fontWeight: '700', fontSize: '26px' }}>
                        {/* <img
                            src=''
                            alt=""
                            style={{ width: '80px' }}
                        /> */}
                        BestBuy!
                    </NavLink>

                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div
                        class="collapse navbar-collapse justify-content-center"
                        id="navbarNavDropdown"
                    >
                        <ul class="navbar-nav" style={{ alignItems: "center" }}>
                            <li class="nav-item">
                                <NavLink
                                    className="nav-link"
                                    exact
                                    to="/"
                                    activeClassName="active highlighted-color"
                                    style={{ fontWeight: 700, fontSize: "20px" }}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink
                                    className="nav-link"
                                    exact
                                    to="/men"
                                    activeClassName="active"
                                    style={{ fontWeight: 700, fontSize: "20px" }}
                                >
                                    Men Fashion
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink
                                    className="nav-link"
                                    exact
                                    to="/women"
                                    activeClassName="active"
                                    style={{ fontWeight: 700, fontSize: "20px" }}
                                >
                                    Women Fashion
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink
                                    className="nav-link"
                                    exact
                                    to="/mobiles"
                                    activeClassName="active"
                                    color="#2924a6"
                                    style={{ fontWeight: 700, fontSize: "20px" }}
                                >
                                    Electronics
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink
                                    className="nav-link"
                                    exact
                                    to="/homefurniture"
                                    activeClassName="active"
                                    color="#2924a6"
                                    style={{ fontWeight: 700, fontSize: "20px" }}
                                >
                                    Home & Furniture
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink
                                    className="nav-link"
                                    exact
                                    to="/beauty"
                                    activeClassName="active"
                                    color="#2924a6"
                                    style={{ fontWeight: 700, fontSize: "20px" }}
                                >
                                    Beauty & Grooming
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
