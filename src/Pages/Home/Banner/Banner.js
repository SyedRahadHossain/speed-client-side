import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner-1.jpg'
import banner2 from '../../../images/banner/banner-2.jpg'
import banner3 from '../../../images/banner/banner-3.jpg'
import banner4 from '../../../images/banner/banner-4.jpg'
import banner5 from '../../../images/banner/banner-5.jpg'
import banner6 from '../../../images/banner/banner-6.jpg'

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={banner2} alt="Second slide" />
                    <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={banner3} alt="Third slide" />

                    <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={banner4} alt="Fourth slide" />

                    <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={banner5} alt="Fourth slide" />

                    <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={banner6} alt="Fourth slide" />

                    <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;