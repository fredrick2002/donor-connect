import React, {useState, useEffect} from 'react';
import './App.css';
import Axios from 'axios';

export default function Registration() {

    const [first_name,setFirstName] = useState('');
    const [last_name,setLastName] = useState('');
    const [dob,setDob] = useState("");
    const [ph_no,setPhoneNumber] = useState("");
    const [email,setEmail] = useState("");
    const [flat_no,setFlatNo] = useState("");
    const [area,setArea] = useState("");
    const [pincode,setPincode] = useState("");
    const [gender,setGender] = useState("");
    const [bloodgrp,setBloodgrp] = useState("");
    const [city,setCity] = useState("");
    const [state,setState] = useState("");
    const [donate_blood,setDonateblood] = useState("");

    const submitReg = () => {
        Axios.post("http://localhost:3001/api/submitReg",{
        
        first_name: first_name, 
        last_name: last_name, 
        dob: dob, 
        ph_no: ph_no, 
        email: email, 
        flat_no: flat_no, 
        area: area, 
        pincode: pincode,
        gender: gender, 
        bloodgrp: bloodgrp,
        city: city,
        state: state,
        donate_blood: donate_blood
    }).then(()=>{
        alert("successfully insert");
    });
    };


    return(
        <div className = "form">
            <label>Firstname</label>
            <input 
            type="text" 
            className="first_name" 
            onChange={(e)=>
                {
                    setFirstName(e.target.value);
                }
            }
            />
            <br/>

            <label>Lastname</label>
            <input 
            type="text" 
            className="last_name"
            onChange={(e)=>
                {
                    setLastName(e.target.value);
                }
            } 
            />
            <br/>

            <label>Date of Birth</label>
            <input 
            type="date" 
            className="dob"
            onChange={(e)=>
                {
                    setDob(e.target.value);
                }
            } 
            />
            <br/>

            <label>Phone Number</label>
            <input 
            type="number" 
            className="ph_no"
            onChange={(e)=>
                {
                    setPhoneNumber(e.target.value);
                }
            }
            />
            <br/>

            <label>email</label>
            <input 
            type="email" 
            className="email"
            onChange={(e)=>
                {
                    setEmail(e.target.value);
                }
            } 
            />
            <br/>

            <label>Flat No</label>
            <input 
            type="text" 
            className="flat_no"
            onChange={(e)=>
                {
                    setFlatNo(e.target.value);
                }
            }
            />
            <br/>

            <label>Area</label>
            <input 
            type="text" 
            className="area"
            onChange={(e)=>
                {
                    setArea(e.target.value);
                }
            } 
            />
            <br/>

            <label>Pin Code</label>
            <input 
            type="number" 
            className="pincode"
            onChange={(e)=>
                {
                    setPincode(e.target.value);
                }
            } 
            />
            <br/>

            <label>Gender</label>
            <select name="gender" className="gender"
               onChange={(e)=>
                {
                    setGender(e.target.value);
                }
            }
            >
                <option value="" selected disabled></option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>

            </select>
            <br/>

            <label>Blood Group</label>
            <select name="bloodgrp" className="bloodgrp"
               onChange={(e)=>
                {
                    setBloodgrp(e.target.value);
                }
            }
            >
                <option value="" selected disabled></option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="AB">AB</option>
                <option value="O">O</option>
            </select>
            <br/>

            <label>City</label>
            <input 
            type="text" 
            className="city"
            onChange={(e)=>
                {
                    setCity(e.target.value);
                }
            } 
            />
            <br/>

            <label>State</label>
            <select name="state" className="state"
               onChange={(e)=>
                {
                    setState(e.target.value);
                }
            }
            >
                <option value="" selected disabled></option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                <option value="Daman and Diu">Daman and Diu</option>
                <option value="Delhi">Delhi</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Puducherry">Puducherry</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
            </select>
            <br/>

        {/* <label>Have You Donated Blood Before?</label>    
        <input type="radio" name="yes" className='donate_blood'/>
        <label>Yes</label>  
        <input type="radio" name="no" className='donate_blood'/>
        <label>No</label>  
        <br/> */}

        <button onClick={submitReg}>Submit</button>
        </div>
    )
}