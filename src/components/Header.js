import React from 'react'
import E from '../image/e.png'
import N from '../image/n.png'
import R from '../image/R.png'
import T from '../image/t.png'
import V from '../image/v.png'
import Logo from '../image/Vector.png'
const links = ["About Us", "Portfolio", "Experience", "Contact"]
const logoText = [R, E, V, E, N, T]
export const Header = () => {
    const toggleMobileNav = () => {
        const toggle = document.getElementById('mobile');
        toggle?.classList.toggle("open");
    }
    return (
        <header>
            <div className="imageContainer">
                <img className='logoFloat' src={Logo} alt='logo' />
                <div className='reventContainer'>
                    {logoText.map((revent, index) => (
                        <img className='reventLogo' src={revent} key={index} alt={index} />
                    ))}
                </div>
                <p className='reventDigital'>DIGITAL</p>
                {/* reventContainer ends here */}
            </div>
            <ul className='mainNav'>
                {links.map(link => (
                    <li key={link}>
                        <a className='links' href={`#${link}`}>
                            {link}
                        </a>
                    </li>
                ))}
            </ul>
            <div id='mobile' className='bars' onClick={toggleMobileNav}>
                <div className='bar1'></div>
                <div className='bar2'></div>
                <div className='bar3'></div>
                <ul className='mobileMainNav'>
                    {links.map(link => (
                        <li key={link}>
                            <a className='links' href={`#${link}`}>
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    )
}
