import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product, refetch }) => {
    const { _id, name, image, shortDetails, minOrder, available, price } = product;
    refetch();
    return (
        <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="500" className='border-2 border-secondary rounded-lg shadow-lg py-2 relative'>
            <div className='text-center flex flex-col justify-between px-4'>
                <h2 className='font-bold my-3 uppercase text-sm'>{name}</h2>
                <img className='w-2/4 h-[50%] mx-auto rounded-lg' src={image} alt="" />
                <div className='flex justify-between items-center my-2 gap-x-6'>
                    <p className='my-2 flex-1 bg-neutral bg-opacity-50 rounded-lg p-1'>{shortDetails}</p>
                    <h3 className='my-2 font-bold flex-1 bg-primary bg-opacity-50 rounded-lg p-1'>Price:
                    <br />
                        <span>${price} (Per Unit)</span>
                    </h3>
                </div>
                <div className='flex items-center px-5'>
                    <h3 className='flex-1 font-bold'>Min. Order Qun.:</h3>
                    <input type="number" value={minOrder} className="input input-bordered input-primary w-full max-w-xs flex-1 text-[17px] font-semibold" disabled />
                </div>
                <div className='flex items-center my-2 px-5 pb-12'>
                    <h3 className='flex-1 font-bold'>Available In Stock: </h3>
                    <input type="number" value={available} className="input input-bordered input-primary w-full max-w-xs flex-1 text-[17px] font-semibold" disabled />
                </div>
                <Link to={`products/${_id}`}>
                    <div className='absolute bottom-0 left-0 w-full border-t-[3px] border-neutral py-[0.8rem] hover:bg-secondary hover:text-white'>
                        <button className="font-bold w-full text-[17px]">Purchase Now</button>
                    </div>
                </Link>

            </div>
        </div>
    );
};

export default Product;