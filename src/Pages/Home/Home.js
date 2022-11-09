import React from 'react';
import HomePageSectionOne from '../../HomePageSectionOne/HomePageSectionOne';
import HomePageSectionTwo from '../../HomePageSectionTwo/HomePageSectionTwo';
import Banner from './Banner/Banner';


const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <HomePageSectionOne></HomePageSectionOne>
            <HomePageSectionTwo></HomePageSectionTwo>
        </div>
    );
};

export default Home;