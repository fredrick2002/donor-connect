import './HRegform.css'
// import { Link } from 'react-router-dom'
import { useState } from 'react'
import Service from '../assets/service.jpg'
import Axios from 'axios'


function HRegform ()
{
    const[hospi_id,setHospiId] = useState('');
    const[hospi_name,setHospiName] = useState('');
    const [email,setEmail] = useState("");
    const [hospi_addr,setHospiAddr] = useState("");
    const [hospi_area,setHospiArea] = useState("");
    const [pincode,setPincode] = useState("");
    const [city,setCity] = useState("");
    const [state,setState] = useState("");
    const [isi_code,setIsiCode] = useState("");
    const [ph_no,setPhoneNumber] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isIdCheck,setHospiIdCheck] = useState('');
    // const idCheck;

    //Insertion into Hospital Registration
    const insertReq = () => {
        // e.preventDefault();
        Axios.post("http://localhost:3001/api/hSubmitReg",{
        
        hospi_id: hospi_id, 
        hospi_name: hospi_name,
        email: email,
        hospi_addr: hospi_addr, 
        hospi_area: hospi_area,
        pincode: pincode,
        city: city,
        state: state,
        isi_code: isi_code,  
        ph_no: ph_no,    
        password: password

        // console.log(hospi_id);
    }).then(()=>{
        console.log("Insert Successfully")
        window.location.href = '/hprofile'
    })
    .catch((error) => {
  console.log(error);
});
    }
    //Validation
    // const idVal = () =>{
    //         // setHospiIdCheck(idCheck);
    // console.log(isIdCheck);
    //     if (hospi_id == isIdCheck) {
    //         alert('This Hospital has already been registered');
    //       } else if (hospi_id === '' || hospi_name === '' ||email === '' || hospi_addr === '' || hospi_area === '' || pincode === '' || city === '' || state  === '' || isi_code  === '' || ph_no  === '' || password === '' || confirmPassword === '') {
    //         alert('Please fill in all the mandatory fields.');
    //       } else if (password !== confirmPassword) {
    //         alert('The password and confirm password fields do not match.');
    //       } else{
    //             {insertReq}
    //     }
    // }
    //Hospital ID Checking
//     const submitHReg = (e) => {
//         e.preventDefault();
//         console.log(hospi_id);
//         try{
//         Axios.post('http://localhost:3001/api/hospiVal', {
//             hospi_id: hospi_id
//         }).then((response) => {
//             if(response.data[0]){
//             const idCheck =  response.data[0].hospi_id;
//             setHospiIdCheck(idCheck);
//             {idVal}
//             }else{
//                 {idVal}
//             }
//     //   console.log("Hello");
//     })
//         }catch{
//             console.log("heo");
//         }
// // console.log(hospi_id);
//     };

