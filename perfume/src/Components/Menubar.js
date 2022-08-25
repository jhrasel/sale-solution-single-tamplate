import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const Menubar = () => {


    return (


        <>
        

            <section className='Menubar'>

                <Container>

                    <Row className="justify-content-md-center">
                        <Col xs={3}>
                            <div className="MenubarImg">
                                <img src="assets/images/logo.png" alt="" />
                            </div>
                        </Col>
                    </Row>

                </Container>

                <div className="Menubar_overlay">
                    <img src="assets/images/banner_rose.png" alt="" />
                </div>

            </section>


        </>


    )

}

export default Menubar