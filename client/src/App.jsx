import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Firstpage from './NewPages/Firstpage'
import Login from './NewPages/Login'
import Signup from './NewPages/Signup'
import Registration from './RegistrationForm/Registration';
import Home from './HomePage/Home';
import Profile from './ProfilePages/Profile'
import Profileupdate from './ProfilePages/Profileupdate'
import Profilehistory from './ProfilePages/History'

// import HNavbar from './HospitalSide/RepPages/HNavbar';
// import HFooter from './HospitalSide/RepPages/HFooter';
// import HRegform from './HospitalSide/HRegform';
import HRegistration from './HospitalSide/HRegistration';
import HProfile from './HospitalSide/HProfile';
import PostRequest from './HospitalSide/PostRequest';
import DeleteReq from './HospitalSide/DeleteRequest';

function App() {
  return (
  <Router>
    
    <Routes>

      {/* <Route path="/" element={<DeleteReq />}/> */}
      
      <Route path="/" element={<Login />}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/registration" element={<Registration/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/profile/update' element={<Profileupdate/>}/>
      <Route path="/profile/history" element={<Profilehistory />}/>
      <Route path="/hregister" element={<HRegistration />}/>
      <Route path="/hprofile" element={<HProfile />}/>
      <Route path="/hprofile/postreq" element={<PostRequest />}/>
      <Route path="/hprofile/deletereq" element={<DeleteReq />}/>
      {/* <Route path="/" element={<Firstpage />}/> */}

    </Routes>

   </Router>
  // <Home/>
  
  );
}

export default App;
