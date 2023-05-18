import "./hospilogin.css"
import img from '../assets/donorconnect.jpg'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Axios from 'axios';


export default function Hoslogin(){
  const [hospi_id, setHospiId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.post("http://localhost:3001/api/hloginVal", { hospi_id, password })
    .then((response) => {
      const responseData = response.data;
      if(responseData && responseData.length > 0){
        const idhospi_reg = response.data[0].hospi_id;
        console.log(idhospi_reg);
        if(idhospi_reg === ''){
          alert("The Email and Password Doesn't Match");
        }else{
          sessionStorage.setItem('idhospi', idhospi_reg);
          window.location.href = '/hprofile';
        }
      }else{
        alert("The Email and Password Doesn't Match");
      }
        // handle response here and redirect user to appropriate page
      }).catch((error) => {
        console.log(error);
        // handle error here
      });
  };
    return(
      <div className="hlogin">

        <div className="hlogin-form">
          <h1 className="header">Donor Connect</h1>
          <h1 className="des">Connect with us and lets save a life together</h1>
          <h1 className="login1">Admin Login</h1>

          <h1 className="title1">Hospital id</h1>
          <label><input className="input1" type="text" name={"id"} placeholder="enter your hospital Id here" 
          onChange={(e) => setHospiId(e.target.value)}/></label>
          
          <h1 className="title2" >Password</h1>
          <label><input className="input2" type="password" name={"psw"} placeholder="enter your password here " 
          onChange={(e) => setPassword(e.target.value)}/></label>
          <br></br>
          <div><label>
          <input className="check1"type="checkbox" />
          <span className="hlogin-remMe">&nbsp;Remember Me</span>
          </label>
          </div>
          <input className="button1" type="submit" value={"LOGIN"} onClick={handleSubmit}/>
        </div>
        
        <img className="hlogin-img" src={img}/>


      </div>
    );
}