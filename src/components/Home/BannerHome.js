import React, { useState } from 'react';
import '../../css/style.css';
import Carousel from 'react-bootstrap/Carousel';
import landing1 from '../img/home/lake.jpg';
import landing2 from '../img/home/hall2.jpg';
import landing3 from '../img/home/lake2.jpg';



const BannerHome = () => {

  return(
        <div>
          <Carousel interval={3000}>
                <Carousel.Item>
                    <img
                    height="850px"
                    className="d-block w-100"
                    src={landing1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h4>home banner</h4>
                    <a className="button carousel-slide-btn" target="_blank" href={landing1}>book now</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    height="850px"
                    className="d-block w-100"
                    src={landing2}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h4>homme banner</h4>
                    <a className="button carousel-slide-btn" target="_blank" href={landing2}>booknow</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    height="850px"
                    className="d-block w-100"
                    src={landing3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h4>homme banner</h4>
                    <a className="button carousel-slide-btn" target="_blank" href={landing3}>booknow</a>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default BannerHome