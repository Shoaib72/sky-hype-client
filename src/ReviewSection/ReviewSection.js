import React from 'react';

const ReviewSection = ({ singleReview }) => {
    const { reviewersName, reviewerEmail, serviceName, reviewerImage, review } = singleReview;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={reviewerImage} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{reviewersName}</h2>
                <p><span className='font-bold text-xl'>Service Name: </span>{serviceName}</p>
                <p><span className='font-bold text-xl'>Review: </span>{review}</p>
                <p><span className='font-bold text-xl'>Email: </span>{reviewerEmail}</p>
            </div>
        </div>
    );
};

export default ReviewSection;