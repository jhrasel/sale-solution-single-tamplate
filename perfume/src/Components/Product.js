import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Product = () => {


  return (


    <>
        
        <section className='Product section_gaps'>

            <Container>

                <Row>
                    
                    {/* item */}
                    <Col xs={3}>

                        <div className="ProductItem">
                            
                            <div className="img">
                                <img src="assets/images/product-1.png" alt="" />
                            </div>

                            <div className="text">
                                <h6>Executive Night 25ml</h6>
                                <p>পারফিউম এটি শুধুমাত্র একটি সুবাস নয় এটি একটি ঐতিহ্য</p>
                            </div>

                        </div>

                    </Col>

                    {/* item */}
                    <Col xs={3}>

                        <div className="ProductItem">
                            
                            <div className="img">
                                <img src="assets/images/product-2.png" alt="" />
                            </div>

                            <div className="text">
                                <h6>Executive Night 25ml</h6>
                                <p>পারফিউম এটি শুধুমাত্র একটি সুবাস নয় এটি একটি ঐতিহ্য</p>
                            </div>

                        </div>

                    </Col>

                    {/* item */}
                    <Col xs={3}>

                        <div className="ProductItem">
                            
                            <div className="img">
                                <img src="assets/images/product-3.png" alt="" />
                            </div>

                            <div className="text">
                                <h6>Executive Night 25ml</h6>
                                <p>পারফিউম এটি শুধুমাত্র একটি সুবাস নয় এটি একটি ঐতিহ্য</p>
                            </div>

                        </div>

                    </Col>

                    {/* item */}
                    <Col xs={3}>

                        <div className="ProductItem">
                            
                            <div className="img">
                                <img src="assets/images/product-4.png" alt="" />
                            </div>

                            <div className="text">
                                <h6>Executive Night 25ml</h6>
                                <p>পারফিউম এটি শুধুমাত্র একটি সুবাস নয় এটি একটি ঐতিহ্য</p>
                            </div>

                        </div>

                    </Col>

                </Row>

            </Container>

            <div className="product_overlay">
                <img src="assets/images/product_flower.png" alt="" />
            </div>

        </section>

    </>



  )


}

export default Product