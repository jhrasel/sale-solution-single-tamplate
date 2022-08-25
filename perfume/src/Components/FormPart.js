/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {AiFillLock} from 'react-icons/ai';

const FormPart = () => {


    return (


        <>
        
            <section className='FormPart section_gaps'>

                <Container>

                    <Row className="justify-content-md-center">
                        
                        <Col xs={6}>

                            <div className="header text-center">
                                <h2>অর্ডার কনফার্ম করতে নিচের ফরম টি পূরণ করুন</h2>
                            </div>

                        </Col>

                    </Row>

                    <div className="FormPartContent">

                        <Row>
                        
                            <Col xs={6}>

                                <div className="FormPartLeft">
                                    
                                    <h6>Billing details</h6>

                                    <div className="CustomeInput">
                                        <input type="text" placeholder='আপনার নাম লিখুন *' />
                                    </div>

                                    <div className="CustomeInput">
                                        <input type="text" placeholder='আপনার মোবাইল নাম্বার লিখুন *' />
                                    </div>

                                    <div className="CustomeInput">
                                        <input type="text" placeholder='আপনার সম্পূর্ণ ঠিকানা লিখুন *' />
                                    </div>

                                    <div className="Payment">

                                        <h3>Paymet</h3>

                                        <div className="Pay CustomeInput d_flex">
                                            <div class="checkbox path">
                                                <input type="checkbox" id='delivary' />
                                                <svg viewBox="0 0 21 21">
                                                    <path d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"></path>
                                                </svg>
                                            </div>
                                            <label htmlFor="delivary">ক্যাশ অন ডেলিভারি</label>
                                        </div>

                                        <div className="Pay CustomeInput d_flex">
                                            <div class="checkbox path">
                                                <input type="checkbox" id='bKash' />
                                                <svg viewBox="0 0 21 21">
                                                    <path d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"></path>
                                                </svg>
                                            </div>
                                            <label htmlFor="bKash">bKash</label>
                                        </div>

                                        <div className="Pay CustomeInput d_flex">
                                            <div class="checkbox path">
                                                <input type="checkbox" id='Nagad' />
                                                <svg viewBox="0 0 21 21">
                                                    <path d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"></path>
                                                </svg>
                                            </div>
                                            <label htmlFor="Nagad">Nagad</label>
                                        </div>

                                    </div>

                                </div>

                            </Col>

                            <Col xs={6}>

                                <div className="FormPartRight">
                                    
                                    <h6>Your order</h6>

                                    <ul>

                                        <li className="d_flex d_justify">
                                            <h4>Product</h4>
                                            <h5>Subtotal</h5>
                                        </li>

                                        <li className='PaymentImg d_flex d_justify'>

                                            <div className="left d_flex">
                                                <img src="assets/images/product_img.png" alt="" />
                                                <p>Flower Of Story Men’s Perfume Set Boss</p>
                                            </div>

                                            <div className="middle">
                                                <span>X 1</span>
                                            </div>

                                            <div className="price">
                                                <h3>1,690.00</h3>
                                            </div>

                                        </li>

                                        <li className="subtotal d_flex d_justify">
                                            <h4>Subtotal</h4>
                                            <h5>1,690.00</h5>
                                        </li>

                                        <li className="Pay subtotal d_flex d_justify">

                                            <h4>Shipping</h4>
                                            
                                            <div className="">

                                                <div className="CustomeInput d_flex">
                                                    <div class="checkbox path">
                                                        <input type="checkbox" id='InDhaka' />
                                                        <svg viewBox="0 0 21 21">
                                                            <path d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"></path>
                                                        </svg>
                                                    </div>
                                                    <label htmlFor="InDhaka">ঢাকার মধ্যে</label>
                                                </div>

                                                <div className="CustomeInput d_flex">
                                                    <div class="checkbox path">
                                                        <input type="checkbox" id='OutDhaka' />
                                                        <svg viewBox="0 0 21 21">
                                                            <path d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"></path>
                                                        </svg>
                                                    </div>
                                                    <label htmlFor="OutDhaka">ঢাকার বাহিরে</label>
                                                </div>

                                            </div>

                                        </li>

                                        <li className="d_flex d_justify">
                                            <h4>Total</h4>
                                            <h5>1,690.00</h5>
                                        </li>

                                    </ul>

                                    <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a href="">privacy policy</a>.</p>

                                    <button className="bg d_flex"> <AiFillLock /> Place Order  $49.00</button>

                                </div>

                            </Col>

                        </Row>

                    </div>



                </Container>

                <div className="FormPartLeftOverlay">
                    <img src="assets/images/form_left.png" alt="" />
                </div>

                <div className="FormPartRightOverlay">
                    <img src="assets/images/form_right.png" alt="" />
                </div>

            </section>
        
        </>

        
    )


}

export default FormPart