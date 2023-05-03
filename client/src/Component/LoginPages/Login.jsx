import './Login.css'
import image from '../assets/donorconnect.jpg'

function Login()
{
    return (
        <div className="Login">
        <div className='login-form'>
            <div ><h1 className="login-head">Donor Connect</h1>
            <h1 className="login-description">Connect with us and lets save a life together</h1>
            <h1 className="login-subscript">Login Here</h1>
        
            <h1 className="login-title">Email</h1>
            <label><input className="input" type="text" name={"mail"} placeholder="enter your email address here" /></label>
            <h1 className="login-title" >Password</h1>
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
            <h1 className="end">Don’t have a account .! <a className="link">Create new account</a></h1>  
        </div> 
        <div className="login-image">
          <img  src={image}  alt="Your Image" />
        </div>
      </div>
    );
}

export default Login
