import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {FaFacebookF} from 'react-icons/fa';
import {AiFillYoutube, AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';


const Footer = () => {


    return (


        <>
        

            <section className='Footer section_gaps'>

                <Container>

                    <div className="FooterContent">
                        
                        <Row className='d_flex'>
                                
                            <Col xs={4}>

                                <div className="FooterItem">
                                    <h6>Copyright © 2022 FR agrances. All rights reserved.</h6>
                                </div>

                            </Col>

                            <Col xs={4}>

                                <div className="FooterItem">
                                    
                                    <div className="icon d_flex">

                                        <div className="svg">
                                            <FaFacebookF/>
                                        </div>

                                        <div className="svg">
                                            <AiFillYoutube/>
                                        </div>

                                        <div className="svg">
                                            <AiFillInstagram/>
                                        </div>

                                        <div className="svg">
                                            <AiOutlineTwitter/>
                                        </div>

                                    </div>
                                    
                                </div>

                            </Col>

                        </Row>

                    </div>

                </Container>

            </section>


        </>

        
    )


}

export default Footer