import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewSection from '../../ReviewSection/ReviewSection';

const ServiceDetails = () => {

    const { service, reviews } = useLoaderData();
    const { serviceImage, serviceName, serviceDescription, serviceRating, servicePrice, jumpHeight } = service;
    return (
        <div className='grid md:grid-cols-2 grid-cols-1 gap-8 justify-items-center mb-10'>

            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={serviceImage} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title"><span className='font-bold text-xl'>Service: </span>{serviceName}</h2>
                    <p>{serviceDescription}</p>
                    <p><span className='text-lg font-bold'>Rating: </span>{serviceRating}</p>
                    <p><span className='text-lg font-bold'>Price: </span>{servicePrice}</p>
                    <p><span className='text-lg font-bold'>Jump Height: </span>{jumpHeight}</p>

                </div>
            </div>
            <div>
                <h2 className='text-center font-bold mt-5 mb-5 text-3xl'>Reviews</h2>
                {
                    reviews.map(singleReview => <ReviewSection key={singleReview._id} singleReview={singleReview}></ReviewSection>)
                }
            </div>
        </div>
    );
};

export default ServiceDetails;