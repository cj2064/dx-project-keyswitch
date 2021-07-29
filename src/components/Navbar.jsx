import React from 'react'
import { Link } from 'react-router-dom';
import keyswitch_icon from '../keyboard_5643.png';
import { FaShoppingCart } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaKeyboard } from 'react-icons/fa';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <div className="Navbar-container container">
            <nav className="navbar navbar-expand-sm bg-light navbar-light justify-content-between">
                <Link className="navbar-brand" to="/">
                    <img className="brand" src={keyswitch_icon} alt='logo' /> 
                    KeySwitch
                </Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/keyboards" className="nav-link"><FaKeyboard /> Keyboards</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/shopping-cart" className="nav-link"><FaShoppingCart /> Shopping Cart</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/account" className="nav-link"><FaUser /> Sign Up / Log In</Link>
                    </li>
                </ul>
            </nav>
        </div>
        
    )
}

export default Navbar