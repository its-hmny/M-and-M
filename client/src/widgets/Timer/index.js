import React, { useState, useEffect } from 'react'


const Timer = ({ value, onTimeout }) => {
    const [seconds, setSeconds] = useState(value)

    useEffect(() => {
        if (seconds !== 0) {
            setTimeout(() => {
                setSeconds((prevstate) => prevstate - 1)
            }, 1000)
        }
        else {
            onTimeout(value)
        }
    }, [seconds])

    return (
        <div className="Timer">
            <div className="Timer-minutes">
                {Math.floor(seconds / 60)}
            </div>
            <div className="Timer-seconds">
                {seconds % 60}
            </div>
        </div >
    )
}
export default Timer