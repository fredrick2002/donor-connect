import Navbar from './Navbar';
import RegBar from './RegBar';
import RegForm from './RegForm';
import Footer from './Footer';


function Registration() {
    return (
        <div className='Container'>
      <Navbar/>
      <RegBar/>
      <RegForm/>
      <Footer/>
    </div>
    );
}

export default Registration;
