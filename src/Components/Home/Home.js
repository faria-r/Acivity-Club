import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';
import Time from '../TimeCart/Time';

const Home = () => {
    const [activity,setactivity] = useState([]);
    const [time,settime] = useState(0);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setactivity(data))

    },[]);

    //click handler for add to cart button
    const handleAddToCart = () =>{
        console.log('clicked');
    }
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
             handler={handleAddToCart}
             ></Activity>
            </div>
           <div>
           <Time></Time>
           </div>
          </div>

{/* accordion for question and answere  */}
<h3 className='text-center mt-5 mb-3 '>Some Basic Concepts Of React!</h3>
        <div className="accordion mt-3 container" id="accordionPanelsStayOpenExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        How Does React Work?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div className="accordion-body">
       <p>Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser. <br />
       React finds out what changes have been made, and changes only what needs to be changed. That is how React Works. </p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
       Whats the difference between props and state?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
      <div className="accordion-body">
        <p>In props: The Data is passed from one component to another.props is immutable.Props can be used with state and functional components.<br />
          In State:The Data is passed within the component only.
          State is Mutable. </p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        What are the functionality Of useEffect except data loading?
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
      <div className="accordion-body">
        Except fetching data from API , useEffect also Update the DOM and timers.
      </div>
    </div>
  </div>
</div>
        </div>

        
    
    );
};

export default Home;