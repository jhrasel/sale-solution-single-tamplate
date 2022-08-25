import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {BsBoxSeam, BsTruck, BsShieldCheck} from 'react-icons/bs';
import {Ri24HoursFill} from 'react-icons/ri';


const Delivary = () => {


    return (


        <>
        
            <section className='Delivary section_gaps'>

                <Container>

                    <div className="DelivaryContent">

                        <Row>
                            
                            <Col xs={3}>

                                <div className="DelivaryItem d_flex">

                                    <div className="svg">
                                        <BsBoxSeam/>
                                    </div>
                                    
                                    <div className="text">

                                        <h6>Discount</h6>
                                        <p>Every week new sales</p>	

                                    </div>

                                </div>

                            </Col>

                            <Col xs={3}>

                                <div className="DelivaryItem d_flex">

                                    <div className="svg">
                                        <BsTruck/>
                                    </div>
                                    
                                    <div className="text">

                                        <h6>Free Delivery</h6>
                                        <p>100% Free for all orders</p>	

                                    </div>

                                </div>

                            </Col>

                            <Col xs={3}>

                                <div className="DelivaryItem d_flex">

                                    <div className="svg">
                                        <Ri24HoursFill/>
                                    </div>
                                    
                                    <div className="text">

                                        <h6>Great Support 24/7</h6>
                                        <p>We care your experiences</p>	

                                    </div>

                                </div>

                            </Col>

                            <Col xs={3}>

                                <div className="DelivaryItem d_flex">

                                    <div className="svg">
                                        <BsShieldCheck/>
                                    </div>
                                    
                                    <div className="text">

                                        <h6>Secure Payment</h6>
                                        <p>100% Secure Payment Method</p>	

                                    </div>

                                </div>

                            </Col>

                        </Row>

                    </div>

                    {/* Foolter Logo */}
                    <div className="footer_logo">
                        
                        <Row>
                                
                            <Col xs={12}>

                                <div className="img">

                                    <img src="assets/images/logo.png" alt="" />

                                </div>

                            </Col>

                        </Row>

                    </div>

                </Container>

            </section>

        </>


    )


}

export default Delivary