import React from 'react';
import {  Container } from 'react-bootstrap';
import mditwitter from '../../assets/icons/mdi_twitter.svg';
import telegram from '../../assets/icons/telegram.svg';
import discord from '../../assets/icons/discord.svg';
import reddit from '../../assets/icons/reddit.svg';
import github from '../../assets/icons/github.svg';
import paper from '../../assets/icons/paper.svg';
const Footer = (props) => {
  return (
    <footer className="footer">
 
 <Container>
  <div className="row">
    <div className="col-md-6 d-flex justify-content-center mb-3 mb-md-0">
      <ul className="list mt-4">
        <li>
          <a href="/">
            <div><img src={mditwitter} alt="Twitter" width="25px" height="25px" /></div>
          </a>
          <a href="/">
            <div><img src={telegram} alt="telegram" width="25px" height="25px" /></div>
          </a>
          <a href="/">
            <div><img src={discord} alt="discord" width="25px" height="25px" /></div>
          </a>
          <a href="/">
            <div><img src={reddit} alt="reddit" width="25px" height="25px" /></div>
          </a>
          <a href="/">
            <div><img src={github} alt="github" width="25px" height="25px" /></div>
          </a>
          <a href="/">
            <div><img src={paper} alt="paper" width="25px" height="25px" /></div>
          </a>
        </li>
      </ul>
    </div>
    <div className="col-md-6">
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
