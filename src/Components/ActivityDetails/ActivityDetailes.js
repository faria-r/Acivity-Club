import React from 'react';

const ActivityDetailes = ({timeDuration}) => {
    return (
        <div>
             <div>
          <div className='d-flex justify-content-evenly rounded p-2 bg-secondary shadow mb-3'>
            <h6>Exercise Time</h6>
            <p>{timeDuration}</p>
          </div>
          <button className='btn btn-primary w-100 p-2 '>Activity Complete</button>
           </div>
        </div>
    );
};

export default ActivityDetailes;