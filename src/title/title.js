import React from 'react';
import './title.css';

export default function Title({ title }) {
    return (
        <div className='title-div'>
            <h2 className='title'>{title}</h2>
            <img src='line.png' alt='line' />
        </div>
    )
}
