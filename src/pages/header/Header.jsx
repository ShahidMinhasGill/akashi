import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Form, FormGroup, Nav, Navbar } from "react-bootstrap";
import logo from '../../assets/images/logo.png';
import mdi_walletbifold from '../../assets/icons/mdi_wallet-bifold.svg';
import materialsymbols from '../../assets/icons/material-symbols_settings-night-sight.svg';
import { GlobalStyles } from '../../config/GlobalStyles';



const Header = ( {toggleTheme}) => {
console.log('toggleTheme',toggleTheme);
  const [selected, setSelected] = useState("Ethereum");
  const languages = ["Ethereum", "Bitcoin", "Litecoin", "Dogecoin"];


  const handleChange = (event) => {
    setSelected(event.target.value);
  }


  return (
    <header className="header">
      <Navbar expand="lg">
        <Navbar.Brand href="/" className="icon"><img src={logo} alt="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto mr-auto">
            <NavLink to="/sell" className="link" activeClassName="link active">Dashboard</NavLink>
            <NavLink to="/search" className="link" activeClassName="link active">Cloud</NavLink>
            <NavLink to="/feature" className="link" activeClassName="link active">Burn</NavLink>
            <NavLink to="/experience" className="link" activeClassName="link active">Stake</NavLink>
            <NavLink to="/blog" className="link" activeClassName="link active">Farm</NavLink>
          </Nav>
          <Nav className="ms-auto dir">
          <NavLink to="/blog" className="link" activeClassName="link active"><img src={materialsymbols} alt="" /> AKASHI: 0</NavLink>
            <select className="select" defaultValue={selected} onChange={handleChange}>
              {languages.map((language, index) => (
                <option key={index} value={language}>{language}</option>
              ))}
            </select>
            <button ><img src={mdi_walletbifold} alt="" /> Connect</button>
     
                <Form className='m-2'>
                  <Form.Check // prettier-ignore
                    type="switch"
                    id="custom-switch"
                    onClick={toggleTheme}
                  />

                </Form>
          </Nav>
                
        </Navbar.Collapse>
      </Navbar>
     

    </header>
  );
}

export default Header;
