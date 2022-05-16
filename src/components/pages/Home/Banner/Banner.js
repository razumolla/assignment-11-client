import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img className="d-block w-100" src={`https://i.ibb.co/42LCq4y/ban1.png`} alt="First slide" />
                    <Carousel.Caption>
                        <h4>New Super Car</h4>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={`https://i.ibb.co/0qJ7Sjg/ban2.png`}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>10% Discount </h3>
                        <h6>Minimum Order 50 cars... </h6>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={`https://i.ibb.co/tK8YYVd/ban3.png`}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3> Latest New BMW </h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;