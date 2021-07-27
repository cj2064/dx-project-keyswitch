import React from 'react'
import { Link } from 'react-router-dom';

import keyswitch_icon from '../keyswitch_icon.png';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-between">
            <Link className="navbar-brand" to="/">
                <img className="brand" src={keyswitch_icon} alt='logo' /> 
            </Link>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">KeySwitch</Link>
                </li>
                <li className="nav-item">
                    <Link to="/keyboards" className="nav-link">Keyboards</Link>
                </li>
                <li className="nav-item">
                    <Link to="/shopping-cart" className="nav-link">Shopping Cart</Link>
                </li>
                <li className="nav-item">
                    <Link to="/account" className="nav-link">Account</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar