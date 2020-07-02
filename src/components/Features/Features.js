import React from 'react';
import { Row, Col } from 'reactstrap';
import Card from 'react-bootstrap/Card'
import economyDoble from '../img/hotel/economy-doble.jpg';
import standardDoble from '../img/hotel/standard-doble.jpg';
import economyTriple from '../img/hotel/economy-triple.jpg';
import standardTriple from '../img/hotel/standard-triple.jpg';
import economyCuadruple from '../img/hotel/cuadruple-economy.jpg';
import { FaWifi, FaRegSnowflake, FaRegSmile } from 'react-icons/fa';
import { GiWineBottle, GiTwirlyFlower, GiExitDoor } from "react-icons/gi";
import { AiOutlineCoffee, AiOutlineStar } from "react-icons/ai";
import './Features.css';


const Features = () => {
    return(
    <div> 
        <section className="rooms-banner-area">
            <div className="container h-100">
                <div className="blog-banner">
                    <div className="text-center">
                        <h1>banner text</h1>
                    <nav aria-label="breadcrumb" className="banner-breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">bannertext</li>
                        </ol>
                    </nav>
                    </div>
                </div>
            </div>
        </section>

            <Card>
                    <Row className="room-container" id="economy">
                        <div className="room-article-container">
                            <div className="room-title">
                                <h2>It is a long</h2>
                            </div>
                            <hr/>
                                <p className="room-description">It is a longIt is a longIt is a longIt is a longIt is a longIt is a long</p>
                                <header>service</header>
                                <div>
                                   <ul className="services-room">
                                       <li><p><FaWifi/>wifi</p></li>
                                       <li><p><FaRegSnowflake/>air condition</p></li>
                                       <li><p><GiWineBottle/>Minibar</p></li>
                                    </ul> 
                                </div>
                                <div className="conected-rooms">
                                    <div className="box-destacada">
                                        <div className="content-destacado">
                                            <h5>It is a long</h5> 
                                        </div>
                                    </div>
                                    <GiExitDoor/>
                                    <div className="box-destacada">
                                        <div className="content-destacado">
                                            <h5>It is a long</h5> 
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </Row>
                <hr/>
                    <Card.Body>
                    <Row pb={3} mt={4}>   
                        <Col md={6} xl={4} mb={5}>
                            <Card className="card card-explore" style={{ marginTop: '40px'}}>
                                <div className="card-explore__img">
                                    <Card.Img className="card-img" src={economyDoble} alt="2 beds or 1 matrimonial bed"/>
                                </div>
                                <Card.Body className="card-body">
                                    <h3 className="card-explore__title"><a href="#">doble  economy</a></h3>
                                    <p>It is a longIt is a longIt is a longIt is a longIt is a long</p>
                                    <a className="card-explore__link" target="_blank" href="https://reservations.travelclick.com/106660?languageid=2%20#/guestsandrooms">book <i className="ti-arrow-right"></i></a>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} xl={4} mb={5}>
                            <Card className="card card-explore" style={{ marginTop: '40px'}}>
                                <div className="card-explore__img">
                                    <Card.Img className="card-img" src={economyTriple} alt="3 beds"/>
                                </div>
                                <Card.Body className="card-body">
                                    <h3 className="card-explore__title"><a href="#">triple economy</a></h3>
                                    <p>It is a longIt is a longIt is a longIt is a long</p>
                                    <a className="card-explore__link" target="_blank" href="https://reservations.travelclick.com/106660?languageid=2%20#/guestsandrooms">book <i className="ti-arrow-right"></i></a>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6} xl={4} mb={5}>
                            <Card className="card card-explore" style={{ marginTop: '40px'}}>
                                <div className="card-explore__img">
                                    <Card.Img className="card-img" src={economyCuadruple} alt="4 beds"/>
                                </div>
                                <Card.Body className="card-body">
                                    <h3 className="card-explore__title"><a href="#">cuadruple economy</a></h3>
                                    <p>It is a longIt is a longIt is a longIt is a long</p>
                                    <a className="card-explore__link" target="_blank" href="https://reservations.travelclick.com/106660?languageid=2%20#/guestsandrooms">book <i class="ti-arrow-right"></i></a>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            {/*seccion standard rooms*/}
            <Card>
                <Row className="room-container" id="standard">
                        <div className="room-article-container">
                            <div className="room-title">
                                <h2>standard title</h2>
                            </div>
                            <hr/>
                                <p className="room-description">It is a longIt is a longIt is a longIt is a longIt is a longIt is a longIt is a long</p>
                                <header>service</header>
                                <div className="services-room">
                                   <ul className="services-room">
                                       <li><p><AiOutlineCoffee/>tea</p></li>
                                       <li><p><FaRegSmile/>space</p></li>
                                       <li><p><AiOutlineStar/>Amenities</p></li>
                                       <li><p><GiTwirlyFlower/>decorated</p></li>
                                    </ul> 
                                </div>
                                <div className="conected-rooms">
                                    <div className="box-destacada">
                                        <div className="content-destacado">
                                            <h5>contenido destacadp 1 </h5> 
                                        </div>
                                    </div>
                                    <GiExitDoor/>
                                    <div className="box-destacada">
                                        <div className="content-destacado">
                                            <h5>contenido destacado 2</h5> 
                                        </div>
                                    </div>
                                </div>
                                
                        </div>
                    </Row>
                    <hr/>
                    <Card.Body>
                        <Row pb={3} mt={4}>
                                <Col md={6} xl={4} mb={5}>
                                    <Card className="card card-explore" style={{ marginTop: '40px'}}>
                                        <div className="card-explore__img">
                                            <Card.Img className="card-img" src={standardDoble} alt="1 matrimonial bed or 2 beds"/>
                                        </div>
                                        <Card.Body className="card-body">
                                            <h3 className="card-explore__title"><a href="#">doble standard</a></h3>
                                            <p>It is a longIt is a longIt is a longIt is a longIt is a longIt is a longIt is a long</p>
                                            <a className="card-explore__link" target="_blank" href="https://reservations.travelclick.com/106660?languageid=2%20#/guestsandrooms">book <i className="ti-arrow-right"></i></a>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6} xl={4} mb={5}>
                                    <Card className="card card-explore" style={{ marginTop: '40px'}}>
                                        <div className="card-explore__img">
                                            <Card.Img className="card-img" src={standardTriple} alt="3 beds"/>
                                        </div>
                                        <Card.Body className="card-body">
                                            <h3 className="card-explore__title"><a href="#">triple standard</a></h3>
                                            <p>It is a longIt is a longIt is a longIt is a longIt is a longIt is a long</p>
                                            <a className="card-explore__link" target="_blank" href="https://reservations.travelclick.com/106660?languageid=2%20#/guestsandrooms">book <i className="ti-arrow-right"></i></a>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col md={6} xl={4} mb={5}>
                                    <Card className="card card-explore" style={{ marginTop: '40px'}}>
                                        <div className="card-explore__img">
                                            <Card.Img className="card-img" src={standardTriple} alt=""/>
                                        </div>
                                        <Card.Body className="card-body">
                                            <h3 className="card-explore__title"><a href="#">cuadruple standard</a></h3>
                                            <p>It is a longIt is a longIt is a longIt is a longIt is a longIt is a long</p>
                                            <a className="card-explore__link" target="_blank" href="https://reservations.travelclick.com/106660?languageid=2%20#/guestsandrooms">book <i className="ti-arrow-right"></i></a>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                    </Card.Body>
            </Card>              
    </div>
    )
}

export default Features