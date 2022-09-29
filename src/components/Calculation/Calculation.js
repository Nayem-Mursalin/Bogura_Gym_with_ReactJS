import React from 'react';
import './Calculation.css'

const Calculation = (props) => {
    return (
        <div>
            <button className='time-btn' onClick={() => props.handleBreakTime(props.time)}>{props.time}sec</button>
        </div>
    );
};

export default Calculation;