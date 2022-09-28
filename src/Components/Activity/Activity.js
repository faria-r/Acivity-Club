import React from 'react';
import './Activity.css'
import SingleActivity from '../SingleActivity/SingleActivity';

const Activity = ({activity,setactivity},handler) => {
   console.log(handler);
    return (
        <div>
           <div className='card-container'>
           {
                activity.map(single => (<SingleActivity 
                    key={single.id} 
                    activity={activity} 
                    setactivity={setactivity}
                    singleActivity = {single}
                    handler={handler}
                    ></SingleActivity>))
            }
           </div>
        </div>
    );
};

export default Activity;