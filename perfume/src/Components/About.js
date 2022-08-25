import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {BsCheckCircleFill} from 'react-icons/bs';

const About = () => {


    return (


       <>
       
            <section className='About'>

                <Container>

                    <div className="AboutContent">

                        <Row className="justify-content-md-center">
                            
                            <Col xs={8}>

                                <div className="AboutContent">

                                    <h2>আমাদের পারফিউম কেন ভালো? </h2>

                                    <h3> FR agrances একটি সুগন্ধি পরিষেবা আমাদের লক্ষ্য হল মানুষের  শরীরে দুরগন্ধ ধূর করা এবং ২৪ ঘণ্টা  শুগন্ধের মাধ্যমে নিজেদের প্রকাশ করার ক্ষমতা দেওয়া । এটি আমাদের মানুষের আত্মবিশ্বাস বাড়াতেও সাহায্য করে। গ্রাহকরা ভাল গন্ধ পাই তা জেনে অবিশ্বাস্যভাবে আশ্বস্ত হয়ে ১০০% আস্থার সাথে আমাদের থেকে এই পারফিউম  ক্রয় করতে পারেন । আমরা সরাসরি গ্রাহকদের হাতে পৌছে দেয়ার চেষ্টা অব্যাহত আছে, আপনি ও নিয়ে দেখতে পারেন।</h3>

                                </div>

                            </Col>

                        </Row>

                    </div>

                </Container>

                <div className="AboutRight">
                    <img src="assets/images/about_right.png" alt="" />
                </div>

                <div className="AboutLeft">
                    <img src="assets/images/about_left.png" alt="" />
                </div>

            </section>
        

       </> 


    )


}

export default About