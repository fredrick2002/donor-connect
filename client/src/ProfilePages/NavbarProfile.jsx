// import react from 'react'
import "./NavbarProfile.css"
import { Link } from "react-router-dom";
import img from '../assets/location.svg'
import profile from '../assets/profile.svg'
import quiz from '../assets/quiz.svg'

function Navbar() {
    return(
        <div className="navbar">
            <div className="navbar-title">DONOR CONNECT</div>
            <img className="navbar-faq-img" src = {quiz}></img>
            <div className="navbar-faq">FAQs</div>
            <img className="navbar-profile-img" src = {profile} />
            <div className="navbar-profile"><Link to='/profile' className="link-color">Profile</Link></div>
        </div>
    );
}

export default Navbar;