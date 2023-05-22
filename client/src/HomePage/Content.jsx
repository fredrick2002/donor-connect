
import himg from '../assets/HospitalProfile.jpg';
import './Content.css'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';


function Content(props) {
  const [resData, setResData] = useState([]);
  // const [district, setDistrict] = useState('');
  // const [blood_grp, setBloodgrp] = useState('');
  // eslint-disable-next-line react/prop-types
  const { district, blood_grp } = props;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get('http://localhost:3001/api/home_page', {
          params: {
            district: district,
            blood_grp: blood_grp
          }
        });
        // console.log(district);
        console.log(response.data);
        setResData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    const interval = setInterval(fetchData, 1000); // Fetch data every 1 seconds

    return () => clearInterval(interval);

    fetchData();
  }, [district, blood_grp]);

  const [email, setEmail] = useState('');
  const [notified, setNotified] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleNotify = () => {
    setNotified(true);
  };

  const SendMail = () =>{
    Axios.post("http://localhost:3002/api/send-email",{
        
    email: email

    // console.log(hospi_id);
    }).then(()=>{
    console.log("Mail Send Successfully");
}).catch((error) => {
    // Error callback function
    console.log(error);
});

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const renderForm = () => {
    if (submitted) {
      return (<p className="content-update">Updated successfully</p>);
      
    }
    if (notified) {
      return (
        <form onSubmit={handleSubmit} className='content-email-submit'>
          <input className='content-email' type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
          <button type="submit" className="content-submit" onClick={SendMail}>
            Submit
          </button>
        </form>
      );
    }
    return (
      <button type="button" className="content-notify" onClick={handleNotify}>
        Notify me
      </button>
    );
  };

  return (
    <div>
    {resData.map((item) => {
      const requestTime = new Date(item.req_date);
      const currentTime = new Date();
      const timeDiff = Math.floor((currentTime - requestTime) / 1000); // Time difference in seconds

      const hours = Math.floor(Math.abs(timeDiff) / 3600);
      const minutes = Math.floor((Math.abs(timeDiff) % 3600) / 60);
      const seconds = Math.abs(timeDiff) % 60;
      const formattedTime = `${hours} : ${minutes} : ${seconds}`;
      return(
    <div key={item.id} className="content-card">
      <div className="content-innercol">

        <div className='content-timer'>{formattedTime}</div>
        
        <img className="content-himg" src={himg} />
        <div className="content-hinfo">
          <p className="content-hname">{item.hospi_name}</p>
          <p className="content-haddr">{item.city}</p>
          <p>{item.blood_grp}</p>
        </div>

      </div>

      <p className="content-hdes">The patient needs it before the specified time. It’s a chance for you to save a life</p>
      {renderForm()}
    </div>
      )
})}
    </div>
  );
}

export default Content;
