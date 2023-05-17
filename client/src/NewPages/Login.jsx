import './login.css'
import img from '../assets/donorconnect.jpg'
import {Link} from 'react-router-dom'
import { useState } from 'react';
import Axios from 'axios';

export default function Welcome(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.post("http://localhost:3001/api/loginVal", { email, password })
    .then((response) => {
        const idUser_reg = response.data[0].idUser_reg;
        console.log(idUser_reg);
        if(idUser_reg === ''){
          alert("The Email and Password Doesn't Match");
        }else{
          sessionStorage.setItem('idUser', idUser_reg);
          window.location.href = '/Profile';
        }
        // handle response here and redirect user to appropriate page
      }).catch((error) => {
        console.log(error);
        // handle error here
      });
  };

return(
  <div className="main1">
    <div className='login-form'>
      <div>
      <h1 className="login-header">Donor Connect</h1>
    <h1 className="login-descri">Connect with us and lets save a life together</h1>
    <h1 className="login-title">Login</h1>

    <h1 className="title">Email</h1>
    <label><input className="login-input" type="text" name={"mail"} placeholder="enter your email address here"
    onChange={(e) => setEmail(e.target.value)}
    /></label>
    <h1 className="title" >Password</h1>
    <label><input className="login-input" type="text" name={"psw"} placeholder="enter your password here"
    onChange={(e) => setPassword(e.target.value)}
    /></label>
    <br></br>
    <div className='login-forgetpwd'>  
          <label className='login-remMe'>
            <input 
              className="check"
              type="checkbox" />
              &nbsp;Remember me
          </label>
      <h1 className="forget">Forget Password</h1>
      </div>
      </div>
      <input className="login-button" type="submit" value={"LOGIN"} onClick={handleSubmit}/>
      <br></br>
      <h1 className="end">Don’t have a account .! <Link to='/signup'>Create new account</Link></h1>  
  </div>
  <div className="image">
      
      <img className='login-img' src={img}  alt="background" />
    
    </div>
  
  </div>
    
);
}