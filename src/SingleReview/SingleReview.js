import React from 'react';

const SingleReview = ({ reviewSingle }) => {
    const { reviewersName, reviewerEmail, serviceName, reviewerImage, review } = reviewSingle;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={reviewerImage} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{reviewersName}</h2>
                <p>{review}</p>
                <div className="card-actions flex justify-center">
                    <button className="btn btn-primary">Edit</button>
                    <button className="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;