import "./Signup.css"
import {Link} from 'react-router-dom'
import img from '../assets/donorconnect.jpg'

export default function Registration(){
  return(
    <div>
      <div className="image1">
          <img  src={img}  alt="background" />
          </div>
      <main>
         <div className="image1">
          <img  src={img}  alt="background" />
          </div>
         <div><h1 className="header">Donor Connect</h1>
        
        
        <h1 className="descri">Connect with us and lets save a life together</h1>
        <h1 className="Create">CREATE NEW ACCOUNT </h1>
        <div className="space">
        <h1 className="title">Name</h1>
        <label><input className="input" type="text" placeholder="enter your name here" /></label>
        <h1 className="title">Email</h1>
        <label><input className="input" type="text" placeholder="enter your email address here" /></label>
        <h1 className="title" >Password</h1>
        <label><input className="input" type="text" placeholder="enter your password here"/></label>
        <h1 className="title" >Confirm Password</h1>
        <label><input className="input" type="text" placeholder="enter your password here"/></label>
        <br></br>
          <label>
            <input className="check"type="checkbox" />
            I agree to the <a className="link">Terms and conditions</a>
          </label>
          <h1 className="forget">Forget Password</h1>
          </div>
        <br></br>
          <Link to='/registration'><input className="button1" type="submit" value={"CREATE ACCOUNT"}/></Link>
          <h1 className="end2">Already have a account <a className="link"> Login here</a></h1>  
          
          </div>
      </main>
    </div>
        
       
    );
    }




   
    

