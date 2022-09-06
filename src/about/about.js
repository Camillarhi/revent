import React from 'react'
import Title from '../title/title'

export default function About() {
    return (
        <>
            <Title title='About Us' />
            <div>
                <img className='about-png' src='about.png' alt='about' />
                <div>
                    <p className='focus'>We focus on value and excellence</p>
                </div>
            </div>
        </>
    )
}
