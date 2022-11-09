import React from 'react';
import sectionOne from './../assets/sectionOne.jpg'

const HomePageSectionOne = () => {
    return (
        <div className="hero md:h-[450px] bg-slate-600 mb-5 rounded-lg">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={sectionOne} className="max-w-sm rounded-lg shadow-2xl mask mask-decagon lg:h-[350px] lg:w-[550px]" alt="" />
                <div>
                    <h1 className="text-5xl font-bold text-white">Don't You wanna<br />
                        feel the horizon?</h1>
                    <p className="py-3 text-white">We dont forget about your<br />safety. We provide our best safety kits for you.<br />
                        A jump from 10,000 feet can boost your adrenaline to the peak!</p>
                </div>
            </div>
        </div>
    );
};

export default HomePageSectionOne;