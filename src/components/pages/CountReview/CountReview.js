import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CountUp from 'react-countup';
import { AiFillCar, AiOutlineMessage, AiOutlineTrophy, AiOutlineUser } from "react-icons/ai";

const CountReview = () => {
    return (
        <div className='container shadow my-5 p-3'>
            <h3 className='mt-5 text-center'>LATEST UPDATES</h3>
            <Row className='my-5'>
                <Col lg={4}>
                    <h4 className='mb-5'>CAR In STOKE</h4>
                    <AiFillCar style={{ fontSize: '50px' }} className='text-danger'></AiFillCar>
                    <h1 className='mt-3'><CountUp end={58462}></CountUp></h1>
                </Col>

                <Col lg={4}>
                    <h4 className='mb-5'>DEALER REVIEWS</h4>
                    <AiOutlineMessage style={{ fontSize: '50px' }} className=' text-danger'></AiOutlineMessage>
                    <h1 className='mt-3'><CountUp end={84}></CountUp></h1>
                </Col>

                <Col lg={4}>
                    <h4 className='mb-5'>AWARDS</h4>

                    <AiOutlineTrophy style={{ fontSize: '50px' }} className='text-danger'></AiOutlineTrophy>
                    <h1 className='mt-3'><CountUp end={12}></CountUp></h1>
                </Col>
            </Row>

        </div>
    );
};

export default CountReview;