/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import {BsArrowRight} from 'react-icons/bs';


const Video = () => {




    return (


        <>
            <section className='Video section_gaps'>

                <Container>

                    <Row className="justify-content-md-center">
                        
                        <Col xs={10}>

                            <div className="VideoContent">

                                <div className="header">
                                    <h2>কেন আমাদের কাছ থেকে পারফিউম টি কিনবেন?</h2>
                                </div>

                                <div className="VideoPart">
                                    <ReactPlayer url='https://youtu.be/wDhysutq8-w' />
                                </div>

                                <a href="" className='bg'>অর্ডার করুন <BsArrowRight/></a>

                            </div>

                        </Col>

                    </Row>

                </Container>

                <div className="VideoOverlay">
                    <img src="assets/images/video_flower.png" alt="" />
                </div>

            </section>

        </>


    )


}

export default Video