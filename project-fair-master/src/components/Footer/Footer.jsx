import React from 'react';
import './Footer.css';
import fb from '../assets/Facebook_Logo_2023.png';
import twitter from '../assets/Logo_of_Twitter.svg.png';
import linkedin from '../assets/linked in.png';
import insta from '../assets/insta.jpg';
const Footer=()=>{
    return(
        <div className="footer">
<div className="sb_footer section_padding">
    <div className="sb__footer-links">
        <div className="sb__footer-links_div">
            <h4>For Business</h4>
            <a href="/employer">
                <p>Employer</p>
            </a>
            <a href="/healthplan">
                <p>Health Plan</p>
            </a>
            <a href="/individual">
                <p>Individual</p>
            </a>
        </div>
        <div className="sb__footer-links_div">
            <h4>Resources</h4>
            <a href="/resource">
                <p>Resource center</p>
            </a>
            <a href="/healthplan">
                <p>Testimonials</p>
            </a>
            
    </div><div className="sb__footer-links_div">
            
           
            </div>
            <div className="sb__footer-links_div">
            <h4>Company</h4>
            <a href="/about">
                <p>About</p>
            </a>
            <a href="/press">
                <p>Press</p>
            </a>
            <a href="/career">
                <p>Career</p>
                </a>
            <a href="/contact">
                <p>Contact</p>
                </a>
            </div>
            <div className="sb__footer-links_div">
            <h4>Coming soon on</h4>
            <div className="socialmedia">
                <p><img src={fb} alt="" style={{height:'35px'}}/></p>
                <p><img src={twitter} alt="" style={{height:'35px'}}/></p>
                <p><img src={linkedin} alt="" style={{height:'35px'}}/></p>
                <p><img src={insta} alt="" style={{height:'35px'}}/></p>
            </div>
          </div>
</div>
<hr></hr>
<div className="sb__footer-below">
    <div className="sb__footer-copyright">
        
    </div>
    <div className="sb__footer-below-links">
        <a href="/terms"><div><p>Terms & Conditions</p></div></a>
        <a href="/privacy"><div><p>Privacy</p></div></a>
        <a href="/security"><div><p>Security</p></div></a>
        
    </div>
</div>
        </div>
        </div>
        
    )
}
export default  Footer;