import React from 'react';
import './navbar.css';

export default function Navbar() {
    return (
        <div>
            <a href="#about">Contact</a>
            <a href="#contact">Experience</a>
            <a href="#news">Portfolio</a>
            <a className='about' href="#home">About Us</a>
        </div>
    )
}
