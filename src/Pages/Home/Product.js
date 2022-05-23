import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, image, shortDetails, minOrder, available, price } = product;
    return (
        <div className='border border-2 border-secondary rounded-lg shadow-lg py-8'>
            <div className='text-center'>
                <h2 className='font-bold my-3'>{name}</h2>
                <img className='w-3/4 mx-auto rounded-lg' src={image} alt="" />
                <p className='my-6'>{shortDetails}</p>
                <h3 className='my-6 font-bold'>Price: ${price} (per unit price)</h3>
                <div className='flex items-center px-5'>
                    <h3 className='flex-1 font-bold'>Min. Order Qun.:</h3>
                    <input type="number" value={minOrder} class="input input-bordered input-primary w-full max-w-xs flex-1" disabled/>
                </div>
                <div className='flex items-center my-6 px-5'>
                    <h3 className='flex-1 font-bold'>Available In Stock: </h3>
                    <input type="number" value={available} class="input input-bordered input-primary w-full max-w-xs flex-1" disabled/>
                </div>
                <Link to={`products/${_id}`} class="btn btn-outline btn-secondary font-bold">Purchase Now</Link>
            </div>
        </div>
    );
};

export default Product;