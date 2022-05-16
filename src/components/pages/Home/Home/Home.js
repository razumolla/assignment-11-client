import React from 'react';
import Services from '../../Services/Services';
import Footer from '../../shared/Footer/Footer';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>

            <Footer> </Footer>
        </div>
    );
};

export default Home;