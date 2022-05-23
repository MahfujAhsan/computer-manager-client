import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../Shared/Spinner';
import Product from './Product';
const axios = require('axios').default;

const Products = () => {
    const {data:products, isLoading} = useQuery('products', () => axios.get('http://localhost:5000/products'));
    if(isLoading) {
        return <Spinner/>
    };
    return (
        <div className='px-12 my-12'>
            <h2 className='text-3xl text-secondary text-center uppercase font-bold my-12'>Our Products</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                 products.data.map(product => <Product key={product._id} product={product}/>)
                }
            </div>
        </div>
    );
};

export default Products;