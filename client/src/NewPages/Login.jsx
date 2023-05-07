import './login.css'
import {Link} from 'react-router-dom'
import { useState } from 'react';
import Axios from 'axios';

export default function Welcome(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [idUser,setIdUser] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.post("http://localhost:3001/api/loginVal", { email, password })
    .then((response) => {
        const idUser_reg = response.data[0].idUser_reg
        setIdUser(idUser_reg);
        // handle response here and redirect user to appropriate page
      }).catch((error) => {
        console.log(error);
        // handle error here
      });
      if(idUser === ''){
        alert("The Email and Password Doesn't Match");
      }else{
        sessionStorage.setItem('idUser', idUser);
        window.location.href = '/Profile';
      }
     
      console.log(idUser);
      
  };

return(
  <div className="main1">
    <div className="image">
      <img src="/src/assets/donorconnect.jpg"  alt="background" />
      </div>
    <div ><h1 className="header">Donor Connect</h1>
    <h1 className="descri">Connect with us and lets save a life together</h1>
    <h1 className="login">Login</h1>

    <h1 className="title">Email</h1>
    <label><input className="input" type="text" name={"mail"} placeholder="enter your email address here"
    onChange={(e) => setEmail(e.target.value)}
    /></label>
    <h1 className="title" >Password</h1>
    <label><input className="input" type="text" name={"psw"} placeholder="enter your password here"
    onChange={(e) => setPassword(e.target.value)}
    /></label>
    <br></br>
      <label>
        <input className="check"type="checkbox" />
        Remember me
      </label>
      <h1 className="forget">Forget Password</h1>
      </div>
      <br></br>
      <input className="button" type="submit" value={"LOGIN"} onClick={handleSubmit}/>
      <h1 className="end">Don’t have a account .! <Link to='/signup'>Create new account</Link></h1>  
      
  </div>
    
);
}