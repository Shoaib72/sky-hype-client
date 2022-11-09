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
                    <p className="py-3 text-white">Provident cupiditate voluptatem <br />et in. Quaerat fugiat ut assumenda excepturi<br />
                        exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
            </div>
        </div>
    );
};

export default HomePageSectionOne;