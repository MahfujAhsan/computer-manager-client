import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content px-12">
                <h2 className='text-3xl text-center my-6 font-bold text-secondary'>Welcome to Dashboard</h2>
                <Outlet/>
                

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-200 rounded-lg text-base-content">
                    {!admin && <li><Link to="/dashboard">My Orders</Link></li>}
                    {!admin && <li><Link to="/dashboard/addReview">Add a Review</Link></li>}
                    <li><Link to="/dashboard/myProfile">My Profile</Link></li>
                    {admin && <li><Link to="/dashboard/makeAdmin">Make Admin</Link></li>}
                    {admin && <li><Link to="/dashboard/manageAllOrders">Manage All Orders</Link></li>}
                    {admin && <li><Link to="/dashboard/addProduct">Add a Product</Link></li>}
                    {admin && <li><Link to="/dashboard/manageProducts">Manage Products</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;