import React from 'react';
import './Activity.css'
import SingleActivity from '../SingleActivity/SingleActivity';

const Activity = ({activity,setactivity,handleTimeDuration}) => {
  
    return (
        <div>
           <div className='card-container'>
           {
                activity.map(single => (<SingleActivity 
                    key={single.id} 
                    activity={activity} 
                    setactivity={setactivity}
                    singleActivity = {single}
                    handleTimeDuration={handleTimeDuration}
                    ></SingleActivity>))
            }
           </div>
        </div>
    );
};

export default Activity;