import './PostRequest.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import img from '../assets/profile.jpg'

import HNavbar from './RepPages/HNavbar';
import HFooter from './RepPages/HFooter';

function PostRequest ()
{

    const bloodGroups = [
        "A+",
        "A-",
        "B+",
        "B-",
        "AB+",
        "AB-",
        "O+",
        "O-",
        // Add more blood groups as needed
      ];
      const [selectedBloodGroup, setSelectedBloodGroup] = useState("");
    
      const handleBloodGroupChange = (event) => {
        setSelectedBloodGroup(event.target.value);
      };

    return (
        <div>
            <HNavbar/>
            <div className='profile'>
                <div className='profile-col1'>
                    
                    <div className='profile-inner-col'>
                        <img src={img} />
                        <div>
                            <p className='profile-col1-name'>Paul Hospitals</p>
                        </div>
                    </div>

                    <div>
                        <p className='profile-col1-link'><Link to='/hprofile/postreq'>Post a request</Link></p>
                        <p className='profile-col1-link'><Link to='/hprofile/deletereq'>Delete a request</Link></p>
                        <p className='profile-col1-link'>Log out</p>
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
                                value={selectedBloodGroup} 
                                onChange={handleBloodGroupChange}
                            >
                                <option className='regform-bloodgrp-option' value="">Select blood group</option>
                                {bloodGroups.map((bloodGroup) => (
                                    <option className='regform-bloodgrp-option' key={bloodGroup} value={bloodGroup}>
                                        {bloodGroup}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <h3>Enter Time Limit</h3>
                            <div>
                                <div>
                                <label>Hours:</label>
                                <input 
                                    type="number" 
                                    min="0" 
                                    max="23"
                                    name='hour'
                                    id='hour' />
                                </div>
                                <div>
                                <label>Minutes:</label>
                                <input 
                                    type="number" 
                                    min="0" 
                                    max="59"
                                    name='min'
                                    id='min' />
                                </div>
                                <div>
                                <label>Seconds:</label>
                                <input 
                                    type="number"
                                    min="0" 
                                    max="59"
                                    name='sec'
                                    id='sec' />
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </div>

            <HFooter/>

        </div>
    )
}

export default PostRequest