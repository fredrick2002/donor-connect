import "./Signup.css"
import {Link} from 'react-router-dom'
import img from '../assets/donorconnect.jpg'
import { useState } from 'react';
import Axios from 'axios';

export default function Registration()
{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [isEmailCheck,setEmailCheck] = useState('');

  

  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.get(`http://localhost:3001/api/emailVal?email=${email}`).then((response) => {
      const emailCheck =  response.data[0].email;
  setEmailCheck(emailCheck);
    console.log(emailCheck);
    })

  if (isEmailCheck === email) {
    alert('This email has already been used');
  } else if (email === '' || password === '' || confirmPassword === '') {
    alert('Please fill in all the mandatory fields.');
  } else if (password !== confirmPassword) {
    alert('The password and confirm password fields do not match.');
  } else if (!isChecked) {
    alert('Please agree to the terms and conditions.');
  } else {
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('password', password);
    // Redirect to the next page
    window.location.href = '/registration';
  }
}  
  

  return(
    <div className="signup">
      <main>
        <div className="signup-form">
         <form>
            <h1 className="signup-header">Donor Connect</h1>
            <h1 className="signup-tagline">Connect with us and lets save a life together</h1>
            <h1 className="signup-Create">CREATE NEW ACCOUNT </h1>
        <div className="space">
          {/* <h1 className="title">Name</h1>
          <label><input className="input" type="text" placeholder="enter your name here" /></label> */}
          <h1 className="signup-title">Email</h1>
          <label><input className="signup-input" type="text" placeholder="Enter your Email address here" 
            onChange={(e)=>
              {
                  setEmail(e.target.value);
              }
            }
            required
          /></label>
          <h1 className="signup-title" >Password</h1>
          <label><input className="signup-input" type="password" placeholder="Enter your Password here"
          onChange={(e)=>
            {
                setPassword(e.target.value);
            }
          }
          required
          /></label>
          <h1 className="signup-title" >Confirm Password</h1>
          <label><input className="signup-input" type="password" placeholder="Enter your Password here"
          onChange={(e)=>
            {
                setConfirmPassword(e.target.value);
            }
          }
          required
          /></label>
          <br></br>
          <label className="signup-tc">
           <input
                className="signup-check"
                type="checkbox"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
          />
            I agree to the <a className="link">Terms and conditions</a>
          </label>
        </div>
          <input className="signup-button1" type="submit" value={"CREATE ACCOUNT"} onClick={handleSubmit}/>
          <h1 className="signup-end2">Already have a account <Link to='/login'><a className="link"> Login here</a></Link></h1>
          </form>  
        </div>
      </main>
      <div className="signup-image1">
          <img  src={img} className="signup-img" alt="background" />
      </div>
    </div>
        
       
    );
}




   
    

