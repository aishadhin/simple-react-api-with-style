import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <ul className='menu'>
                <li className='menu-item'><a className='menu-link' href='#'>Home</a></li>
                <li className='menu-item'><a className='menu-link' href='#'>Shop</a></li>
                <li className='menu-item'><a className='menu-link' href='#'>About</a></li>
                <li className='menu-item'><a className='menu-link' href='#'>Cart</a></li>
                <li className='menu-item'><a className='menu-link' href='#'>Contact</a></li>
            </ul>
        </div>
    );
};

export default Header;