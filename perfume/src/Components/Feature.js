import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {BsCheckCircleFill} from 'react-icons/bs';

const Feature = () => {


    return (


        <>

            <section className='Feature section_gaps'>

                <Container>

                    <div className="FeatureContent">

                        <Row className="justify-content-md-center">
                            
                            <Col xs={7}>

                                <div className="Header">

                                    <h2>নিচের এই কারণ গুলো যদি আপনার সাথে হয়ে থাকে তবে পারফিউম টি আপনার জন্য</h2>

                                </div>

                            </Col>

                        </Row>

                        <Row>
                        
                            <Col xs={6}>

                                <div className="FeatureItem">

                                    <div className="svg">
                                        <BsCheckCircleFill/>
                                    </div>

                                    <h3>ট্রাভেল করায় সৃষ্টি হয় ঘাম।যা আপনার গায়ে সৃষ্টি করে দুর্গন্ধ।</h3>

                                </div>

                            </Col>

                            <Col xs={6}>

                                <div className="FeatureItem">

                                    <div className="svg">
                                        <BsCheckCircleFill/>
                                    </div>

                                    <h3>বাসে অনেক মানুষের এক সাথে  থাকায় বাজে গন্ধের সৃষ্টি হয়। এবং আপনি এর ভুক্তভোগী।</h3>

                                </div>

                            </Col>

                            <Col xs={6}>

                                <div className="FeatureItem">

                                    <div className="svg">
                                        <BsCheckCircleFill/>
                                    </div>

                                    <h3>ঘামের জন্য মিটিং-এ আত্মবিশ্বাসের সাথে কথা বলতে পারছেন না ।</h3>

                                </div>

                            </Col>

                            <Col xs={6}>

                                <div className="FeatureItem">

                                    <div className="svg">
                                        <BsCheckCircleFill/>
                                    </div>

                                    <h3>চাচ্ছেন এমন পারফিউম ব্যবহার করতে যা মোটামুটি দীর্ঘ সময় স্মেল দিবে।</h3>

                                </div>

                            </Col>

                        </Row>

                        <div className="future_top">
                            <img src="assets/images/future_top.png" alt="" />
                        </div>

                        <div className="future_middle">
                            <img src="assets/images/future_middle.png" alt="" />
                        </div>

                    </div>

                </Container>

            </section>

        </>


    )


}

export default Feature