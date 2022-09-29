import React from 'react';

const Accordion = () => {
    return (
      <div>
        <h2 className='text-center border border-primary bg-light shadow p-3 m-4 rounded'>React Basic Coceptual Question And Answere.</h2>
          <div class="accordion container mt-2 mb-4 py-5" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      How Does React Work?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <p>Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, where it does all the necessary manipulating, before making the changes in the browser. <br />
       React finds out what changes have been made, and changes only what needs to be changed. That is how React Works. </p>

      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      Whats the difference between props and state?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <p>In props: The Data is passed from one component to another.props is immutable.Props can be used with state and functional components.<br />
          In State:The Data is passed within the component only.
          State is Mutable. </p>

      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      What are the functionality Of useEffect except data loading?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      Except fetching data from API , useEffect also Update the DOM and timers.
 We  use this hook whenever you we need to run some side effects (like sending http requests) in our component.

      </div>
    </div>
  </div>
</div>
      </div>
    );
};

export default Accordion;