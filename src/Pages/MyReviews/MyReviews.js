import React, { useEffect, useState } from 'react';
import useTitle from '../../Hooks/useTitle';
import SingleReview from '../../SingleReview/SingleReview';

const MyReviews = () => {
    const [reviews, setReviews] = useState([])
    useTitle('My Reviews')
    useEffect(() => {
        fetch('https://sky-hype-server.vercel.app/my-reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className=' grid md:grid-cols-3 grid-cols-1 gap-9'>
            {
                reviews.map(reviewSingle => <SingleReview key={reviewSingle._id} reviewSingle={reviewSingle}></SingleReview>)
            }
        </div>
    );
};

export default MyReviews;