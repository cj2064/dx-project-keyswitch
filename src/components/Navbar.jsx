import React from 'react'
import { Link } from 'react-router-dom';
import { FaRegKeyboard } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaKeyboard } from 'react-icons/fa';
import { FaDollarSign } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <div className="Navbar-container">
            <nav className="navbar navbar-expand-sm bg-light navbar-light justify-content-between">
                <Link className="navbar-brand" to="/">
                    <FaRegKeyboard className="brand-icon mx-3" />
                    KeySwitch
                </Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/keyboards" className="nav-link"><FaKeyboard /> Keyboards</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/sell-keyboard" className="nav-link"><FaDollarSign /> Sell Keyboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/shopping-cart" className="nav-link"><FaShoppingCart /></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/account" className="nav-link"><FaUser /></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/search-keyboards" className="nav-link"><FaSearch /></Link>
                    </li>
                </ul>
            </nav>
        </div>
        
    )
}

export default Navbar