import React from 'react';
import sectionTwo from './../assets/sectionTwo.jpg'

const HomePageSectionTwo = () => {
    return (
        <div className="hero md:h-[450px] bg-slate-600 mb-5 rounded-lg">
            <div className="hero-content flex-col lg:flex-row">
                <img src={sectionTwo} className="max-w-sm rounded-lg shadow-2xl mask mask-decagon lg:h-[350px] lg:w-[550px]" alt="" />
                <div>
                    <h1 className="text-5xl font-bold text-white">Don't You wanna<br />
                        paint the sky?</h1>
                    <p className="py-3 text-white">You can fly with your <br />friends and family and enjoy the earth from the sky.<br />
                        Your dream can become true, your jump can become your lifetime experience!</p>
                </div>
            </div>
        </div>
    );
};

export default HomePageSectionTwo;