
import './Footer.css'

function Footer() {

    const today = new Date();

    return (
        <footer className='footer'>
            <div className='footer-col'>
                <div className='footer-col1'>
                    <h4>DONNOR CONNECT</h4>
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
                    <p className='footer-colortext'>DONNOR CONNECT</p>
                </div>
                <div className='footer-col2'>
                    <h5>&copy; {today.getFullYear()} DONNOR CONNECT</h5>
                </div>
                <div className='footer-col3'></div>
            </div> 
        </footer>
    );
}

export default Footer
