import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomePageSectionOne from '../../HomePageSectionOne/HomePageSectionOne';
import HomePageSectionTwo from '../../HomePageSectionTwo/HomePageSectionTwo';
import HomePageService from '../../HomePageService/HomePageService';
import useTitle from '../../Hooks/useTitle';
import Banner from './Banner/Banner';



const Home = () => {
    const [services, setServices] = useState([]);
    useTitle('Home');
    useEffect(() => {
        fetch('http://localhost:5000/home')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div>
            <Banner></Banner>
            <h2 className='text-3xl font-bold text-slate-600 mt-4 mb-5 text-center'>My Services</h2>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-3 mt-7 mb-7 justify-items-center'>
                {
                    services.map(service => <HomePageService key={service.serviceId} service={service}></HomePageService>)
                }
            </div>
            <Link to="/services"><button className="btn btn-outline btn-info mt-7 mb-7 lg:ml-[590px] ml-[180px]">Load More...</button></Link>
            <HomePageSectionOne></HomePageSectionOne>
            <HomePageSectionTwo></HomePageSectionTwo>
        </div>
    );
};

export default Home;