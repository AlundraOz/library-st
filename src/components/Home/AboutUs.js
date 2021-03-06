import React from 'react';
import '../../css/style.css'
import { Row ,Col, Container} from 'reactstrap';
import reception from '../img/home/reception.jpg';
import aboutBed from '../img/home/front3.jpg';
import breakfast from '../img/home/breakfast.jpg';

const AboutUs = () => {
    return(
        <div id="about">
          <section className="welcome">
            <div className="container">
                <Row className="row align-items-center">
                        
                    <Col  lg="5" className="col-lg-5 mb-4 mb-lg-0">
                        <Row className="row no-gutters welcome-images">
                            <Col sm="7" className="col-sm-7">
                                <div className="card">
                                    <img style={{ height: '290px'}} className="" src={aboutBed} alt="Card image cap"/>
                                </div>
                            </Col>
                            <Col sm="5" className="col-sm-5">
                                <div className="card">
                                    <img style={{ height: '290px'}} className="" src={breakfast} alt="Card image cap"/>
                                </div>
                            </Col>
                            <Col lg="12" className="col-lg-12">
                                <div className="card">
                                    <img style={{ height: '210px'}} className="" src={reception} alt="Card image cap"/>
                                </div>
                            </Col>
                        </Row>
                    </Col>    
                    <Col lg="7" className="col-lg-7">
                        <div className="welcome-content">
                            <h2 className="mb-4"><span className="d-block">titulo hotel</span> titulo2</h2>
                            <p>ssNssNssNssNssNssNssNssNssNssNssNssNssNssNssNssNssNssN</p>
                        </div>
                    </Col>
                </Row>
                    </div>
        </section>
        </div>
    )
}

export default AboutUs