import React from 'react';

const SingleServiceCard = ({ service }) => {
    const { serviceName, serviceImage, servicePrice, serviceDescription, serviceRating } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={serviceImage} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{serviceName}</h2>
                <p>{serviceDescription.slice(0, 80)}...</p>
                <p><span className='text-lg font-bold'>Rating: </span>{serviceRating}</p>
                <p><span className='text-lg font-bold'>Price: </span>{servicePrice}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline btn-info">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default SingleServiceCard;