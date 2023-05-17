//import react from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css"
import img from '../assets/location.svg'
import profile from '../assets/profile.svg'
import quiz from '../assets/quiz.svg'

function Navbar() {
    return(
        <div className="navbar">
            <div className="navbar-title">DONOR CONNECT</div>
            {/* <img className="navbar-main-location-img" src={ img } /> */}
            {/* <div className="navbar-main-location"><span className="material-symbols-outlined"></span>Set your Location</div> */}
            <img className="navbar-main-faq-img" src = {quiz}></img>
            <div className="navbar-main-faq">FAQs</div>
            <img className="navbar-profile-img" src = {profile} />
            <div className="navbar-profile"><Link to='/profile' className="link-color">Profile</Link></div>
        </div>
    );
}

export default Navbar;

