import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

function Footer(){
    return(
        <footer id="footer">

   

    <div className="footer-top">
      <div className="container">
        <div className="row justify-content-center">

         

          <div className="col-lg-4 col-md-6 footer-links" data-aos="fade-up" data-aos-delay="300">
            <h4>QUICK LINKS</h4>
            <ul>
              <li><i class="ion-ios-arrow-right"></i> <a href="/Events">EVENTS</a></li>
              <li><i class="ion-ios-arrow-right"></i> <a href="/Showcase">SHOWCASE</a></li>
             
            </ul>
          </div>


          <div className="col-lg-4 col-md-6 footer-links" data-aos="fade-up" data-aos-delay="300">
            <h4>QUICK LINKS</h4>
            <ul>
              <li><i class="ion-ios-arrow-right"></i> <a href="https://www.iitbbs.ac.in/">IIT BHUBANESHWAR</a></li>
              <li><i class="ion-ios-arrow-right"></i> <a href="https://gymkhana.iitbbs.ac.in/">STUDENTS GYMKHANA</a></li>
             
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 footer-social-links" data-aos="fade-up" data-aos-delay="300">
            <h4>REACH US AT</h4>
           
            <div className="media mt-3">
             
            <a
                href="https://www.instagram.com/webnd.iitbbs/"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram social"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              &nbsp;
              
              <a
                href="https://www.facebook.com/webnd.iitbbs"
                target="_blank"
                rel="noopener noreferrer"
                className="facebook social"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>

            </div>
          </div>

        </div>
      </div>
    </div>

    
  </footer>
  
    )
}

export default Footer;