import React from 'react'
import styles from './component.css'
import Logo from '../image/Vector.png'
import R from '../image/R.png'
import E from '../image/e.png'
import V from '../image/v.png'
import N from '../image/n.png'
import T from '../image/t.png'
const links = ["About Us", "Portfolio", "Experience", "Contact"]
const logoText = [R, E, V, E, N, T]
export const Header = () => {
    return (
        <header>
            <div className="imageContainer">
                <img className='logoFloat' src={Logo} alt='logo' />
                <div className='reventContainer'>
                    {logoText.map((revent, index) => ( // index as key is not recomemded
                        <img className='reventLogo' src={revent} key={index} />
                    ))}
                </div>
                <p className='reventDigital'>DIGITAL</p>
                {/* reventContainer ends here */}
            </div>
            <ul>
                {links.map(link => (
                    <li key={link}>
                        <a className='links' href={`#${link}`}>
                            {link}
                        </a>
                    </li>
                ))}
            </ul>
        </header>
    )
}
