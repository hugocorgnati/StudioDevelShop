import React from 'react'
import logo from '../assets/img/logo.png'
import Cart from '../pages/Cart'
import { Link, NavLink } from "react-router-dom"
import navBar from "../style/navBar.css"
import { useCartContext } from "../context/cartContext";
import { AiOutlineShoppingCart } from "react-icons/ai";



const NavBar = () => {
    const { cart, getCartQty } = useCartContext();
    const links = ["Obras", "Objetos"]

    return (
        <header className='navbar'>
            <Link to="/">
                <img src={logo} className='navbarLogo' alt='logo' />
            </Link>
            <div className="navbarNav">
                {links.map((link) => {
                    return (
                        <NavLink
                            className={({ isActive }) => (isActive ? "navbarLink navbarLinkActive" : "navbarLink")}
                            to={`/category/${link.toLowerCase()}`}
                            key={link}
                        >
                            {link}
                        </NavLink>
                    )
                })}
            </div>
            <div className='headerButtons'>
                <Link to="/cart">
                    <AiOutlineShoppingCart />{" "}
                    <span className="navbarCartQty">{getCartQty()}</span>
                </Link>
            </div>
        </header>
    )
}

export default NavBar