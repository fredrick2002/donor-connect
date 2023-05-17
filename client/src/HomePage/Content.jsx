
import himg from '../assets/HospitalProfile.jpg';
import './Content.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Content() {
  const [email, setEmail] = useState('');
  const [notified, setNotified] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleNotify = () => {
    setNotified(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const renderForm = () => {
    if (submitted) {
      return <p className="content-update">Updated successfully</p>;
    }
    if (notified) {
      return (
        <form onSubmit={handleSubmit} className='content-email-submit'>
          <input className='content-email' type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <button type="submit" className="content-submit">
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
    <div className="content-card">
      <div className="content-innercol">

        <div className='content-timer'>00 : 00 : 00</div>
        
        <img className="content-himg" src={himg} />
        <div className="content-hinfo">
          <p className="content-hname">Paul Hospital</p>
          <p className="content-haddr">P colony , near airport , madurai</p>
        </div>

      </div>

      <p className="content-hdes">The patient needs it before the specified time. It’s a chance for you to save a life</p>
      {renderForm()}
    </div>
  );
}

export default Content;
