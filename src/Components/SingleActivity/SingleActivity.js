import React from 'react';
import './SingleActivity.css'

const SingleActivity = ({activity,singleActivity,setactivity,handleTimeDuration}) => {
    const {name, picture,Time,id}= singleActivity;
    return (
    <div className="cards mb-3" >
    <div>
      <img src={picture} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div>
      <div className='card-info'>
        <h5>{name}</h5>
        <p>Time:{Time} Minute</p>
        <button onClick={() =>handleTimeDuration(Time)} className='btn btn-rounded btn-primary'>Add To List</button>
      </div>
    </div>
    </div>
        
    );
};

export default SingleActivity;