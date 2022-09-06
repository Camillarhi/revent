import React from 'react'
import Title from '../title/title';
import Button from '../utils/button/button';
import './about.css';

export default function About() {
    return (
        <>
            <Title title='About Us' />
            <div>
                <img className='about-png' src='about.png' alt='about' />
                <div>
                    <p className='focus'>We focus on value and excellence</p>
                    <p className='provision'>We are focused on providing products which deliver demonstrably good value for our clients and end-customers – be that a specific return, outperforming an index or achieving returns at lower risk.​

Through achieving value for the clients whose assets we manage, efficiently controlling costs, effectiveness and efficiency, we deliver value to our shareholders and wider stakeholders​
</p>
<Button text="Work with Us" />
                </div>
            </div>
        </>
    )
}
