import './History.css'
import Navbar from './NavbarProfile'
import Footer from '../RegistrationForm/Footer'
import img from '../assets/profile.jpg'
import {Link} from 'react-router-dom'

function History()
{
    return (
        <div>
            <Navbar/>

            <div className='profile'>
                <div className='profile-col1'>
                        
                        <div className='profile-inner-col'>
                            <img src={img} />
                            <div>
                                <p className='profile-col1-name'>NAME</p>
                                <p className='profile-col1-bloodgroup'>BLOOD GROUP</p>
                            </div>
                        </div>

                        <div>
                            <p className='profile-col1-link'><Link to='/profile/update'>Edit your details</Link></p>
                            <p className='profile-col1-link'>Your History</p>
                            <p className='profile-col1-link'>Unsubscribe from all</p>
                            <p className='profile-col1-link'>About us</p>
                            <p className='profile-col1-link'>Log out</p>
                        </div>

                    </div>

                    <div className="vertical-line"></div>

                    <div className='profile-col2'>
                        <h3 className='profile-col2-head'>Welcome</h3>
                        <p className='profile-col2-des'>Thank you for the <span className='profile-col2-num'>10</span> lives you saved</p>
                        <hr/>


                </div>
            </div>

            <Footer/>

        </div>
    )
}

export default History