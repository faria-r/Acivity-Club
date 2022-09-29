import React from 'react';

const Self = () => {
    return (
        <div>
             <div className='mb-4'>
            <h2 className='shadow rounded text-primary text-center py-2'>Faria Rahman</h2>
            <p>Feni,Bangladesh.</p>
            <div className='d-flex shadow rounded p-2'>
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
        </div>
    );
};

export default Self;