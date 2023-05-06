import "./RegBar.css"
import Service from '../assets/service.jpg'


function RegBar() {
    return(
        <div className="regbar">
            <img src={Service} className="regbar-img"></img>
            <div className="regbar-content">
                <div className="regbar-content-title">REGISTRATION FORM</div>
                <div className="regbar-content-para">PLEASE FILL THE FORM BELOW</div>
            </div>
        </div>
    )
}

export default RegBar;