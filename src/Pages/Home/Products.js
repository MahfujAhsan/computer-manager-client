import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../Shared/Spinner';
import Product from './Product';

const Products = () => {
    const { data: products, isLoading, refetch } = useQuery('products', () => fetch('http://localhost:5000/products').then(res => res.json()));
    if (isLoading) {
        return <Spinner />
    };
    return (
        <div className='px-12 my-12'>
            <h2 className='text-3xl text-secondary text-center uppercase font-bold my-12'>Our Products</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    products.slice(-6).map(product => <Product key={product._id} product={product} refetch={refetch} />)
                }
            </div>
        </div>
    );
};

export default Products;