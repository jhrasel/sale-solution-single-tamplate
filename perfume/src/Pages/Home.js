import React from 'react';
import { FaBeer } from 'react-icons/fa';
import About from '../Components/About';
import Banner from '../Components/Banner';
import ClientReview from '../Components/ClientReview';
import Delivary from '../Components/Delivary';
import Feature from '../Components/Feature';
import Footer from '../Components/Footer';
import FormPart from '../Components/FormPart';

import Menubar from '../Components/Menubar';
import Product from '../Components/Product';
import Video from '../Components/Video';

const Home = () => {




    return (


        <>
        
            {/* Menu */}
            <Menubar></Menubar>

            {/* Banner */}
            <Banner></Banner>

            {/* Product */}
            <Product></Product>

            {/* Video */}
            <Video></Video>

            {/* Feature */}
            <Feature></Feature>

            {/* About */}
            <About></About>

            {/* Client Review */}
            <ClientReview></ClientReview>

            {/* FormPart */}
            <FormPart></FormPart>

            {/* Delivary */}
            <Delivary></Delivary>

            {/* Footer */}
            <Footer></Footer>

            <div className="section_gaps"></div>


        </>


    )


}

export default Home