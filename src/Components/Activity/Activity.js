import React from 'react';
import './Activity.css'
import SingleActivity from '../SingleActivity/SingleActivity';

const Activity = ({activity,setactivity}) => {
    return (
        <div>
            <h2>I am Activity</h2>
           <div className='card-container'>
           {
                activity.map(single => (<SingleActivity 
                    key={single.id} 
                    activity={activity} 
                    setactivity={setactivity}
                    singleActivity = {single}
                    ></SingleActivity>))
            }
           </div>
        </div>
    );
};

export default Activity;