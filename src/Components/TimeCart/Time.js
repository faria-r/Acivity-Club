import React from 'react';
import './Time.css'

const Time = () => {
    return (
        <div className='ms-5 px-3 bg-light py-5 rounded shadow'>
           {/* self intro section  */}
           <div className='mb-4'>
            <h2 className='bg-gray shadow rounded text-primary text-center'>Faria Rahman</h2>
            <p>Feni,Bangladesh.</p>
            <div className='d-flex shadow bg-gray rounded p-2'>
                <div className='me-3 rounded bg-secondary p-2'>
                    <h4>51kg</h4>
                    <h6>Weight</h6>
                </div>
                <div className='me-3 rounded bg-secondary p-2'>
                    <h4>5.3</h4>
                    <h6>Height</h6>
                </div>
                <div className='me-3 rounded bg-secondary p-2'> 
                    <h4>22yrs</h4>
                    <h6>Age</h6>
                </div>
            </div>
           </div>
           {/* break time section  */}
           <div className='mb-4'>
            <h4>Add A Break</h4>
            <div className='break-time-container'>
                <button className="break-time">20</button>
                <button className="break-time">30</button>
                <button className="break-time">40</button>
                <button className="break-time">50</button>
            </div>
           </div>
           {/* exercise detailes section  */}
           <div>
           <h4>Exercise Detailes</h4>
          <div className='d-flex justify-content-evenly rounded p-2 bg-secondary shadow mb-3'>
            <h6>Exercise Time</h6>
            <p>00</p>
          </div>
          <div className='d-flex justify-content-evenly rounded p-2 bg-secondary shadow mb-3'>
            <h6>Break Time</h6>
            <p>00</p>
          </div>
           </div>
           <button className='btn btn-primary w-100 p-2 '>Activity Complete</button>
        </div>
    );
};

export default Time;