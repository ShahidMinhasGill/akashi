import React from 'react';
import {  Container } from 'react-bootstrap';

const Footer = ({twitter,telegramIcon,discordIcon,redditIcon,githubIcon,paperIcon}) => {
  return (
    <footer className="footer">
 
 <Container>
 <div className="row">
  <div className="col-md-6 d-flex justify-content-center justify-content-md-end mb-3 mb-md-0">
    <ul className="list mt-4">
      <li>
        <a href="/">
          <div><img src={twitter} alt="Twitter" width="25px" height="25px" /></div>
        </a>
        <a href="/">
          <div><img src={telegramIcon} alt="telegram" width="25px" height="25px" /></div>
        </a>
        <a href="/">
          <div><img src={discordIcon} alt="discord" width="25px" height="25px" /></div>
        </a>
        <a href="/">
          <div><img src={redditIcon} alt="reddit" width="25px" height="25px" /></div>
        </a>
        <a href="/">
          <div><img src={githubIcon} alt="github" width="25px" height="25px" /></div>
        </a>
        <a href="/">
          <div><img src={paperIcon} alt="paper" width="25px" height="25px" /></div>
        </a>
      </li>
    </ul>
  </div>
  <div className="col-md-6 ">
    <div className="copyrgiht">
      <div className="links">
        <span>AKASHI: 0x00000000000000000000000000000</span>
      </div>
      <div>
        Copyright &copy; 2023 by Akashi Cloud.
        All Rights Reserved.
      </div>
    </div>
  </div>
</div>

</Container>

    </footer>
  );
}
export default Footer;
