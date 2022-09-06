import React from 'react'
import './icon.css'

export default function Icon({ src }) {
    return (
        <>
            <img className='parent-icon' src='O.png' alt='parenticon' />
            <img className='parent-icon' src={src} alt='icon' />
        </>
    )
}
