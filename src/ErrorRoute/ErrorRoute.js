import React from 'react';
import { Link } from 'react-router-dom';

const eErrorRoute = () => {
    return (
        <div>
            <h1 className='text-5xl font-bold text-red-600 text-center mt-32'>404!</h1>
            <Link to="/"><button className="btn btn-outline btn-info mt-24 ml-[580px]">Back To Home</button></Link>
        </div>
    );
};

export default eErrorRoute;