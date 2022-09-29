import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ActivityDetailes = ({timeDuration}) => {
    const handleCompleteBtn =() =>{
        toast("Wow Good Job !");
    }
    return (
        <div>
             <div>
          <div className='d-flex justify-content-evenly rounded p-2 bg-secondary shadow mb-3'>
            <h6>Exercise Time</h6>
            <p>{timeDuration} Minutes</p>
          </div>
          <button onClick={handleCompleteBtn} className='btn btn-primary w-100 p-2 '>Activity Complete</button>
          <ToastContainer></ToastContainer>
           </div>
        </div>
    );
};

export default ActivityDetailes;