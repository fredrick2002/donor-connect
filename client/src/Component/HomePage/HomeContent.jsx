import { useState } from "react";
import './HomeContent.css'

function HomeContent() {

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


    return(
        <div>
            <div className='home-top'>
                <input className='search' type='search' placeholder='Search for hospitals..'></input>
                <div className='blood-group'>
                        <select className='regform-bloodgrp' id="blood-group-select" name="blood-group-select" value={selectedBloodGroup} onChange={handleBloodGroupChange}>
                            {bloodGroups.map((bloodGroup) => (
                            <option className='regform-bloodgrp-option' key={bloodGroup} value={bloodGroup}>
                                {bloodGroup}
                            </option>
                            ))}
                        </select>
                </div>
            </div>
        </div>
    );
}

export default HomeContent;
