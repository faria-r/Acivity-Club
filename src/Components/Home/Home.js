import React, { useEffect, useState } from 'react';
import Accordion from '../Accordion/Accordion';
import Activity from '../Activity/Activity';
import Time from '../TimeCart/Time';

const Home = () => {
    const [activity,setactivity] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setactivity(data))

    },[]);
    return (
        <div>
           <div>
            <h2>Daily-LifeStyle!</h2>
            <h3>Select Todays Activity To DO!</h3>
            </div> 
          <div className='d-flex'>
            <div>
            <Activity
             activity={activity} 
             setactivity={setactivity}
             ></Activity>
            </div>
           <div>
           <Time></Time>
           </div>
          </div>

{/* accordion for question and answere  */}
        <Accordion></Accordion>
        </div>

        
    
    );
};

export default Home;