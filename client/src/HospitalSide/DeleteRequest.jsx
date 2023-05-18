import './DeleteRequest.css'
import { Link } from 'react-router-dom'
import img from '../assets/profile.jpg'

import HNavbar from './RepPages/HNavbar';
import HFooter from './RepPages/HFooter';

import { useState, useEffect } from 'react'

function DeleteReq() 
{
    const [hospi_id,setHospiId] = useState('');

    useEffect(() => {
        setHospiId(sessionStorage.getItem('idhospi') || '');
        // console.log(hospi_id);
        // setHospiName(sessionStorage.getItem('namehospi') || '');
      }, []);
    return(
        <div>
            <HNavbar/>
            <div className='profile'>
                <div className='profile-col1'>
                    
                    <div className='profile-inner-col'>
                        <img src={img} />
                        <div>
                            <p className='profile-col1-name'>Paul Hospitals</p>
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
                            <tr>
                                <td className='table-sno'>1</td>
                                <td className='table-bldgrp'>A positive (A+)</td>
                                <td className='table-timer'>08 : 25 : 04</td>
                                <td className='table-delete'><button className='table-btn'>Delete</button></td>
                            </tr>
                            <tr>
                                <td className='table-sno'>1</td>
                                <td className='table-bldgrp'>A positive (A+)</td>
                                <td className='table-timer'>08 : 25 : 04</td>
                                <td className='table-delete'><button className='table-btn'>Delete</button></td>
                            </tr>
                            <tr>
                                <td className='table-sno'>1</td>
                                <td className='table-bldgrp'>A positive (A+)</td>
                                <td className='table-timer'>08 : 25 : 04</td>
                                <td className='table-delete'><button className='table-btn'>Delete</button></td>
                            </tr>
                            <tr>
                                <td className='table-sno'>1</td>
                                <td className='table-bldgrp'>A positive (A+)</td>
                                <td className='table-timer'>08 : 25 : 04</td>            
                                <td className='table-delete'><button className='table-btn'>Delete</button></td>
                            </tr>
                        </tbody>

                    </table>
                </div>

            </div>

            <HFooter/>

        </div>
    )
}

export default DeleteReq