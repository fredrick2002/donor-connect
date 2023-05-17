import "./hospi.css"
import img1 from '../assets/landingimg1.png'
import img2 from '../assets/landingimg2.png'
import { Link } from 'react-router-dom'


export default function HosDetial(){
    return(
        
        <div className="land">
            <div>
            <img className="img1" src={img1}/>
            <h1 className="H_detial_header1">DONOR CONNECT</h1>
            <h1 className="H_detial_des1"><a className="link1">"</a>The feeling of saving a life is like no other.
         Donate blood and experience it for yourself.<a className="link1">"</a></h1>

            </div>
            <div>
                <img className="img2" src={img2}/>
                <h1 className="header2">Hospital Login</h1>
                <h1 className="des2"> Connect with us and lets save a life together</h1>
                <Link to='/login'><input className="button1" type="submit" value={"Donor Login"}/></Link>
                <Link to='/signup'><input className="button2" type="submit" value={"Donor Register"}/></Link>
                <Link to='/hlogin'><input className="button3" type="submit" value={"Hospital Login"}/></Link>
                <Link to='/hregister'><input className="button4" type="submit" value={"Hospital Register"}/></Link>
            </div>
            
        </div>
)}