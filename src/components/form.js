import React from 'react'
import { Button } from './Button'

export default function Form() {
    return (
        <form style={{ width: '100%' }}>
            <ul className="form-style-1" style={{ width: '100%' }}>
                <li>
                    <input type="text" name="field1" className="field-divided" />
                    <input type="text" name="field2" className="field-divided" />
                </li>
                <li>
                    <input type="email" name="field3" className="field-long" />
                </li>
                <li>
                    <textarea name="field5" id="field5" ></textarea>
                </li>
                <Button className='isHalfSize'>Send message</Button>
            </ul>
        </form>
    )
}
