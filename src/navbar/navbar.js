import React from 'react';
import './navbar.css';

export default function Navbar() {
    return (
        <div className='navbar'>
            <a href="#contact">Contact</a>
            <a href="#experience">Experience</a>
            <a href="#portfolio">Portfolio</a>
            <a className='about' href="#about">About Us</a>
        </div>
    )
}
