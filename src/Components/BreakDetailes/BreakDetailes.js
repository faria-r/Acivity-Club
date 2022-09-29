import React from 'react';
const BreakDetailes = ({time}) => {
    
    return (
        <div>
            <h4>Exercise Detailes</h4>
            <div className='d-flex justify-content-evenly rounded p-2 bg-secondary shadow mb-3'>
            <h6>Break Time</h6>
            <p>{time}</p>
          </div>
        </div>
    );
};

export default BreakDetailes;