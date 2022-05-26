import { faDisplay, faHeart, faLandmarkFlag, faUsersBetweenLines } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const BusinessSummery = () => {
    return (
        <div className='px-12 my-12'>
            <div className='text-center'>
                <h2 className='text-error font-bold text-4xl uppercase mt-8'>Business Summery</h2>
                <p className='text-xl my-6'>To our clients, our company is name of expectation</p>
            </div>
            <div className="stats stats-vertical lg:stats-horizontal shadow-lg w-full">
                <div className="stat text-center">
                    <div className="stat-figure text-secondary">
                        <FontAwesomeIcon icon={faLandmarkFlag} size="3x" />
                    </div>
                    <div className="stat-value text-secondary">72</div>
                    <div className="text-xl">Countries</div>
                </div>
                <div className="stat text-center">
                    <div className="stat-figure text-primary">
                        <FontAwesomeIcon className='text-black' icon={faDisplay} size="3x" />
                    </div>
                    <div className="stat-value text-black">535+</div>
                    <div className="text-xl">Complete Projects</div>
                </div>

                <div className="stat text-center">
                    <div className="stat-figure text-black">
                        <FontAwesomeIcon icon={faUsersBetweenLines} size="3x" />
                    </div>
                    <div className="stat-value text-black">273+</div>
                    <div className="text-xl">Happy Clients</div>
                </div>

                <div className="stat text-center">
                    <div className="stat-figure text-secondary">
                        <FontAwesomeIcon icon={faHeart} size="3x" />
                    </div>
                    <div className="stat-value text-secondary">432+</div>
                    <div className="text-xl">Feedbacks</div>
                </div>
            </div>
            <div className='text-center py-8 shadow-lg rounded-lg max-w-lg mx-auto my-8'>
                <h2 className='text-xl font-bold uppercase'>If Any Query, Please Get in Touch with Us.</h2>
                <button className='btn btn-neutral my-4 font-bold'>Contact Us</button>
            </div>
        </div>
    );
};

export default BusinessSummery;