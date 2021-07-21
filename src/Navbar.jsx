import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import wasd_keycap_icon from './wasd_keycap_icon.jpeg';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-between">
            <Link className="navbar-brand" to="/">
                <img className="brand" src={wasd_keycap_icon} alt='logo' /> 
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