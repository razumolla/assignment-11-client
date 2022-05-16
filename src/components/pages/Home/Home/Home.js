import React from 'react';
import CountReview from '../../CountReview/CountReview';
import Location from '../../Location/Location';
import Services from '../../Services/Services';
import Footer from '../../shared/Footer/Footer';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <CountReview></CountReview>
            <Location></Location>
            <Footer> </Footer>
        </div>
    );
};

export default Home;