import React from 'react';
import '../../css/style.css';
import Carousel from 'react-bootstrap/Carousel';
import library1 from '../img/building/library1.jpg';
import library2 from '../img/building/library2.jpg';
import library3 from '../img/building/library3.jpg';
import './BannerPrueba.css';



const BannerHome = () => {

  return(
        <div>
          <Carousel interval={3000}>
                <Carousel.Item>
                    <img
                    height="700px"
                    className="d-block w-100"
                    src={library3}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <header>
                        <div class="content">
                            <hgroup>
                            <h1 className="logo-title">1260 Library st</h1>
                            <i></i>
                            </hgroup>
                        </div>
                        <div class="overlay"></div>
                    </header>
                    {/* <a className="button carousel-slide-btn" target="_blank" href={landing1}>book now</a> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    height="700px"
                    className="d-block w-100"
                    src={library2}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h4>homme banner</h4>
                    {/* <a className="button carousel-slide-btn" target="_blank" href={landing2}>booknow</a> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    height="700px"
                    className="d-block w-100"
                    src={library3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h4>homme banner</h4>
                    {/* <a className="button carousel-slide-btn" target="_blank" href={landing3}>booknow</a> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default BannerHome