import './App.css';
import Firstpage from './NewPages/Firstpage';


// import Login from './LoginPages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './NewPages/Login'
import Signup from './NewPages/Signup'
import Registration from './RegistrationForm/Registration';
import Home from './HomePage/Home';
import Profile from './ProfilePages/Profile'
import Profileupdate from './ProfilePages/Profileupdate'
import Profilehistory from './ProfilePages/History'


function App() {
  return (
  <Router>
    
    <Routes>

      {/* <Route path="/" element={<Profilehistory />}/> */}
      
      <Route path="/" element={<Login />}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/registration" element={<Registration/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/profile/update' element={<Profileupdate/>}/>

    </Routes>

   </Router>
  // <Home/>
  
  );
}

export default App;
