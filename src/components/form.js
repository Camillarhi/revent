import React from 'react'

export default function Form() {
    return (
        <form style={{background:"red"}}> 
            <ul class="form-style-1" style={{background:"blue"}}>
                <li>
                    <input type="text" name="field1" class="field-divided" placeholder="First" />
                    <input type="text" name="field2" class="field-divided" placeholder="Last" />
                </li>
                <li>
                    <input type="email" name="field3" class="field-long" />
                </li>
                <li>
                    <textarea name="field5" id="field5" class="field-long field-textarea"></textarea>
                </li>
            </ul>
        </form>
    )
}
