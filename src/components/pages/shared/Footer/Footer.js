import React from 'react';
import { Button, Col, Row } from "react-bootstrap";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
const Footer = () => {

    return (

        <div style={{ margin: "0" }} className="bg-dark text-light p-3 d-flex justify-content-center">
            <Row className="container">
                <Col lg={4}>
                    <div className="text-start container my-3">
                        <h5 className="mb-3">OFFICE LOCATION</h5>
                        <hr />
                        <p>Dhaka, Elephant Road</p>
                        <p>880F, Hairtail R.A Plaza</p>
                    </div>

                    <div className="text-start container my-3">
                        <h5 className="mb-3">CONTACT US</h5>
                        <hr />
                        <p>
                            <BsFillTelephoneFill className="me-3"></BsFillTelephoneFill>
                            01777-333777
                        </p>
                        <p>
                            <AiFillMail className="me-3"></AiFillMail>rajuahmed@gmail.com
                        </p>
                    </div>
                </Col>

                <Col lg={4}>
                    <div className="text-start container my-3">
                        <h5 className="mb-3">OPENING HOURS</h5>
                        <hr />
                        <p>
                            Sat-Thus: 10:00AM-10:00PM
                            <br />
                            Fri: Closed
                        </p>
                    </div>
                </Col>

                <Col lg={4}>
                    <div className="text-start container my-3 ">
                        <h5 className="mb-3">KEEP IN TOUCH....</h5>
                        <hr />
                        <p>
                            Keep up on our always evolving products features and
                            technology. Enter your e-mail and subscribe to our newsletter.
                        </p>
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="form-control my-2"
                        />
                        <Button variant="info w-100 mb-3">SUBSCRIBE</Button>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Footer;