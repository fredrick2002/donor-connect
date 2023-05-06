import './login.css'
import {Link} from 'react-router-dom'

export default function Welcome(){
return(
  <div className="main1">
    <div className="image">
      <img src="/src/assets/donorconnect.jpg"  alt="background" />
      </div>
    <div ><h1 className="header">Donor Connect</h1>
    <h1 className="descri">Connect with us and lets save a life together</h1>
    <h1 className="login">Login</h1>

    <h1 className="title">Email</h1>
    <label><input className="input" type="text" name={"mail"} placeholder="enter your email address here" /></label>
    <h1 className="title" >Password</h1>
    <label><input className="input" type="text" name={"psw"} placeholder="enter your password here"/></label>
    <br></br>
      <label>
        <input className="check"type="checkbox" />
        Remember me
      </label>
      <h1 className="forget">Forget Password</h1>
      </div>
      <br></br>
      <input className="button" type="submit" value={"LOGIN"}/>
      <h1 className="end">Don’t have a account .! <Link to='/signup'>Create new account</Link></h1>  
      
  </div>
    
);
}