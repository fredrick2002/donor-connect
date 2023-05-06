import './RegForm.css'
import { useState } from 'react'
// import ArrowDown from '../assets/arrow-down.svg'
import {Link} from 'react-router-dom'

function RegForm() {

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

      const cities = [
        "Chennai",
        "Mumbai",
        "Kolkata",
        "Delhi",
        "Bangalore",
        "Hyderabad",
        "Pune",
        "Ahmedabad",
        "Jaipur",
        "Lucknow",
        // Add more cities as needed
      ];
      const [selectedCity, setSelectedCity] = useState("");
    
      const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
      };

      const genders = ["Male", "Female", "Other"];
      const [selectedGender, setSelectedGender] = useState('');
      const handleGenderChange = (event) => {
        setSelectedGender(event.target.value);
      };


      const states = [
        "Andhra Pradesh",
        "Arunachal Pradesh",
        "Assam",
        "Bihar",
        "Chhattisgarh",
        "Goa",
        "Gujarat",
        "Haryana",
        "Himachal Pradesh",
        "Jharkhand",
        "Karnataka",
        "Kerala",
        "Madhya Pradesh",
        "Maharashtra",
        "Manipur",
        "Meghalaya",
        "Mizoram",
        "Nagaland",
        "Odisha",
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttar Pradesh",
        "Uttarakhand",
        "West Bengal",
        // Add more states as needed
      ];
      const [selectedState, setSelectedState] = useState("");
    
      const handleStateChange = (event) => {
        setSelectedState(event.target.value);
      };


      const [isChecked, setIsChecked] = useState(false);



    return(
        <form className='regform' action='regform' method='post'>

            <p className='regform-p'>Full Name</p>
            <div className='regform-ip-name'>
                <input className='regform-name' type='text' name="fname" id='fname' placeholder='First Name'></input>
                <input className='regform-name' type='text' name='lname' id='lname' placeholder='Last Name'></input>
            </div>

            <p className='regform-p'>Date of Birth</p>
            <div>
                <input className='regform-date' type='date' name='dob' id='dob' placeholder='dd/mm/yyyy'></input>
            </div>

            <div className='regform-col1'>
                <div className='regform-col2'>
                    <p className='regform-p'>Phone Number</p>
                    <input className='regform-number' type="tel" id="phone" name="phone" pattern="[0-9]{10}"></input>
                </div>
                
                <div className='regform-col2'>
                    <div className='right-col'> 
                        <p className='regform-p'>Email</p>
                        <input className='regform-email' type='email' id='email' name='email'></input>
                    </div>
                </div>
            </div>

            <p className='regform-p'>Your Address</p>
            <input className='regform-addr' type='text' name='addr1' id='addr1' placeholder='Flat, House no., Building, Company, Apartment'></input>
            <input className='regform-addr' type='text' name='addr2' id='addr2' placeholder='Area, Street, Sector, Village'></input>

            <p className='regform-p'>Pin Code</p>
            <input className='regform-pincode' type='text' name='pincode' id='pincode' pattern='[0-9]{6}' ></input>

            <div className='regform-col1'>
                <div className='regform-col2'>
                    <div>
                        <p className='regform-p'>Gender</p>
                    </div>
                    <div>
                        <select className='regform-gender' id="gender-select" name="gender-select" value={selectedGender} onChange={handleGenderChange}>
                            {genders.map((gender) => (
                            <option className='regform-gender-option' key={gender} value={gender}>
                                {gender}
                            </option>
                            ))}
                        </select>
                    </div>
                </div>
                
                <div className='regform-col2-bloodgrp'>
                    <div className='right-col'>
                        <p className='regform-p'>Blood Group</p>
                    </div>
                    <div className='right-col'>
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

            <div className='regform-col1'>
                <div className='regform-col2'>
                    <div >
                        <p className='regform-p'>City</p>
                    </div>
                    <div>
                        <select className='regform-city' id="city-select" name="city-select" value={selectedCity} onChange={handleCityChange}>
                            {cities.map((city) => (
                            <option className='regform-city-option' key={city} value={city}>
                                {city}
                            </option>
                            ))}
                        </select>
                    </div>
                </div>
                
                <div className='regform-col2'>
                    <div className='right-col'>
                        <p className='regform-p'>State</p>
                    </div>
                    <div className='right-col'>
                        <select className='regform-state' id="state-select" name="state-select" value={selectedState} onChange={handleStateChange}>
                            {states.map((state) => (
                            <option className='regform-state-option' key={state} value={state}>
                                {state}
                            </option>
                            ))}
                        </select>
                    </div>
                </div>  
            </div>

            {/* <div>
                <p className='regform'>Have you donated blood before</p>
                <input id="round-checkbox" type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
                <span className="round-checkbox"></span>
                {isChecked ? "Yes" : "No"}
            </div> */}
            <div>
                <p className='regform'>Have you donated blood before?</p>
                <div className="round-checkbox-container">
                    <label htmlFor="yes-checkbox">Yes</label>
                    <input id="yes-checkbox" type="radio" value="yes" checked={isChecked === "yes"} onChange={() => setIsChecked("yes")} />
                    <span className="round-checkbox"></span>
                </div>
                <div className="round-checkbox-container">
                    <label htmlFor="no-checkbox">No</label>
                    <input id="no-checkbox" type="radio" value="no" checked={isChecked === "no"} onChange={() => setIsChecked("no")} />
                    <span className="round-checkbox"></span>
                </div>
            </div>


            <Link to='/home'><button type="submit" className='regform-submit'>Submit</button></Link> 

        </form>
    );
}

export default RegForm;