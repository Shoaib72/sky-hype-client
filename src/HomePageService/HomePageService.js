import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


const HomePageService = ({ service }) => {
    const { serviceName, serviceImage, servicePrice, serviceDescription, serviceRating } = service;
    return (
        <div className="card w-96 glass bg-slate-500">
            <figure>
                <PhotoProvider>
                    <PhotoView src={serviceImage}>
                        <img src={serviceImage} alt="" />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{serviceName}</h2>
                <p>{serviceDescription.slice(0, 80)}...</p>
                <p><span className='text-lg font-bold'>Rating: </span>{serviceRating}</p>
                <p><span className='text-lg font-bold'>Price: </span>{servicePrice}</p>
                <div className="card-actions justify-end">
                    <Link to={`/services/${service._id}`}><button className="btn btn-outline btn-info">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default HomePageService;