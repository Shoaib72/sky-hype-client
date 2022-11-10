import React from 'react';
import { Link } from 'react-router-dom';
import dive1 from './../../../assets/dive1.jpg'
import dive2 from './../../../assets/dive2.jpg'
import dive3 from './../../../assets/dive3.jpg'
import dive4 from './../../../assets/dive4.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className="carousel w-full mb-5 rounded-lg h-[500px]">
            <div id="slide1" className="carousel-item relative w-full">
                <div className='carousel-img'>
                    <img src={dive1} className="w-[1300px] h-full" alt="" />
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-24 top-1/4">
                    <h1 className='md:text-5xl text-3xl text-white font-bold'>Fly With Me</h1>
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-24 md:top-1/3 top-2/4 md:mt-4">
                    <p className='text-white font-semibold'>Come fly with me! I have almost 10,000 successful jumps <br />
                        in my basket. You can have an amazing experience jumping with me!
                    </p>
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-24 md:top-1/2 top-3/4">
                    <Link to="/about-us"><button className="btn btn-outline btn-info">About</button></Link>
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-3">❮</a>
                    <a href="#slide2" className="btn btn-circle ml-3">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className='carousel-img'>
                    <img src={dive2} className="w-[1300px] h-full" alt="" />
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-24 top-1/4">
                    <h1 className='md:text-5xl text-3xl text-white font-bold'>Fly With Me</h1>
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-24 md:top-1/3 top-2/4 md:mt-4">
                    <p className='text-white font-semibold'>Come fly with me! I have almost 10,000 successful jumps <br />
                        in my basket. You can have an amazing experience jumping with me!
                    </p>
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-24 md:top-1/2 top-3/4">
                    <Link to="/about-us"><button className="btn btn-outline btn-info">About</button></Link>
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-3">❮</a>
                    <a href="#slide3" className="btn btn-circle ml-3">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className='carousel-img'>
                    <img src={dive3} className="w-[1300px] h-full" alt="" />
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-24 top-1/4">
                    <h1 className='md:text-5xl text-3xl text-white font-bold'>Fly With Me</h1>
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-24 md:top-1/3 top-2/4 md:mt-4">
                    <p className='text-white font-semibold'>Come fly with me! I have almost 10,000 successful jumps <br />
                        in my basket. You can have an amazing experience jumping with me!
                    </p>
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-24 md:top-1/2 top-3/4">
                    <Link to="/about-us"><button className="btn btn-outline btn-info">About</button></Link>
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-3">❮</a>
                    <a href="#slide4" className="btn btn-circle ml-3">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <div className='carousel-img'>
                    <img src={dive4} className="w-[1300px] h-full" alt="" />
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-24 top-1/4">
                    <h1 className='md:text-5xl text-3xl text-white font-bold'>Fly With Me</h1>
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-24 md:top-1/3 top-2/4 md:mt-4">
                    <p className='text-white font-semibold'>Come fly with me! I have almost 10,000 successful jumps <br />
                        in my basket. You can have an amazing experience jumping with me!
                    </p>
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-24 md:top-1/2 top-3/4">
                    <Link to="/about-us"><button className="btn btn-outline btn-info">About</button></Link>
                </div>
                <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-3">❮</a>
                    <a href="#slide1" className="btn btn-circle ml-3">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;