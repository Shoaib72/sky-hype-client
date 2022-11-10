import React, { useEffect, useState } from 'react';
import SingleServiceCard from '../../SigleServiceCard/SingleServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div>
            <h2 className='text-4xl font-bold text-slate-600 text-center mb-8 mt-8'>Services</h2>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-5 justify-items-center mt-7 mb-12'>
                {
                    services.map(service => <SingleServiceCard key={service._id} service={service}></SingleServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;