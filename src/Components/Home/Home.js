import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';

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
           <Activity activity={activity} setactivity={setactivity}></Activity>
        </div>
    );
};

export default Home;