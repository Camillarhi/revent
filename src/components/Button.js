import React from 'react';
import './component.css';

export function Button({ children }) {
    return (
        <button className='isHalfWidth'>{children}</button>
    )
}
