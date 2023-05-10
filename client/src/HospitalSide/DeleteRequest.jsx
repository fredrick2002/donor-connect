import './DeleteRequest.css'
import { Link } from 'react-router-dom'
import img from '../assets/profile.jpg'

import HNavbar from './RepPages/HNavbar';
import HFooter from './RepPages/HFooter';

function DeleteReq() 
{
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
                        <p className='profile-col1-link'><Link to='/hprofile/postreq'>Post a request</Link></p>
                        <p className='profile-col1-link'><Link to='/hprofile/deletereq'>Delete a request</Link></p>
                        <p className='profile-col1-link'>Log out</p>
                    </div>

                </div>

                <div className="vertical-line"></div>

                <div className='profile-col2'>
                    <h3 className='profile-col2-head'>Delete a request</h3>
                    <table>
                        <thead>
                            <td>S.No</td>
                            <td>Blood Group</td>
                            <td>Timer</td>
                            <td>Delete request</td>
                        </thead>

                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>A positive (A+)</td>
                                <td>08 : 25 : 04</td>
                                <td><button>Delete</button></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>A positive (A+)</td>
                                <td>08 : 25 : 04</td>
                                <td><button>Delete</button></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>A positive (A+)</td>
                                <td>08 : 25 : 04</td>
                                <td><button>Delete</button></td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>A positive (A+)</td>
                                <td>08 : 25 : 04</td>
                                <td><button>Delete</button></td>
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