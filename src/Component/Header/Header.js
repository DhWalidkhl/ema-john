import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <div>
                <a href="/Home">
                    <img src={logo} alt="" />
                </a>
            </div>
            <div>
                <ul className='primary-menu'>
                    <li><a href="/Home">Home</a></li>
                    <li><a href="/About">About</a></li>
                    <li><a href="/Shop">Shop</a></li>
                    <li><a href="/Login">Login</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;