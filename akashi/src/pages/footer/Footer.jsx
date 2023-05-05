import React from 'react';
import {  Container } from 'react-bootstrap';
import fb from '../../assets/icons/linkedin.png';
import insta from '../../assets/icons/insta.png';
import linkedin from '../../assets/icons/linkedin.png';
import youtube from '../../assets/icons/youtube.png';
const Footer = (props) => {
  return (
    <footer className="footer">
 
               <Container>
            <div className="row  ">

              <div className="col-lg-12 d-flex justify-content-center col-md-6 col-sm-12">
                            <div>
                                <ul className="list mt-4">
                                    <li>
                                        <a href="/">
                                            <div><img src={fb} alt="fb" width="7.5px" height="15px" /></div>
                                        </a>
                                        <a href="/">
                                            <div><img src={insta} alt="insta" width="14px" height="14px" /></div>
                                        </a>
                                        <a href="/">
                                            <div><img src={linkedin} alt="linkedin" width="14px" height="14px" /></div>
                                        </a>
                                        <a href="/">
                                            <div><img src={youtube} alt="youtube" width="14.36px" height="10.17px" /></div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="copyriht">
                        
                        <div className="links">
                            <span>AKASHI: 0x00000000000000000000000000000</span>
                        </div>
                        <div>
                             Copyright &copy; 2023 by Akashi Cloud. All Rights Reserved. 
                        </div>
                    </div>
              </div>
              
             
            </div>
           
           </Container>
    </footer>
  );
}
export default Footer;
