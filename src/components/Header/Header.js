import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className="site-logo">
                <img src={logo} alt="site-logo" />
            </div>
            <nav>
                <ul>
                    <li><a href="/shop">Shop</a></li>
                    <li><a href="/review">Order Review</a></li>
                    <li><a href="/inventory">Manage Inventory</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;