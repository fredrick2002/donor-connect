import './PostRequest.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import img from '../assets/profile.jpg'
import Axios from 'axios';

import HNavbar from './RepPages/HNavbar';
import HFooter from './RepPages/HFooter';

function PostRequest ()
{
    const [hospi_id,setHospiId] = useState('');
    const [hospi_name,setHospiName] = useState('');
    const [blood_grp,setBloodgrp] = useState('');
    const [timeLimitHours, setHours] = useState(0);
    const [timeLimitMinutes, setMinutes] = useState(0);
    const [timeLimitSeconds, setSeconds] = useState(0);

    useEffect(() => {
        setHospiId(sessionStorage.getItem('idhospi') || '');
        console.log(hospi_id);
        setHospiName(sessionStorage.getItem('namehospi') || '');
      }, []);

    const handleSubmit = () => {
        const now = new Date();
        // const today = new Date().toLocaleDateString();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const targetTime = new Date(
            now.getTime() +
              timeLimitHours * 60 * 60 * 1000 +
              timeLimitMinutes * 60 * 1000 +
              timeLimitSeconds * 1000
          );
        const req_date = `${year}-${month}-${day} ${targetTime.getHours()}:${targetTime.getMinutes()}:${targetTime.getSeconds()}`
        // date.setHours(hours);
        // date.setMinutes(minutes);
        // date.setSeconds(seconds);
        // const req_date = date.toISOString();
        Axios.post("http://localhost:3001/api/bloodReq",{
        hospi_id: hospi_id,
        req_date: req_date,
        blood_grp: blood_grp
       
    }).then(()=>{
        console.log("Insert Successfully")
        alert("Request Updated");
    });
      };

    return (
        <div>
            <HNavbar/>
            <div className='profile'>
                <div className='profile-col1'>
                    
                    <div className='profile-inner-col'>
                        <img src={img} />
                        <div>
                            <p className='profile-col1-name'>{hospi_name}</p>
                        </div>
                    </div>

                    <div>
                        <p className='profile-col1-link'><Link to='/hprofile' className='link-color-profile'>Current request</Link></p>
                        <p className='profile-col1-link'><Link to='/hprofile/postreq' className='link-color-profile'>Post a request</Link></p>
                        <p className='profile-col1-link'><Link to='/hprofile/deletereq' className='link-color-profile'>Delete a request</Link></p>
                        <p className='profile-col1-link'><Link to='/' className='link-color-profile'>Log out</Link></p>
                    </div>

                </div>

                <div className="vertical-line"></div>

                <div className='profile-col2'>
                    <h3 className='profile-col2-head'>Post Request</h3>
                    
                    <div className='postrequest'>

                        <div className='right-col'>
                            <p className='regform-p'>Blood Group</p>
                        </div>
                        
                        <div className='right-col'>
                        <select 
                            className='regform-bloodgrp' 
                            id="blood-group-select" 
                            name="blood-group-select" 
                            onChange={(e)=>
                                {
                                    setBloodgrp(e.target.value);
                                }
                            }
                        >
                                <option className='regform-bloodgrp-option' value="">Select blood group</option>
                                <option className='regform-bloodgrp-option' value="" selected disabled></option>
                                <option className='regform-bloodgrp-option' value="A+">A+</option>
                                <option className='regform-bloodgrp-option' value="A-">A-</option>
                                <option className='regform-bloodgrp-option' value="B+">B+</option>
                                <option className='regform-bloodgrp-option' value="B-">B-</option>
                                <option className='regform-bloodgrp-option' value="AB+">AB+</option>
                                <option className='regform-bloodgrp-option' value="AB-">AB-</option>
                                <option className='regform-bloodgrp-option' value="O+">O+</option>
                                <option className='regform-bloodgrp-option' value="O-">O-</option>
                            
                        </select>
                        </div>

                        <div>
                            <p className='regform-p'>Enter Time Limit</p>
                            <div>
                                <div>
                                <label className='postrequest-label'>Hours:</label>
                                <input 
                                    type="number" 
                                    min="0" 
                                    max="23"
                                    name='hour'
                                    id='hour'
                                    className='postrequest-time'
                                    onChange={(e)=>
                                        {
                                            setHours(e.target.value);
                                        }
                                    } 
                                    />
                                </div>
                                <div>
                                <label className='postrequest-label'>Minutes:</label>
                                <input 
                                    type="number" 
                                    min="0" 
                                    max="59"
                                    name='min'
                                    id='min'
                                    className='postrequest-time'
                                    onChange={(e)=>
                                        {
                                            setMinutes(e.target.value);
                                        }
                                    } 
                                    />
                                </div>
                                <div>
                                <label className='postrequest-label'>Seconds:</label>
                                <input 
                                    type="number"
                                    min="0" 
                                    max="59"
                                    name='sec'
                                    id='sec'
                                    className='postrequest-time'
                                    onChange={(e)=>
                                        {
                                            setSeconds(e.target.value);
                                        }
                                    } />
                                </div>
                            </div>
                        </div>

                        <button type="submit" className='postrequest-submit' onClick={handleSubmit}>Post the request</button>


                    </div>
                </div>

            </div>

            <HFooter/>

        </div>
    )
}

