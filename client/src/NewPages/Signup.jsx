import "./Signup.css"
import {Link} from 'react-router-dom'
import img from '../assets/donorconnect.jpg'
import { useState } from 'react';

export default function Registration()
{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [Agree, setAgree] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '' || confirmPassword === '') {
      alert('Please fill in all the mandatory fields.');
    } 
    else if (password !== confirmPassword) {
      alert('The password and confirm password fields do not match.');
    } 
    else if (Agree === 0){
      alert('Agree the Terms and Condition')
    }else {
      sessionStorage.setItem('email', email);
      sessionStorage.setItem('password', password);
      // Redirect to the next page
      window.location.href = '/registration';
    }
  }



  return(
    <div>

      <div className="image1">
          <img  src={img}  alt="background" />
      </div>

      <main>
        <div className="image1">
          <img  src={img}  alt="background" />
        </div>

         <div>
            <h1 className="header">Donor Connect</h1>
            <h1 className="descri">Connect with us and lets save a life together</h1>
            <h1 className="Create">CREATE NEW ACCOUNT </h1>

        <div className="space">
          {/* <h1 className="title">Name</h1>
          <label><input className="input" type="text" placeholder="enter your name here" /></label> */}
          <h1 className="title">Email</h1>
          <label><input className="input" type="text" placeholder="Enter your Email address here" 
            onChange={(e)=>
              {
                  setEmail(e.target.value);
              }
            }
            required
          /></label>
          <h1 className="title" >Password</h1>
          <label><input className="input" type="text" placeholder="Enter your Password here"
          onChange={(e)=>
            {
                setPassword(e.target.value);
            }
          }
          required
          /></label>
          <h1 className="title" >Confirm Password</h1>
          <label><input className="input" type="text" placeholder="Enter your Password here"
          onChange={(e)=>
            {
                setConfirmPassword(e.target.value);
            }
          }
          required
          /></label>
          <br></br>
          <label>
            <input className="check" type="checkbox" 
            onChange={(e)=>
              {
                  setAgree(e.target.value);
              }
            }/>
            I agree to the <a className="link">Terms and conditions</a>
          </label>
          <h1 className="forget">Forget Password</h1>
        </div>
        <br></br>
          <Link to='/registration'><input className="button1" type="submit" value={"CREATE ACCOUNT"} onClick={handleSubmit}/></Link>
          <h1 className="end2">Already have a account <a className="link"> Login here</a></h1>  
          
          </div>
      </main>
    </div>
        
       
    );
}




   
    
