import React from 'react';
import './component.css';

export function Button({ children, className }) {
    return (
        <button className={`${className} isHalfWidth`}>{children}</button>
    )
}
