import React, { useEffect, useState } from 'react';
import AllOrders from './AllOrders';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://computer-manager-server.vercel.app/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);
    return (
        <div>
            <h2 className='text-2xl text-center font-bold mb-6'>Manage All Orders: {orders.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Product Id</th>
                            <th>Transaction Id</th>
                            <th>Quantity</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <AllOrders key={order._id} order={order} />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;