const submitHReg = (e) => {
    e.preventDefault();
    console.log(hospi_id);
    Axios.get(`http://localhost:3001/api/hospiVal?hospi_id=${hospi_id}`).then((response) => {
        const responseData = response.data;
        if(responseData && responseData.length > 0) {
            const idCheck = responseData[0].hospi_id;
            setHospiIdCheck(idCheck);
            console.log(responseData);
            console.log(isIdCheck);
            if (hospi_id == isIdCheck) {
                alert('This Hospital has already been registered');
            }
            
        } else {
            console.log('Response data is empty or null');
            if (hospi_id === '' || hospi_name === '' || email === '' || hospi_addr === '' || hospi_area === '' || pincode === '' || city === '' || state === '' || isi_code === '' || ph_no === '' || password === '' || confirmPassword === '') {
                alert('Please fill in all the mandatory fields.');
            } else if (password !== confirmPassword) {
                alert('The password and confirm password fields do not match.');
            } else {
                
            
            Axios.post("http://localhost:3001/api/hSubmitReg",{
        
        hospi_id: hospi_id, 
        hospi_name: hospi_name,
        email: email,
        hospi_addr: hospi_addr, 
        hospi_area: hospi_area,
        pincode: pincode,
        city: city,
        state: state,
        isi_code: isi_code,  
        ph_no: ph_no,    
        password: password

        // console.log(hospi_id);
        }).then(()=>{
        console.log("Insert Successfully");
    }).catch((error) => {
        // Error callback function
        console.log(error);
    });
    window.location.href = '/hlogin';
        }
    }
    })
}


    return(
        <div>

            <div className="regbar">
                <img src={Service} className="regbar-img"></img>
                <div className="regbar-content">
                    <div className="regbar-content-title">REGISTRATION FORM</div>
                    <div className="regbar-content-para">PLEASE FILL THE FORM BELOW</div>
                </div>
            </div>


            <hr/>


            <div>
                <form className='regform' action='regform' method='post'>

                    <p className='regform-p'>Hospital Name</p>
                    <div>
                        <input 
                            className='regform-name' 
                            type='text' 
                            name="hname" 
                            id='hname' 
                            placeholder='enter hospital name here'
                            required
                            onChange={(e)=>
                                {
                                    setHospiName(e.target.value);
                                }
                            }
                            >
                        </input>

                    </div>

                    <div className='regform-col1'>
                        <div className='regform-col2'>
                            <p className='regform-p'>Hospital Id</p>
                            <input 
                                className='regform-number'  
                                type="text" 
                                id="hid" 
                                name="hid" 
                                pattern="[0-9]{10}"
                                onChange={(e)=>
                                    {
                                        setHospiId(e.target.value);
                                    }
                                }
                                >
                            </input>
                        </div>
                        
                        <div className='regform-col2'>
                            <div className='right-col'> 
                                <p className='regform-p'>Email</p>
                                <input 
                                    className='regform-email' 
                                    type='email' 
                                    id='email' 
                                    name='email'
                                    onChange={(e)=>
                                        {
                                            setEmail(e.target.value);
                                        }
                                    }
                                    >
                                </input>
                            </div>
                        </div>
                    </div>


                    <p className='regform-p'>Hospital Address</p>
                    <input 
                        className='regform-addr' 
                        type='text' 
                        name='haddr1' 
                         id='haddr1' 
                        placeholder='hospital name , nearby landmark' required
                        onChange={(e)=>
                            {
                                setHospiAddr(e.target.value);
                            }
                        }
                        >
                    </input>

                    <input 
                        className='regform-addr' 
                        type='text' 
                        name='haddr2' 
                        id='haddr2' 
                        placeholder='Area, Street, Sector, Village'
                        onChange={(e)=>
                            {
                                setHospiArea(e.target.value);
                            }
                        }
                        required>   
                    </input>


                    <p className='regform-p'>Pin Code</p>
                    <input 
                        className='regform-pincode' 
                        type='text' 
                        name='pincode' 
                        id='pincode' 
                        // pattern='[0-9]{6}' required
                        onChange={(e)=>
                            {
                                setPincode(e.target.value);
                            }
                        }
                        >   
                    </input>


                    <div className='regform-col1'>
                        
                        <div className='regform-col2'>
                            <div >
                                <p className='regform-p'>District</p>
                            </div>
                            
                            <div>
                            <input 
                        type="text" 
                        id='city'
                        name='city'
                        className='regform-city'
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

                    <div className='regform-col1'>
                        <div className='regform-col2'>
                            <p className='regform-p'>ISI code</p>
                            <input 
                                className='regform-number'  
                                type="tel" 
                                id="isic" 
                                name="isic" 
                                // pattern="[0-9]{10}"
                                onChange={(e)=>
                                    {
                                        setIsiCode(e.target.value);
                                    }
                                }
                                >
                            </input>
                        </div>
                        
                        <div className='regform-col2'>
                            <div className='right-col'> 
                                <p className='regform-p'>Contact Number</p>
                                <input 
                                    className='regform-number'  
                                    type="tel" 
                                    id="phone" 
                                    name="phone" 
                                    // pattern="[0-9]{10}"
                                    onChange={(e)=>
                                        {
                                            setPhoneNumber(e.target.value);
                                        }
                                    }
                                    >
                                </input>
                            </div>
                        </div>
                    </div>


                    <div className='regform-col1'>
                        <div className='regform-col2'>
                            <p className='regform-p'>Password</p>
                            <input 
                                className='regform-number'  
                                type="password" 
                                id="hpwd" 
                                name="hpwd"
                                onChange={(e)=>
                                    {
                                        setPassword(e.target.value);
                                    }
                                } 
                                >
                            </input>
                        </div>
                        
                        <div className='regform-col2'>
                            <div className='right-col'> 
                                <p className='regform-p'>Confirm Password</p>
                                <input 
                                     className='regform-number'  
                                     type="password" 
                                     id="hcpwd" 
                                     name="hcpwd" 
                                     onChange={(e)=>
                                        {
                                            setConfirmPassword(e.target.value);
                                        }
                                    } 
                                     >
                                </input>
                            </div>
                        </div>
                    </div>




                    <button type="submit" className='regform-submit' onClick={submitHReg}>Submit</button> 

                </form>
            </div>


        </div>
    )
}

export default HRegform