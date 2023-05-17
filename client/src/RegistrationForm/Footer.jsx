
import './Footer.css'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'
import facebook from '../assets/facebook.svg'
import whatsapp from '../assets/whatsapp.svg'

function Footer() {

    const today = new Date();

    return (
        <footer className='footer'>
            <div className='footer-col'>
                <div className='footer-col1'>
                    <h4>DONOR CONNECT</h4>
                    <ul className='list-unstyled'>
                        <li>
                            <a href='#!' className='footer-link'>About us</a>
                        </li>
                        <li>
                            <a href='#!' className='footer-link'>Teams</a>
                        </li>
                        <li>
                            <a href='#!' className='footer-link'>Blogs</a>
                        </li>
                        <li>
                            <a href='#!' className='footer-link'>Article</a>
                        </li>
                    </ul>
                </div>
                <div className='footer-col2'>
                <h4>CONTACT US</h4>
                    <ul className='list-unstyled'>
                        <li>
                            <a href='#!' className='footer-link'>Help and Support</a>
                        </li>
                        <li>
                            <a href='#!' className='footer-link'>Partner with us</a>
                        </li>
                    </ul>
                </div>
                <div className='footer-col3'>
                <h4>LEGAL</h4>
                    <ul className='list-unstyled'>
                        <li>
                            <a href='#!' className='footer-link'>Terms and conditions</a>
                        </li>
                        <li>
                            <a href='#!' className='footer-link'>Cookie policy</a>
                        </li>
                        <li>
                            <a href='#!' className='footer-link'>Permissions</a>
                        </li>
                    </ul>
                </div>
            </div>  
            <div className='footer-col'>
                <div className='footer-col1'>
                    <p className='footer-colortext'>DONOR CONNECT</p>
                </div>
                <div className='footer-col2'>
                    <h5>&copy; {today.getFullYear()} DONOR CONNECT</h5>
                </div>
                <div className='footer-col3'>
                    <img src = {whatsapp} className='footer-img' />
                    <img src = {instagram} className='footer-img' />
                    <img src = {twitter} className='footer-img' />
                    <img src = {facebook} className='footer-img' />
                </div>
            </div> 
        </footer>
    );
}

export default Footer
