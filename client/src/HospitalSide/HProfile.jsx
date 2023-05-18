import './HProfile.css'
import { Link } from 'react-router-dom'
import img from '../assets/profile.jpg'

import HNavbar from './RepPages/HNavbar';
import HFooter from './RepPages/HFooter';
import { useState, useEffect } from 'react';
import Axios from 'axios';

function HProfile() 
{
    const [hospi_id,setHospiId] = useState('');
    const [hospi_name,setHospiName] = useState('');

    useEffect(() => {
        setHospiId(sessionStorage.getItem('idhospi') || '');
      }, []);

      useEffect(() => {
        Axios.get(`http://localhost:3001/api/hprofile?hospi_id=${hospi_id}`).then((response) => {
            setHospiName(response.data[0].hospi_name);
            sessionStorage.setItem('namehospi', hospi_name);
            console.log(response.data);

    })
      },[hospi_id ,hospi_name]);
    return(
        <div>
            <HNavbar/>
            <div className='profile'>
                <div className='profile-col1'>
                    
                    <div className='profile-inner-col'>
                        <img src={img} />
                        <div>
                            <p className='profile-col1-name'>{hospi_name}</p>
                        </div>
                    </div>

                    <div>
                        <p className='profile-col1-link'><Link to='/hprofile/postreq'>Post a request</Link></p>
                        <p className='profile-col1-link'><Link to='/hprofile/deletereq'>Delete a request</Link></p>
                        <p className='profile-col1-link'>Log out</p>
                    </div>

                </div>

                <div className="vertical-line"></div>

                <div className='profile-col2'>
                    <h3 className='profile-col2-head'>Current Requests</h3>
                    <table>
                        <thead>
                            <td>S.No</td>
                            <td>Blood Group</td>
                            <td>Timer</td>
                        </thead>

                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>A positive (A+)</td>
                                <td>08 : 25 : 04</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>A positive (A+)</td>
                                <td>08 : 25 : 04</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>A positive (A+)</td>
                                <td>08 : 25 : 04</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>A positive (A+)</td>
                                <td>08 : 25 : 04</td>
                            </tr>
                        </tbody>

                    </table>
                </div>

            </div>

            <HFooter/>

        </div>
    )
}

export default HProfile