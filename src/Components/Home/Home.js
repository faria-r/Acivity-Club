import React, { useEffect, useState } from 'react';
import Accordion from '../Accordion/Accordion';
import Activity from '../Activity/Activity';
import Time from '../TimeCart/Time';
import './Home.css'
let totalTime = 0;
const Home = () => {
    const [activity,setactivity] = useState([]);

    const [timeDuration,settimeDuration] = useState(0);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setactivity(data))

    },[]);
  
    const handleTimeDuration = (time)=>{
        const newTime = time;
        totalTime =  totalTime + newTime; 
        settimeDuration(totalTime);
       }
    return (
        <div>
           <div>
            <div className='header text-center text-primary rounded shadow-lg p-3'>
            <img src="https://cdn-icons-png.flaticon.com/512/7469/7469316.png" alt="" />
            <h2 className='ms-5 text-center'>The Gaming Zone</h2>
            </div>
            <h3 className='m-3 text-primary rounded p-3 border-primary'>Let's Play Now!</h3>
            </div> 
          <div className='d-lg-flex flex-lg-row flex-sm-column-reverse'>
            <div>
            <Activity
             activity={activity} 
             setactivity={setactivity}
             handleTimeDuration={handleTimeDuration}
             ></Activity>
            </div>
           <div>
           <Time 
           timeDuration={timeDuration}
           settimeDuration={settimeDuration}
           ></Time>
           </div>
          </div>

{/* accordion for question and answere  */}
        <Accordion></Accordion>
        </div>

        
    
    );
};

export default Home;