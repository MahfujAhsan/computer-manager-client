import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
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
                    <li><Link to="/dashboard">My Orders</Link></li>
                    <li><Link to="/dashboard/addReview">Add a Review</Link></li>
                    <li><Link to="/dashboard/myProfile">My Profile</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;