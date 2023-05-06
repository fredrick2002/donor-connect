// import react from 'react'
import "./NavbarProfile.css"
import { Link } from "react-router-dom";

function Navbar() {
    return(
        <div className="navbar">
            <div className="navbar-title">DONNOR CONNECT</div>
            <div className="navbar-faq"><Link to='/faqs'>FAQs</Link></div>
            <div className="navbar-profile"><Link to='/profile'>Profile</Link></div>
        </div>
    );
}

export default Navbar;