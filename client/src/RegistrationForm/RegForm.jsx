import './RegForm.css'
import { useEffect, useState } from 'react';
// import ArrowDown from '../assets/arrow-down.svg'
import {Link} from 'react-router-dom'
import Axios from 'axios';

function RegForm() {
    //Getting from Session
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  useEffect(() => {
    setEmail(sessionStorage.getItem('email') || '');
    setPassword(sessionStorage.getItem('password') || '');
  }, []);





      const [first_name,setFirstName] = useState('');
    const [last_name,setLastName] = useState('');
    const [dob,setDob] = useState("");
    const [ph_no,setPhoneNumber] = useState("");
    // const [email,setEmail] = useState("");
    const [flat_no,setFlatNo] = useState("");
    const [area,setArea] = useState("");
    const [pincode,setPincode] = useState("");
    const [gender,setGender] = useState("");
    const [bloodgrp,setBloodgrp] = useState("");
    const [city,setCity] = useState("");
    const [state,setState] = useState("");
    const [donate_blood,setDonateblood] = useState(false);

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
        <form className='regform' action='regform' method='post'>

            <p className='regform-p'>Full Name</p>
            <div className='regform-ip-name'>
                <input className='regform-name' type='text' name="fname" id='fname' placeholder='First Name'
                onChange={(e)=>
                    {
                        setFirstName(e.target.value);
                    }
                }
                />
                <input className='regform-name' type='text' name='lname' id='lname' placeholder='Last Name'
                onChange={(e)=>
                    {
                        setLastName(e.target.value);
                    }
                }
                />
            </div>

            <p className='regform-p'>Date of Birth</p>
            <div>
                <input className='regform-date' type='date' name='dob' id='dob' placeholder='dd/mm/yyyy'
                onChange={(e)=>
                    {
                        setDob(e.target.value);
                    }
                } 
                />
            </div>

            <div className='regform-col1'>
                <div className='regform-col2'>
                    <p className='regform-p'>Phone Number</p>
                    <input className='regform-number' type="tel" id="phone" name="phone" pattern="[0-9]{10}"
                    onChange={(e)=>
                        {
                            setPhoneNumber(e.target.value);
                        }
                    }
                    />
                </div>
                
                <div className='regform-col2'>
                    <div className='right-col'> 
                        <p className='regform-p'>Email</p>
                        <input className='regform-email' type='email' id='email' name='email' value={email}
                        onChange={(e)=>
                            {
                                setEmail(e.target.value);
                            }
                        } 
                        />
                    </div>
                </div>
            </div>

            <p className='regform-p'>Your Address</p>
            <input className='regform-addr' type='text' name='addr1' id='addr1' placeholder='Flat, House no., Building, Company, Apartment'
            onChange={(e)=>
                {
                    setFlatNo(e.target.value);
                }
            }
            />
            <input className='regform-addr' type='text' name='addr2' id='addr2' placeholder='Area, Street, Sector, Village'
            onChange={(e)=>
                {
                    setArea(e.target.value);
                }
            } 
            />

            <p className='regform-p'>Pin Code</p>
            <input className='regform-pincode' type='text' name='pincode' id='pincode' pattern='[0-9]{6}'
            onChange={(e)=>
                {
                    setPincode(e.target.value);
                }
            } 
            />

            <div className='regform-col1'>
                <div className='regform-col2'>
                    <div>
                        <p className='regform-p'>Gender</p>
                    </div>
                    <div>
                        <select className='regform-gender' id="gender-select" name="gender-select" 
                        onChange={(e)=>
                            {
                                setGender(e.target.value);
                            }
                        }
                        >
                            <option className='regform-gender-option' value="" selected disabled></option>
                            <option className='regform-gender-option' value="Male">Male</option>
                            <option className='regform-gender-option' value="Female">Female</option>
                        </select>
                    </div>
                </div>
                
                <div className='regform-col2-bloodgrp'>
                    <div className='right-col'>
                        <p className='regform-p'>Blood Group</p>
                    </div>
                    <div className='right-col'>
                        <select className='regform-bloodgrp' id="blood-group-select" name="blood-group-select"
                        onChange={(e)=>
                            {
                                setBloodgrp(e.target.value);
                            }
                        }
                        >
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
                </div>  
            </div>

            <div className='regform-col1'>
                <div className='regform-col2'>
                    <div >
                        <p className='regform-p'>City</p>
                    </div>
                    <div>
                    <input 
                        type="text" 
                        className='regform-city-option'
                        onChange={(e)=>
                        {
                            setCity(e.target.value);
                        }
                    }
                    />
                    </div>
                </div>
                
                <div className='regform-col2'>
                    <div className='right-col'>
                        <p className='regform-p'>State</p>
                    </div>
                    <div className='right-col'>
                        <select className='regform-state' id="state-select" name="state-select"
                         onChange={(e)=>
                            {
                                setState(e.target.value);
                            }
                        }
                        >
                                <option value="" selected disabled></option>
                                <option className='regform-state-option' value="Andhra Pradesh">Andhra Pradesh</option>
                                <option className='regform-state-option' value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                <option className='regform-state-option' value="Arunachal Pradesh">Arunachal Pradesh</option>
                                <option className='regform-state-option' value="Assam">Assam</option>
                                <option className='regform-state-option' value="Bihar">Bihar</option>
                                <option className='regform-state-option' value="Chandigarh">Chandigarh</option>
                                <option className='regform-state-option' value="Chhattisgarh">Chhattisgarh</option>
                                <option className='regform-state-option' value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                                <option className='regform-state-option' value="Daman and Diu">Daman and Diu</option>
                                <option className='regform-state-option' value="Delhi">Delhi</option>
                                <option className='regform-state-option' value="Lakshadweep">Lakshadweep</option>
                                <option className='regform-state-option' value="Puducherry">Puducherry</option>
                                <option className='regform-state-option' value="Goa">Goa</option>
                                <option className='regform-state-option' value="Gujarat">Gujarat</option>
                                <option className='regform-state-option' value="Haryana">Haryana</option>
                                <option className='regform-state-option' value="Himachal Pradesh">Himachal Pradesh</option>
                                <option className='regform-state-option' value="Jammu and Kashmir">Jammu and Kashmir</option>
                                <option className='regform-state-option' value="Jharkhand">Jharkhand</option>
                                <option className='regform-state-option' value="Karnataka">Karnataka</option>
                                <option className='regform-state-option' value="Kerala">Kerala</option>
                                <option className='regform-state-option' value="Madhya Pradesh">Madhya Pradesh</option>
                                <option className='regform-state-option' value="Maharashtra">Maharashtra</option>
                                <option className='regform-state-option' value="Manipur">Manipur</option>
                                <option className='regform-state-option' value="Meghalaya">Meghalaya</option>
                                <option className='regform-state-option' value="Mizoram">Mizoram</option>
                                <option className='regform-state-option' value="Nagaland">Nagaland</option>
                                <option className='regform-state-option' value="Odisha">Odisha</option>
                                <option className='regform-state-option' value="Punjab">Punjab</option>
                                <option className='regform-state-option' value="Rajasthan">Rajasthan</option>
                                <option className='regform-state-option' value="Sikkim">Sikkim</option>
                                <option className='regform-state-option' value="Tamil Nadu">Tamil Nadu</option>
                                <option className='regform-state-option' value="Telangana">Telangana</option>
                                <option className='regform-state-option' value="Tripura">Tripura</option>
                                <option className='regform-state-option' value="Uttar Pradesh">Uttar Pradesh</option>
                                <option className='regform-state-option' value="Uttarakhand">Uttarakhand</option>
                                <option className='regform-state-option' value="West Bengal">West Bengal</option>
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
                    <input id="yes-checkbox" type="radio" value="yes" checked={donate_blood === true || donate_blood === "yes"} onChange={() => setDonateblood("yes")} />
                    <span className="round-checkbox"></span>
                </div>
                <div className="round-checkbox-container">
                    <label htmlFor="no-checkbox">No</label>
                    <input id="no-checkbox" type="radio" value="no" checked={donate_blood === false || donate_blood === "no"} onChange={() => setDonateblood("no")} />
                    <span className="round-checkbox"></span>
                </div>
            </div>


            <Link to='/home'><button type="submit" className='regform-submit'>Submit</button></Link> 

        </form>
    );
}

export default RegForm;