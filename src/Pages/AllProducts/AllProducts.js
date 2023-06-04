import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../Shared/Spinner';
import AllProduct from './AllProduct';

const AllProducts = () => {
    const { data: products, isLoading, refetch } = useQuery('products', () => fetch('http://localhost:5000/products').then(res => res.json()));
    if (isLoading) {
        return <Spinner />
    }
    return (
        <div className='px-12 my-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    products.map(product => <AllProduct key={product._id} product={product} refetch={refetch} />)
                }
            </div>
        </div>
    );
};

export default AllProducts;