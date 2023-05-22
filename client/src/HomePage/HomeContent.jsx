import { useEffect, useState } from "react";
import './HomeContent.css'
import Content from './Content'

function HomeContent() {

    const [district, setDistrict] = useState('');
    const [blood_grp, setBloodgrp] = useState('');
    // useEffect(() => {
    //     // Retrieve values from session storage on component mount
    //     const storedDistrict = sessionStorage.getItem('district');
    //     const storedBloodgrp = sessionStorage.getItem('blood_grp');
    
    //     if (storedDistrict) {
    //       setDistrict(storedDistrict);
    //     }
    
    //     if (storedBloodgrp) {
    //       setBloodgrp(storedBloodgrp);
    //     }
    //   }, []);
    
    // Update the district state
    const handleDistrictChange = (event) => {
      const newDistrict = event.target.value;
      setDistrict(newDistrict);
    //   sessionStorage.setItem('district', newDistrict); // Store in session
    };
    
    // Update the blood_grp state
    const handleBloodgrpChange = (event) => {
      const newBloodgrp = event.target.value;
      setBloodgrp(newBloodgrp);
    //   sessionStorage.setItem('blood_grp', newBloodgrp); // Store in session
    };
    


    return(
        <div>
            <div className='home-top'>
            <select id="districtDropdown"
                            className='regform-state'
                            onChange={handleDistrictChange}
                                     >
                                <option value=""selected disabled>Select District</option>
                                <option value="Ariyalur">Ariyalur</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Coimbatore">Coimbatore</option>
                                <option value="Cuddalore">Cuddalore</option>
                                <option value="Dharmapuri">Dharmapuri</option>
                                <option value="Dindigul">Dindigul</option>
                                <option value="Erode">Erode</option>
                                <option value="Kallakurichi">Kallakurichi</option>
                                <option value="Kancheepuram">Kancheepuram</option>
                                <option value="Kanyakumari">Kanyakumari</option>
                                <option value="Karur">Karur</option>
                                <option value="Krishnagiri">Krishnagiri</option>
                                <option value="Madurai">Madurai</option>
                                <option value="Nagapattinam">Nagapattinam</option>
                                <option value="Namakkal">Namakkal</option>
                                <option value="Nilgiris">Nilgiris</option>
                                <option value="Perambalur">Perambalur</option>
                                <option value="Pudukkottai">Pudukkottai</option>
                                <option value="Ramanathapuram">Ramanathapuram</option>
                                <option value="Salem">Salem</option>
                                <option value="Sivaganga">Sivaganga</option>
                                <option value="Tenkasi">Tenkasi</option>
                                <option value="Thanjavur">Thanjavur</option>
                                <option value="Theni">Theni</option>
                                <option value="Thiruvallur">Thiruvallur</option>
                                <option value="Thiruvarur">Thiruvarur</option>
                                <option value="Thoothukudi">Thoothukudi</option>
                                <option value="Tiruchirappalli">Tiruchirappalli</option>
                                <option value="Tirunelveli">Tirunelveli</option>
                                <option value="Tirupathur">Tirupathur</option>
                                <option value="Tiruppur">Tiruppur</option>
                                <option value="Tiruvannamalai">Tiruvannamalai</option>
                                <option value="Vellore">Vellore</option>
                                <option value="Viluppuram">Viluppuram</option>
                                <option value="Virudhunagar">Virudhunagar</option>
                            </select>
                <div className='blood-group'>
                <select className='regform-bloodgrp' id="blood-group-select" name="blood-group-select"
                        onChange={handleBloodgrpChange}
                        >
                            <option className='regform-bloodgrp-option' value="" selected disabled></option>
                            <option className='regform-bloodgrp-option' value="A+">A+</option>
                            <option className='regform-bloodgrp-option' value="A-">A-</option>
                            <option className='regform-bloodgrp-option' value="B+">B+</option>
                            <option className='regform-bloodgrp-option' value="B-">B-</option>
                            <option className='regform-bloodgrp-option' value="AB+">AB+</option>
                            <option className='regform-bloodgrp-option' value="AB-">AB-</option>
                            <option className='regform-bloodgrp-option' value="O+">O+</option>
                            <option className='regform-bloodgrp-option' value="O-">O-</option>
                        </select>
                </div>
            </div>
            {district && blood_grp && (
        <div className="home-content">
          <Content district={district} blood_grp={blood_grp} />
        </div>
      )}
        </div>
    );
}

export default HomeContent;
