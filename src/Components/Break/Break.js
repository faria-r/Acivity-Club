import React, { useState } from 'react';
import BreakDetailes from '../BreakDetailes/BreakDetailes';
import './Break.css'

const Break = () => {
    const [time,settime] = useState(0);
    const setBreakTime = (id)=>{
        const btnTimeField= document.getElementById(id);
        const btnTime = btnTimeField.innerText;
        settime(btnTime);
    }

    return (
        <div>
            <div className='mb-4'>
            <h4>Add A Break</h4>
            <div className='break-time-container'>
                <button id='one' onClick={()=> setBreakTime('one')} className="break-time">21</button>
                <button id='two' onClick={()=> setBreakTime('two')}   className="break-time">30</button>
                <button id='three' onClick={()=> setBreakTime('three')}  className="break-time">40</button>
                <button id='four' onClick={()=> setBreakTime('four')}  className="break-time">50</button>
            </div>
           </div>
           <BreakDetailes
           time={time}
           settime= {settime}
           ></BreakDetailes>
        </div>
    );
};

export default Break;