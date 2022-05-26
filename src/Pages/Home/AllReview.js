import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const AllReview = ({ review, refetch }) => {
    const { _id, name, email, ratings, description } = review;
    return (
        <div className=''>
            <div className="bg-base-100 shadow-xl rounded-2xl">
                <div style={{ height: '300px' }} className="flex flex-col justify-center items-center p-5">
                    <h2 className="text-center text-xl uppercase font-bold">{name}</h2>
                    <p className='text-2xl text-error my-3'>{email}</p>
                    <h3 className='text-4xl'><span className='font-bold text-secondary'>{ratings}</span> star <FontAwesomeIcon className='text-secondary' icon={faStar} spin /></h3>
                    <p className='mt-6'>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default AllReview;