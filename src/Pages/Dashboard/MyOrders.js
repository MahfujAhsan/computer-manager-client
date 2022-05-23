import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth);


    const [orders, setOrders] = useState([]);
    useEffect(() => {
        if (user) {
            axios.get(`http://localhost:5000/orders?email=${user.email}`)
                .then(function (response) {
                    setOrders(response.data)
                })
        }
    }, [user])
    return (
        <div>
            <h2 className='text-2xl text-center my-6 font-bold'>Total Orders: <span className='text-secondary'>{orders.length}</span></h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Your Name</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Paid/Unpaid</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{order.name}</td>
                                <td>{order.productName}</td>
                                <td>{order.order}</td>
                                <td><button class="btn btn-xs">Cancel</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;