/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {BsArrowRight} from 'react-icons/bs';

const Banner = () => {


    return (
        

        <>
        
            <section className='Banner section_gaps'>

                <Container>

                    <Row className='d_flex'>

                        <Col xs={6}>

                            <div className="BannerContent">
                                
                                <h4>বেস্ট সেলিং</h4>
                                <h1>শরীরের ঘামের দুর্গন্ধ সরানো জন্য তাজা সুবাস মিষ্টি সুগন্ধি যা মানুষকে আকর্ষণ করে!</h1>
                                <h2>বর্তমান মূল্যঃ ১০০০ টাকা</h2>
                                <del>পূর্বের মূল্যঃ ১০৫০ টাকা</del>

                                <div className="order d_flex">

                                    <a href="" className='bg'>অর্ডার করুন <BsArrowRight/></a>

                                    <div className="right">
                                        <h6>+8801799733234</h6>
                                        <p>অর্ডার পেতে কল করুন এই নাম্বারে</p>      
                                    </div>

                                </div>

                            </div>

                        </Col>

                        <Col xs={6}>

                            <div className="BannerImg">
                                
                                <img src="assets/images/banner_img.png" alt="" />

                                <div className="imgOverlay">
                                    <div className="item">
                                        <h3>54%</h3>
                                        <p>Discount</p>
                                    </div>
                                </div>

                                <div className="butterfly">
                                    <img src="assets/images/butterfly.png" alt="" />
                                </div>

                            </div>

                        </Col>

                    </Row>

                </Container>

            </section>

        </>

    )


}

export default Banner