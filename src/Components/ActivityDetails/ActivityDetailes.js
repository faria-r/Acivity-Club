import React from 'react';
import Swal from 'sweetalert2'

const ActivityDetailes = ({timeDuration}) => {
    const handleCompleteBtn =() =>{
        Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'WoW! You Have Done A Good Job',
            showConfirmButton: false,
            timer: 1500
          })
    }
    return (
        <div>
             <div>
          <div className='d-flex justify-content-evenly rounded p-2 bg-secondary shadow mb-3'>
            <h6>Exercise Time</h6>
            <p>{timeDuration}</p>
          </div>
          <button onClick={handleCompleteBtn} className='btn btn-primary w-100 p-2 '>Activity Complete</button>
           </div>
        </div>
    );
};

export default ActivityDetailes;