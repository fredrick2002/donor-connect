
import "../css/nav.css"
export default function Navbar1(){
    return(
        // <div className="navbar">
        //     <div className="navbar-title">
        //         <h1>DONNOR CONNECT</h1>
        //     </div>
        //     <div className="icon1">
        //         <img src="/public/image/icon1.png"/>
        //     </div>
        //     <div className="navbar-location">
        //         <span className="material-symbols-outlined"></span>
        //         <h1>Set your Location</h1>
        //     </div>
        //     <div className="navbar-faq">
        //         <h1>FAQs</h1>
        //     </div>
        //     <div className="navbar-profile">
        //         <Link to='/profile'><h1>Profile</h1>
        //         </Link>
        //     </div>
        //     {/* <h3>Hello</h3> */}
        // </div>
        <div className="navbar">
            <h1 className="navbar-title">DONNOR CONNECT</h1>
            <img className="icon1" src="public/image/icon1.png"/>
            <h1 className="navbar-location"><span className="material-symbols-outlined"></span>Set your Location</h1>
            <img className="icon2" src="public/image/icon2.png"/>
            <h1 className="navbar-faq">FAQ's</h1>
            <img className="icon3" src="public/image/icon3.png"/>
            <h1 className="navbar-profile">Profile</h1>
        </div>
    )
    }        