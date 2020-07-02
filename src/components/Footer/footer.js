import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Image from '../../../node_modules/react-bootstrap/Image';
import { FaPhoneVolume, FaRegEnvelope, FaFacebookF, FaTripadvisor, FaInstagram } from "react-icons/fa";
import {Link} from 'react-router-dom';


const Footer = () => {

    return(
        <div>
            <footer className="footer-area section-gap">
                <Container>
                    <Row>
                    <div className="col-xl-8 col-md-8 mb-4 mb-xl-0 single-footer-widget">
                        <div id="logo">
                                <a href="/">< Image style={{height: '200px', width: '200px', color: 'white', position: 'relative', float: 'right'}}src="https://grandhotelbariloche.com/wp-content/uploads/2019/01/LOGO_original-300x300.png" alt="" title="" /></a>
                            </div>
                        </div>
                        <div className="text-lg-right col-xl-2 col-sm-6 mb-4 mb-xl-0 single-footer-widget">
                            <h4>footer title</h4>
                            <ul>
                                <li><Link to="/">about</Link></li>
                                <li><Link to="/">video</Link></li>
                                <li><Link to="/gallery">gallery</Link></li>
                                <li><Link to="/blog">location</Link></li>
                            </ul>
                        </div>
                        <div className="col-xl-2 col-sm-6 mb-4 mt-5 mb-xl-0 single-footer-widget">
                            <ul>
                                <li><Link to="/blog/#attractions">atractions</Link></li>
                                <li><Link to="/rooms/#standard">room1</Link></li>
                                <li><Link to="/rooms/#economy">room2</Link></li>
                                <li><Link to="/contacto">contact</Link></li>
                            </ul>
                        </div>
                       
                    </Row>
                    <div className="footer-bottom row align-items-center text-center text-lg-left">
                        <p className="footer-text m-0 col-lg-8 col-md-12"></p>
                        <div className="col-lg-4 col-md-12 text-center text-lg-right footer-social">
                            <a href="https://www.facebook.com/GrandHotelBariloche/"><i className=""><FaFacebookF /></i></a>
                            <a href="https://www.tripadvisor.es/Hotel_Review-g312848-d1177779-Reviews-Grand_Hotel_Bariloche-San_Carlos_de_Bariloche_Province_of_Rio_Negro_Patagonia.html"><i className=""><FaTripadvisor /></i></a>
                            <a href="https://www.instagram.com/grandhotelbariloche/"><i className=""><FaInstagram/></i></a>
                        </div>
                    </div>
                </Container>
            </footer>
        </div>
    )
}

export default Footer