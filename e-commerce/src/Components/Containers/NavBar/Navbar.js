import React from 'react'
import { NavLink } from 'react-router-dom';
import BrandingHeader from './BrandingHeader';
import HeadNavBar from './HeadNavBar';
const Navbar = () => {
    return (
        <div>
            <BrandingHeader />
            <HeadNavBar />
            <nav class="navbar navbar-expand-lg  navbar-light bg-light">
                <div class="container-fluid">
                    <NavLink className="nav-link" exact to="/" activeClassName="active">
                        <img
                            src='..'
                            alt=""
                            width="50"
                            height="44"
                            color="#2924a6"
                        />

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
                                    Men's Clothing
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
                                    Women Clothing
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
                                    Mobile's
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink
                                    className="nav-link"
                                    exact
                                    to="/accessories"
                                    activeClassName="active"
                                    color="#2924a6"
                                    style={{ fontWeight: 700, fontSize: "20px" }}
                                >
                                    Accessories
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink
                                    className="nav-link"
                                    exact
                                    to="/Fragnance"
                                    activeClassName="active"
                                    color="#2924a6"
                                    style={{ fontWeight: 700, fontSize: "20px" }}
                                >
                                    Fragnance's
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
