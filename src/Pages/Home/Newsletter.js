import { faMailBulk, faMailForward } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import products from "../../assets/newsletter.jpg"

const Newsletter = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div>
                <img src={products} alt="" />
            </div>
            <div className='flex flex-col justify-center items-center bg-accent p-10'>
                <h2 className='text-2xl font-bold'>Join our newsletter</h2>
                <p className='my-6'>Sign up our newsletter and get more events & promotions!</p>
                <div className='flex items-center justify-center'>
                    <input type="text" placeholder="Your Email" className="input input-bordered w-full max-w-xs mr-6" /><FontAwesomeIcon icon={faMailForward} size="2x" className='text-white mr-5' /><Link to="#"><FontAwesomeIcon className='text-green-700' icon={faMailBulk} size='2x' spin /></Link>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;