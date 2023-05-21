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
    const [responseData,setResData] = useState([]);
    // const [datetimeString,setDatetimeString] = useState([]);

    useEffect(() => {
        setHospiId(sessionStorage.getItem('idhospi') || '');
        console.log(hospi_id);
        setHospiName(sessionStorage.getItem('namehospi') || '');
      }, []);

      useEffect(() => {
        const fetchRequestData = async () => {
        Axios.get(`http://localhost:3001/api/hprofile_del?hospi_id=${hospi_id}`).then((response) => {
            // setHospiName(response.data[0].hospi_name);
            // sessionStorage.setItem('namehospi', hospi_name);
            console.log(response.data);
            setResData(response.data);
    })
    }
    const interval = setInterval(fetchRequestData, 1000); // Fetch data every 1 seconds

    return () => clearInterval(interval);
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
                        {responseData.map((item, index) => {
                        const requestTime = new Date(item.req_date);
                        const currentTime = new Date();
                        const timeDiff = Math.floor((currentTime - requestTime) / 1000); // Time difference in seconds

                        const hours = Math.floor(Math.abs(timeDiff) / 3600);
                        const minutes = Math.floor((Math.abs(timeDiff) % 3600) / 60);
                        const seconds = Math.abs(timeDiff) % 60;


                        const formattedTime = `${hours} : ${minutes} : ${seconds}`;

                        return (
                        <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.blood_grp}</td>
                        <td>{formattedTime}</td>
                        </tr>
                        );
                    })}
                        </tbody>

                    </table>
                </div>

            </div>

            <HFooter/>

        </div>
    )
}

export default HProfile