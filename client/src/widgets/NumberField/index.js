import React, { } from 'react';

// USAGE: instantiate ref with useRef() in upper component, pass it to NumberField:
//        value of input will be in ref.current.value

// Needs forwardRef instead of just taking it as argument for react reasons
const NumberField = React.forwardRef(
    ({ children }, ref) => {
        return (
            <div className="NumberField">
                <input type="text" className="NumberField-input" placeholder={children} ref={ref} />
                {/* ref is a property in input JSX-React, does what you expect it to correctly*/}
            </div>
        )
    })

export default NumberField;