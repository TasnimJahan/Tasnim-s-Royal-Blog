import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import './Header.css';
import slide1 from '../../../images/slide1.jpg'
import slide2 from '../../../images/slide2.jpg'
import slide3 from '../../../images/slide3.jpg'

import { Carousel } from 'react-bootstrap';

const Header = () => {
    return (
        <div className="home">
            <Navbar/>
            <Carousel fade>
                <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100 h-100"
                    src={slide1}
                    alt="First slide"
                    />
                    <Carousel.Caption  className="caption">
                    <div className="bg"><p className="bgp">Worlds best Retro based blog website</p></div>
                    <p className="extraStyle">Worlds best Retro based blog website</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100"
                    src={slide2}
                    alt="Second slide"
                    />

                    <Carousel.Caption  className="caption">
                    <div className="bg"><p className="bgp">Worlds best Retro based blog website</p></div>
                    <p className="extraStyle">Worlds best Retro based blog website</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100"
                    src={slide3}
                    alt="Third slide"
                    />

                    <Carousel.Caption  className="caption">
                    <div className="bg"><p className="bgp">Worlds best Retro based blog website</p></div>
                    <p className="extraStyle">Worlds best Retro based blog website</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Header;


