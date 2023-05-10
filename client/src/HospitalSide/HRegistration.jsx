// import './HRegistration.css'
import {Link} from 'react-router-dom'

import HNavbar from './RepPages/HNavbar';
import HFooter from './RepPages/HFooter';
import HRegform from './HRegform';

function HRegistration() {
    return(
        <div>
            <HNavbar/>
            <HRegform/>
            <HFooter/>
        </div>
    )
}

export default HRegistration