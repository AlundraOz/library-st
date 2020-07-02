import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import './header.scss';
import { FaPhoneVolume, FaRegEnvelope, FaFacebookF, FaTripadvisor, FaInstagram } from "react-icons/fa";
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Image from '../../../node_modules/react-bootstrap/Image';



const NavHome = () => {
  
  window.onscroll = function() {scrollFunction()};

  const scrollFunction= () => {
    let headerEl = document.getElementById("header_area") 

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      headerEl.classList.add("navbar_fixed");
    } else {
      headerEl.classList.remove("navbar_fixed");
    }
  }


  return(

    <Container fluid id="header_area">
      <Row className="header-top">
        <Container>
          <div className="d-flex align-items-center">
            <div id="logo">
                <a href="/">< Image style={{height: '140px', width: '150px', backgroundColor: '#cca772', padding: '30px'}}src="https://grandhotelbariloche.com/wp-content/uploads/2019/01/LOGO_original-300x300.png" alt="" title="" /></a>
            </div>
            <div className="ml-auto d-none d-md-block d-md-flex">
              <div className="media header-top-info">
                <div className="ml-auto d-none d-md-block d-md-flex">
                  <div className="media header-top-info">
                    <span className="header-top-info__icon">
                      <FaPhoneVolume/>
                    </span>
                    <div className="media-body">
                      <p>Have any question?</p>
                      <p>Free: <a href="tel:+12 365 5233">+12 365 5233</a></p>
                    </div>
                  </div>
                  <div className="media header-top-info">
                    <span className="header-top-info__icon">
                        <FaRegEnvelope/>
                    </span>
                    <div className="media-body">
                      <p>Have any question?</p>
                      <p>Free: <a href="tel:+12 365 5233">+12 365 5233</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Row>
      <Container fluid className="main_menu">
          <Row style={{ background: "white", width: "100vw", padding: '0px 52px 0px 52px', marginLeft: '-30px' }}> 
            <Col style={{ border: 'none'}}>
            <Navbar id="navbar" className="navbar navbar_bi" expand="lg"  style={{ boxShadow: 'none'}}>
              <Navbar.Toggle className="navbar-toggler" aria-controls="basic-navbar-nav">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </Navbar.Toggle>
              <Navbar.Collapse id="basic-navbar-nav" sticky="top">
                <Nav className="mr-auto nav" activeKey="/" as="ul">
                  <Nav.Item as="li" className="nav-item active" >
                    <Link eventKey="active" className="nav-link" to="/">Home</Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="nav-item" >
                    <Nav.Link className="nav-link" to="#about">Nosotros</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="nav-item" >
                    <Link className="nav-link" to="/gallery">Galería</Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="nav-item" >
                    <Link className="nav-link" to="/location">Ubicación</Link>
                  </Nav.Item>
                  <Nav.Item as="li" className="nav-item" >
                    <Link className="nav-link" to="/features">Características</Link>
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse>
              <div>
                <ul className="social-icons ml-auto">
                    <li><a href="https://www.facebook.com/GrandHotelBariloche/" rel="noopener noreferrer" target="_blank"><FaFacebookF /></a></li>
                    <li><a href="https://www.tripadvisor.es/Hotel_Review-g312848-d1177779-Reviews-Grand_Hotel_Bariloche-San_Carlos_de_Bariloche_Province_of_Rio_Negro_Patagonia.html" rel="noopener noreferrer" target="_blank"><FaTripadvisor /></a></li>
                    <li><a href="https://www.instagram.com/grandhotelbariloche/" rel="noopener noreferrer" target="_blank"><FaInstagram/></a></li>
                  </ul>
              </div>
            
            </Navbar>
            </Col>
          </Row>
      </Container>
  </Container>  
  )
}

export default NavHome

