import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Image from '../../../node_modules/react-bootstrap/Image';
import bed1 from '../img/home/bed-icon.png';
import barilo from '../img/gallery/barilo.jpg';
import barilo2 from '../img/gallery/barilo2.jpg';
import barilo3 from '../img/gallery/barilo3.jpg';
import dobleroom from '../img/gallery/dobleroom.jpg';
import hall from '../img/gallery/hall.jpg';
import hotelinside2 from '../img/gallery/hotelinside2.jpg';
import reception2 from '../img/gallery/reception2.jpg';
import buffet from '../img/gallery/buffet.jpg';
import buffet2 from '../img/gallery/buffet2.jpg';
import buffet3 from '../img/gallery/buffet3.jpg';
import buffet4 from '../img/gallery/buffet4.jpg';
import buffet5 from '../img/gallery/buffet5.jpg';
import buffet6 from '../img/gallery/buffet6.jpg';
import buffet7 from '../img/gallery/buffet7.jpg';


const Gallery = () => {
    return(
        <div>
            <section className="blog-banner-area" id="blog">
                <Container className="container h-100">
                    <div className="blog-banner">
                        <div className="text-center">
                            <h1>our gllery</h1>
                        <nav aria-label="breadcrumb" className="banner-breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">gallery title</li>
                            </ol>
                        </nav>
                        </div>
                    </div>
                </Container>
            </section>
        <section className="section-margin">
            <Container className="">
                <div className="section-intro text-center pb-80px">
                    <div className="section-intro__style">
                    <Image src={bed1} alt=""></Image>
                    </div>
                    <h2>Nuestra Galería</h2>
                    </div>

			    <Row className="row">
				<Col md={5}>
					<Row className="row">
						<Col className="col-12 mb-4">
							<a href="" className="img-gal card-img">
								<div className="single-imgs relative">		
									<div className="overlay overlay-bg"></div>
									<div className="relative">				
										<Image className="card-img rounded-0" src={barilo} alt=""></Image>		
									</div>
								</div>
							</a>
						</Col>
						<Col className="col-12 mb-4">
							<a href="" className="img-gal card-img">
								<div className="single-imgs relative">		
									<div className="overlay overlay-bg"></div>
									<div className="relative">				
										<Image className="card-img rounded-0" src={dobleroom} alt=""></Image>		
									</div>
								</div>
							</a>
						</Col>
					</Row>
				</Col>

				<Col className="col-md-7">
					<Row className="row">
						<Col sm={7} className="mb-4">
							<a href="" className="img-gal card-img">
								<div className="single-imgs relative">		
									<div className="overlay overlay-bg"></div>
									<div className="relative">				
										<Image className="card-img rounded-0" src={barilo2} alt=""></Image>		
									</div>
								</div>
							</a>
						</Col>
						<Col sm={5} className="mb-4">
							<a href="" className="img-gal card-img">
								<div className="single-imgs relative">		
									<div className="overlay overlay-bg"></div>
									<div className="relative">				
										<Image className="card-img rounded-0" src={barilo3} alt=""></Image>		
									</div>
								</div>
							</a>
						</Col>
					</Row>
					<Row className="row">
						<Col className="col-12 mb-4">
							<a href="" className="img-gal card-img">
								<div className="single-imgs relative">		
									<div className="overlay overlay-bg"></div>
									<div className="relative">				
										<Image className="card-img rounded-0" src={hotelinside2} alt=""></Image>		
									</div>
								</div>
							</a>
						</Col>
					</Row>
					<Row className="row">
						<Col sm={7} className="mb-4">
							<a href="" className="img-gal card-img">
								<div className="single-imgs relative">		
									<div className="overlay overlay-bg"></div>
									<div className="relative">				
										<Image className="card-img rounded-0" src={hall} alt=""></Image>		
									</div>
								</div>
							</a>
						</Col>
						<Col sm={5} className="mb-4">
							<a href="" className="img-gal card-img">
								<div className="single-imgs relative">		
									<div className="overlay overlay-bg"></div>
									<div className="relative">				
										<Image className="card-img rounded-0" src={reception2} alt=""></Image>		
									</div>
								</div>
							</a>
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
		<Container className="">
                <div className="section-intro text-center pb-80px">
                    <div className="section-intro__style">
                    <Image src={bed1} alt=""></Image>
                    </div>
                    <h2>Buffet</h2>
                    </div>

			    <Row className="row">
				<Col md={5}>
					<Row className="row">
						<Col className="col-12 mb-4">
							<a href="" className="img-gal card-img">
								<div className="single-imgs relative">		
									<div className="overlay overlay-bg"></div>
									<div className="relative">				
										<Image className="card-img rounded-0" src={buffet} alt=""></Image>		
									</div>
								</div>
							</a>
						</Col>
						<Col className="col-12 mb-4">
							<a href="" className="img-gal card-img">
								<div className="single-imgs relative">		
									<div className="overlay overlay-bg"></div>
									<div className="relative">				
										<Image className="card-img rounded-0" src={buffet2} alt=""></Image>		
									</div>
								</div>
							</a>
						</Col>
					</Row>
				</Col>

				<Col className="col-md-7">
					<Row className="row">
						<Col sm={7} className="mb-4">
							<a href="" className="img-gal card-img">
								<div className="single-imgs relative">		
									<div className="overlay overlay-bg"></div>
									<div className="relative">				
										<Image className="card-img rounded-0" src={buffet3} alt=""></Image>		
									</div>
								</div>
							</a>
						</Col>
						<Col sm={5} className="mb-4">
							<a href="" className="img-gal card-img">
								<div className="single-imgs relative">		
									<div className="overlay overlay-bg"></div>
									<div className="relative">				
										<Image className="card-img rounded-0" src={buffet4} alt=""></Image>		
									</div>
								</div>
							</a>
						</Col>
					</Row>
					<Row className="row">
						<Col className="col-12 mb-4">
							<a href="" className="img-gal card-img">
								<div className="single-imgs relative">		
									<div className="overlay overlay-bg"></div>
									<div className="relative">				
										<Image className="card-img rounded-0" src={buffet5} alt=""></Image>		
									</div>
								</div>
							</a>
						</Col>
					</Row>
					<Row className="row">
						<Col sm={7} className="mb-4">
							<a href="" className="img-gal card-img">
								<div className="single-imgs relative">		
									<div className="overlay overlay-bg"></div>
									<div className="relative">				
										<Image className="card-img rounded-0" src={buffet6} alt=""></Image>		
									</div>
								</div>
							</a>
						</Col>
						<Col sm={5} className="mb-4">
							<a href="" className="img-gal card-img">
								<div className="single-imgs relative">		
									<div className="overlay overlay-bg"></div>
									<div className="relative">				
										<Image className="card-img rounded-0" src={buffet7} alt=""></Image>		
									</div>
								</div>
							</a>
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	</section>
        </div>
    )
}

export default Gallery