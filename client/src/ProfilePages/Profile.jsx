import './Profile.css'
import Navbar from './NavbarProfile'
import Footer from '../RegistrationForm/Footer'
import img from '../assets/profile.jpg'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Axios from 'axios'

function Profile() {

    const [idUser,setId] = useState('');  
    const [first_name,setFirstName] = useState('');
    const [last_name,setLastName] = useState('');
    const [dob,setDob] = useState("");
    const [ph_no,setPhoneNumber] = useState("");
    const [email,setEmail] = useState("");
    const [gender,setGender] = useState("");
    const [bloodgrp,setBloodgrp] = useState("");

//    const [loading, setLoading] = useState(true);

  useEffect(() => {
    setId(sessionStorage.getItem('idUser') || '');
  }, []);
    
    useEffect(() => {
        Axios.get(`http://localhost:3001/api/profile?idUser=${idUser}`).then((response) => {
            const dobObj = new Date(response.data[0].dob);
            const dobString = dobObj.toLocaleDateString();
            setFirstName(response.data[0].first_name);
            setLastName(response.data[0].last_name);
            setDob(dobString);
            setPhoneNumber(response.data[0].ph_no);
            setEmail(response.data[0].email);
            setGender(response.data[0].gender);
            setBloodgrp(response.data[0].blood_grp);
            console.log(response.data);
    })
      },[idUser]);
    
    return(
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
                    <p className='profile-col2-title'>Your Details</p>       
                    <p className='profile-col2-details'>Name: {first_name} {last_name}</p>
                    <p className='profile-col2-details'>Blood Group: {bloodgrp}</p>
                    <p className='profile-col2-details'>Gender:{gender}</p>
                    <p className='profile-col2-details'>Date of Birth:{dob}</p>
                    <p className='profile-col2-details'>Phone Number:{ph_no}</p>
                    <p className='profile-col2-details'>Email Address:{email}</p>
                </div>
                
            </div>

            <Footer/>

        </div>

    );
}

export default Profile;