//import react from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
    return(
        <div className="navbar">
            <div className="navbar-title">DONNOR CONNECT</div>
            <div className="navbar-location"><span className="material-symbols-outlined"></span>Set your Location</div>
            <div className="navbar-faq">FAQs</div>
            <div className="navbar-profile"><Link to='/profile'>Profile</Link></div>
            {/* <h3>Hello</h3> */}
        </div>
    );
}

export default Navbar;