import "./hospilogin.css"
import img from '../assets/donorconnect.jpg'
import { Link } from 'react-router-dom'


export default function Hoslogin(){
    return(
      <div className="hlogin">

        <div className="hlogin-form">
          <h1 className="header">Donor Connect</h1>
          <h1 className="des">Connect with us and lets save a life together</h1>
          <h1 className="login1">Admin Login</h1>

          <h1 className="title1">Hospital id</h1>
          <label><input className="input1" type="text" name={"id"} placeholder="enter your hospital Id here" /></label>
          
          <h1 className="title2" >Password</h1>
          <label><input className="input2" type="password" name={"psw"} placeholder="enter your password here " /></label>
          <br></br>
          <div><label>
          <input className="check1"type="checkbox" />
          <span className="hlogin-remMe">&nbsp;Remember Me</span>
          </label>
          </div>
          <Link to='/hprofile'><input className="button1" type="submit" value={"LOGIN"}/></Link>
        </div>
        
        <img className="hlogin-img" src={img}/>


      </div>
    );
}