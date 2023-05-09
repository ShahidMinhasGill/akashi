import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Form, FormGroup, Nav, Navbar } from "react-bootstrap";
import logo from '../../assets/images/logo.png';
import logo2 from '../../assets/images/logo2.png';
import mdi_walletbifold from '../../assets/icons/mdi_wallet-bifold.svg';
import materialsymbols from '../../assets/icons/material-symbols_settings-night-sight.svg';
import darkmod from '../../assets/icons/darkmod.svg';
import { GlobalStyles } from '../../config/GlobalStyles';



const Header = ( {toggleTheme,arrowIcon,DarkLiteMode}) => {
console.log('toggleTheme',toggleTheme);
  const [selected, setSelected] = useState("Ethereum");
  const languages = ["Ethereum", "Bitcoin", "Litecoin", "Dogecoin"];


  const handleChange = (event) => {
    setSelected(event.target.value);
  }


  return (
    <header className="header">
      <Navbar expand="lg">
        <Navbar.Brand  href="/" className="icon d-none d-sm-none d-md-block"><img src={logo} alt="logo"/></Navbar.Brand>
        <Navbar.Brand href="/" className="icon smallscreenlogo .d-none d-md-none .d-sm-block"><img src={logo2} alt="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="">
            <NavLink to="/sell" className="link" activeClassName="link active">Dashboard</NavLink>
            <NavLink to="/search" className="link" activeClassName="link active">Cloud</NavLink>
            <NavLink to="/feature" className="link" activeClassName="link active">Burn</NavLink>
            <NavLink to="/experience" className="link" activeClassName="link active">Stake</NavLink>
            <NavLink to="/blog" className="link" activeClassName="link active">Farm</NavLink>
          </Nav>
          <Nav className="ms-auto center-content dir">
          <NavLink onClick={() => toggleTheme()}  className="link .d-none d-md-none .d-sm-block" activeClassName="link active "><img src={DarkLiteMode} alt="" /> <span className='akashismal'>AKASHI: 0</span></NavLink>
          <NavLink onClick={() => toggleTheme()}  className="link d-none d-sm-none d-md-block" activeClassName="link active "><img src={DarkLiteMode} alt="" /> <span className='akashismal'>AKASHI: 0</span></NavLink>
           <div className="nabtns">
           {/* <img src={arrowIcon} alt="" /> */}
              <select className="select"  defaultValue={selected} onChange={handleChange}>
              {languages.map((language, index) => (
                <option key={index} value={language}>{language}</option>
              ))}

            </select>
            <button ><img src={mdi_walletbifold} alt="" /> Connect</button>
     
           </div>
              
          </Nav>
                
        </Navbar.Collapse>
      </Navbar>
   <hr />
     
    </header>
  );
}

export default Header;
