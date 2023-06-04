import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import OrderDeleteModal from './OrderDeleteModal';
import OrdersRow from './OrdersRow';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const [orderDelete, setOrderDelete] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/orders?email=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken')
                        navigate('/')
                    }
                    return res.json()
                })
                .then(data => {
                    setOrders(data)
                })
        }
    }, [user, navigate]);
    return (
        <div>
            <h2 className='text-2xl text-center my-6 font-bold'>Total Orders: <span className='text-secondary'>{orders.length}</span></h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Transaction Id</th>
                            <th>Quantity</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <OrdersRow
                                order={order} key={order._id} setOrderDelete={setOrderDelete} index={index}
                            ></OrdersRow>)
                        }
                    </tbody>
                </table>
            </div>
            {orderDelete && <OrderDeleteModal
                orderDelete={orderDelete}
                setOrderDelete={setOrderDelete}
            ></OrderDeleteModal>}
        </div>
    );
};

export default MyOrders;