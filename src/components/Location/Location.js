import React from 'react';
import '../../css/style.css';
import { FaPhoneVolume, FaRegEnvelope, FaRegBuilding } from "react-icons/fa";
import bed1 from '../img/home/bed-icon.png';
import restaurant from '../img/blog/restaurant.jpg';
import casino from '../img/blog/casino.jpg';
import museo from '../img/blog/museo.jpg';
import chocolate from '../img/blog/chocolate.jpg';
import centroCivico from '../img/blog/centrocivico.jpg';
import kayak from '../img/blog/kayak.jpg';
import Image from 'react-bootstrap/Image'


const Blog = () => {

    return(
    <div>
        {/*banner section*/}
        <section className="blog-banner-area" id="blog">
            <div className="container h-100">
                <div className="blog-banner">
                    <div className="text-center">
                        <h1>location</h1>
                    <nav aria-label="breadcrumb" className="banner-breadcrumb">
                        <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Blog</li>
                    </ol>
                    </nav>
                    </div>
                </div>
            </div>
        </section>
        {/*categories section*/}
        <section className="blog_categorie_area">
        <div className="section-intro text-center pb-80px">
                    <div className="section-intro__style">
                    <Image src={bed1} alt=""></Image>
                    </div>
                    <h2>ssNssNssN</h2>
        </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-lg-3 mb-4 mt-3 mb-md-0">
                    <div className="media contact-info">
                        <span className="contact-info__icon"><i className="ti-home"><FaRegBuilding/></i></span>
                        <div className="media-body">
                        <h3>Mitre 408</h3>
                        <p>San Carlos de Bariloche Río Negro</p>
                    </div>
                    </div>
                    <div className="media contact-info">
                        <span className="contact-info__icon"><i className="ti-headphone"><FaPhoneVolume/></i></span>
                        <div className="media-body">
                        <h3><a href="tel:454545654">ssNssNssNssNssNssN</a></h3>
                        <p>+54 294 4430622</p>
                        </div>
                    </div>
                    <div className="media contact-info">
                        <span className="contact-info__icon"><i className="ti-email"><FaRegEnvelope/></i></span>
                        <div className="media-body">
                        <h3><a href="mailto:support@colorlib.com">Email</a></h3>
                        <p>reservas@grandhotelbariloche.com</p>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-8 pb-80px">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3005.024140148418!2d-71.30608378458201!3d-41.13399897928826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x961a7b71e69754f9%3A0xfa24b97df0020edd!2sGrand%20Hotel%20Bariloche!5e0!3m2!1ses!2ses!4v1592911354589!5m2!1ses!2ses" width="100%" height="450" frameborder="2px" style={{border:'2px', padding: '20px'}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                    <div className="row justify-content-center" id="attractions">
                     <div className="col-12 text-center pb-80px">
                        <div className="section-intro__style">
                            <Image src={bed1} alt=""></Image>
                        </div>
                         <h2>ssNssNssNssNssNssN</h2>
                     </div>
                                <div className="col-sm-6 col-lg-5 mb-4 mt-5 mb-lg-0">
                            <div className="categories_post">
                                <img className="card-img rounded-0" height="280px"src={restaurant} alt="post"/>
                                <div className="categories_details">
                                    <div className="categories_text">
                                        <a href="blog-single.html">
                                            <h5>ssNssNssNssNssNssN</h5>
                                        </a>
                                        <div className="border_line"></div>
                                        <p>ssNssNssNssNssNssNssN</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-5 mb-4 mt-5 mb-lg-0">
                            <div className="categories_post">
                                <img className="card-img rounded-0" height="280px" src={kayak} alt="post"/>
                                <div className="categories_details">
                                    <div className="categories_text">
                                        <a href="blog-single.html">
                                            <h5>ssNssNssNssNssNssNssN</h5>
                                        </a>
                                        <div className="border_line"></div>
                                        <p>ssNssNssNssNssN</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-5 mb-4 mt-5 mb-lg-0">
                            <div className="categories_post">
                                <img className="card-img rounded-0" height="280px" src={casino} alt="post"/>
                                <div className="categories_details">
                                    <div className="categories_text">
                                        <a href="blog-single.html">
                                        <h5>ssNssNssNssNssNssNssNssN</h5>
                                        </a>
                                        <div className="border_line"></div>
                                        <p>ssNssNssNssNssNssNssNssNssNssNv</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-5 mb-4 mt-5 mb-lg-0">
                            <div className="categories_post">
                                <img className="card-img rounded-0" height="280px" src={centroCivico} alt="post"/>
                                <div className="categories_details">
                                    <div className="categories_text">
                                        <a href="blog-single.html">
                                            <h5>ssNssNssNssNssNssNssNssNssNssN</h5>
                                        </a>
                                        <div className="border_line"></div>
                                        <p>ssNssNssNssNssNssNssNssNssNv</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-5 mb-4 mt-5 mb-lg-0">
                            <div className="categories_post">
                                <img className="card-img rounded-0" height="280px" src={museo} alt="post"/>
                                <div className="categories_details">
                                    <div className="categories_text">
                                        <a href="blog-single.html">
                                            <h5>ssNssNssNssNssNssNssNssNv</h5>
                                        </a>
                                        <div className="border_line"></div>
                                        <p>ssNssNssNvvvvssNssN</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-5 mb-4 mt-5 mb-lg-0">
                            <div className="categories_post">
                                <img className="card-img rounded-0" height="280px" src={chocolate} alt="post"/>
                                <div className="categories_details">
                                    <div className="categories_text">
                                        <a href="blog-single.html">
                                            <h5>ssNssNssNssNssNssNssNssNssN</h5>
                                        </a>
                                        <div className="border_line"></div>
                                        <p>ssNssNssNssNssNssNssNssNssNssNssNssN</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
        </section>
        {/*blog area*/}
     
    </div>
    )
}

export default Blog