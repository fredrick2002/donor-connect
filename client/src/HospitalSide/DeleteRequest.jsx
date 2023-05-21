import './DeleteRequest.css'
import { Link } from 'react-router-dom'
import img from '../assets/profile.jpg'
import Axios from 'axios';
import HNavbar from './RepPages/HNavbar';
import HFooter from './RepPages/HFooter';
import moment from 'moment';


import { useState, useEffect } from 'react'

function DeleteReq() 
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
                        <p className='profile-col1-link'><Link to='/hprofile' className='link-color-profile'>Current request</Link></p>
                        <p className='profile-col1-link'><Link to='/hprofile/postreq' className='link-color-profile'>Post a request</Link></p>
                        <p className='profile-col1-link'><Link to='/hprofile/deletereq' className='link-color-profile'>Delete a request</Link></p>
                        <p className='profile-col1-link'><Link to='/' className='link-color-profile'>Log out</Link></p>
                    </div>

                </div>

                <div className="vertical-line"></div>

                <div className='profile-col2'>
                    <h3 className='profile-col2-head'>Delete a request</h3>
                    <table>
                        <thead className='table-head'>
                            <td className='table-head-h'>S.No</td>
                            <td className='table-head-h'>Blood Group</td>
                            <td className='table-head-h'>Timer</td>
                            <td className='table-head-h'>Delete request</td>
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
                        <td className="table-sno">{index + 1}</td>
                        <td className="table-bldgrp">{item.blood_grp}</td>
                        <td className="table-timer">{formattedTime}</td>
                        <td className="table-delete">
                        <button className="table-btn">Delete</button>
                        </td>
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

export default DeleteReq