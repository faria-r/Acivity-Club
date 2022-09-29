import ActivityDetailes from '../ActivityDetails/ActivityDetailes';
import Break from '../Break/Break';
import Self from '../SelfIntro/Self';
import './Time.css'

const Time = () => {
    return (
        <div className='ms-5 px-3 bg-light py-5 rounded shadow'>
           
           {/* self intro section  */}
          <Self></Self>

           {/* break time section  */}
           <Break></Break>

           {/* exercise detailes section  */}
          <ActivityDetailes></ActivityDetailes>
          
        </div>
    );
};

export default Time;