import React from 'react'
import './component.css'
// almost all sections have same styles
//  so it is safe to say we create a component to reuse
/**
 * * All sections are 
 * * 80vh
 * * displayed flex
 * * Direct child must always be a section
 * * has at least about 30px space on top
 * * has gap of at least 15px between child
 */
export const Section = ({id='page', children, isSideBySide=true, ...otherProps }) => {
    return (
        <main id={id} {...otherProps} className={` isFlexed section ${isSideBySide ? 'flx-direction-row' : 'flx-direction-col'}`}>
            {children}
        </main>
    )
}
