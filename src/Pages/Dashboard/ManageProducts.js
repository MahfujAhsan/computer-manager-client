import React, { useState } from 'react';
import { useQuery } from 'react-query';
import DeleteConfirmModal from '../Shared/DeleteConfirmModal';
import Spinner from '../Shared/Spinner';
import ProductsRow from './ProductsRow';

const ManageProducts = () => {
    const [deleting, setDeleting] = useState(null);
    const { data: products, isLoading, refetch } = useQuery('products', () => fetch('http://localhost:5000/products', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Spinner />
    };
    return (
        <div>
            <h2 className='text-2xl text-center font-bold my-4'>Total Products: {products.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) =>
                                <ProductsRow
                                    key={product._id}
                                    product={product}
                                    index={index}
                                    refetch={refetch}
                                    setDeleting={setDeleting}>
                                </ProductsRow>)
                        }
                    </tbody>
                </table>
            </div>
            {deleting && <DeleteConfirmModal
                deleting={deleting}
                refetch={refetch}
                setDeleting={setDeleting}
            ></DeleteConfirmModal>}
        </div>
    );
};

export default ManageProducts;