export default PostRequest

// import './PostRequest.css'
// import { Link, useHistory } from 'react-router-dom'
// import { useState } from 'react'
// import img from '../assets/profile.jpg'

// import HNavbar from './RepPages/HNavbar';
// import HFooter from './RepPages/HFooter';
// import Content from '../HomePage/Content';

// function PostRequest() {
//     const bloodGroups = [
//         "A+",
//         "A-",
//         "B+",
//         "B-",
//         "AB+",
//         "AB-",
//         "O+",
//         "O-",
//         // Add more blood groups as needed
//     ];
//     const [selectedBloodGroup, setSelectedBloodGroup] = useState("");
//     const [selectedTime, setSelectedTime] = useState("");
//     const history = useHistory();

//     const handleBloodGroupChange = (event) => {
//         setSelectedBloodGroup(event.target.value);
//     };

//     const handleTimeChange = (event) => {
//         setSelectedTime(event.target.value);
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         // Pass the selected blood group and time as props to the Content component
//         history.push({
//             pathname: '/content',
//             state: { bloodGroup: selectedBloodGroup, time: selectedTime }
//         });
//     };

//     return (
//         <div>
//             <HNavbar />
//             <div className='profile'>
//                 <div className='profile-col1'>

//                     <div className='profile-inner-col'>
//                         <img src={img} />
//                         <div>
//                             <p className='profile-col1-name'>Paul Hospitals</p>
//                         </div>
//                     </div>

//                     <div>
//                         <p className='profile-col1-link'><Link to='/hprofile/postreq'>Post a request</Link></p>
//                         <p className='profile-col1-link'><Link to='/hprofile/deletereq'>Delete a request</Link></p>
//                         <p className='profile-col1-link'>Log out</p>
//                     </div>

//                 </div>

//                 <div className="vertical-line"></div>

//                 <div className='profile-col2'>
//                     <h3 className='profile-col2-head'>Post Request</h3>

//                     <div className='postrequest'>

//                         <div className='right-col'>
//                             <p className='regform-p'>Blood Group</p>
//                         </div>

//                         <div className='right-col'>
//                             <select
//                                 className='regform-bloodgrp'
//                                 id="blood-group-select"
//                                 name="blood-group-select"
//                                 value={selectedBloodGroup}
//                                 onChange={handleBloodGroupChange}
//                             >
//                                 <option className='regform-bloodgrp-option' value="">Select blood group</option>
//                                 {bloodGroups.map((bloodGroup) => (
//                                     <option className='regform-bloodgrp-option' key={bloodGroup} value={bloodGroup}>
//                                         {bloodGroup}
//                                     </option>
//                                 ))}
//                             </select>
//                         </div>

//                         <div>
//                             <p className='regform-p'>Enter Time Limit</p>
//                             <input
//                                 type='time'
//                                 name='time'
//                                 id='time'
//                                 value={selectedTime}
//                                 onChange={handleTimeChange}
//                             />
//                         </div>

//                         <button type="submit" className='regform-submit' onClick={handleSubmit}>Submit</button>


//                     </div>
//                 </div>

//             </div>

//             <HFooter />

//         </div>
//     )
// }

// export default PostRequest
