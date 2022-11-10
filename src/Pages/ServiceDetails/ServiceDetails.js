import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import ReviewSection from '../../ReviewSection/ReviewSection';
import swal from 'sweetalert';

const ServiceDetails = () => {
    const { user, setUser } = useContext(AuthContext)
    const [review, setReview] = useState({});
    const { service, reviews } = useLoaderData();
    const { serviceImage, serviceName, serviceDescription, serviceRating, servicePrice, jumpHeight } = service;
    const handleReviewForm = event => {
        event.preventDefault();
        fetch('http://localhost:5000/services/:id', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)

        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    swal("Good job!", "Service Added Successfully!", "success");
                    event.target.reset()
                }
            });
    }
    const handleReviewInputBlur = (event) => {
        const value = event.target.value;
        const field = event.target.name;
        const newReview = { ...review };
        newReview[field] = value;
        setReview(newReview);
    }
    return (
        <div className='grid grid-cols-1 gap-8 justify-items-center mb-10'>

            <div className='flex md:flex-row gap-10 flex-col'>
                <div className="card w-96 bg-base-100 shadow-xl h-[800px]">
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
                    {
                        user?.uid ?
                            <form className='py-5 bg-slate-600 p-14 mb-10 rounded-lg' onSubmit={handleReviewForm}>
                                <h1 className='text-2xl font-bold text-center text-white mb-5'>Add Your Review</h1>
                                <input onBlur={handleReviewInputBlur} type="text" name="reviewersName" placeholder="Enter Your Name" className="input input-bordered input-md w-full max-w-xs my-2" required />
                                <br />
                                <input onBlur={handleReviewInputBlur} type="email" name="reviewerEmail" placeholder={user.email} className="input input-bordered input-md w-full max-w-xs my-2" readOnly />
                                <br />
                                <input onBlur={handleReviewInputBlur} type="text" name="serviceName" placeholder={serviceName} value={serviceName} className="input input-bordered input-md w-full max-w-xs my-2" readOnly />
                                <br />
                                <input onBlur={handleReviewInputBlur} type="text" name="reviewerImage" placeholder="Enter A image URL" className="input input-bordered input-md w-full max-w-xs my-2" required />
                                <br />
                                <textarea onBlur={handleReviewInputBlur} className="textarea textarea-info my-2 w-80 h-80" name="review" placeholder="Enter Your review" required></textarea>
                                <br />
                                <button type="submit" className="btn btn-outline btn-info ml-[100px]">Add Review</button>
                            </form>
                            :

                            <div>
                                <h2 className='text-3xl font-bold text-slate-600'>Please Log In</h2>
                                <h2 className='text-3xl font-bold text-slate-600'>To Add Review</h2>
                            </div>

                    }
                </div>
            </div>
            <div className='bg-slate-600 rounded-lg flex flex-col gap-10'>
                <h2 className='text-center font-bold mt-5 mb-5 text-3xl'>Reviews</h2>
                {
                    reviews.map(singleReview => <ReviewSection key={singleReview._id} singleReview={singleReview}></ReviewSection>)
                }
            </div>
        </div>
    );
};

export default ServiceDetails;