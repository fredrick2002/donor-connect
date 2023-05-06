import himg from '../assets/HospitalProfile.jpg';
import './Content.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Content() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submit logic here
    setSubmitted(true);
  };

  const renderForm = () => {
    if (submitted) {
      return <p className="content-update">Updated successfully</p>;
    }
    return (
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button type="submit" className="content-submit">
          Submit
        </button>
      </form>
    );
  };

  return (
    <div className="content-card">
      <div className="content-innercol">
        
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
