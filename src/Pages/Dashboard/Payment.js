import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Spinner from '../Shared/Spinner';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51JyymfFGeWE7vRj4cyD09cDONTTIcCvCDjS8zxgs7DUgTB9YDhcfRi55xhv6OUGOzdTfHEG5IVWsS1udTCfigtjL00nz1QMJTQ');
const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/orders/${id}`;
    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Spinner />
    }
    return (
        <div>
            <div className="card w-50 mx-auto max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className='mb-3'>HeY, <br />
                        <span className='font-bold uppercase'>{order.name}</span>
                    </p>
                    <h2 className="text-center">PAY FOR : <span className='text-secondary font-bold'>{order.productName}</span></h2>
                    <p className='text-2xl text-center my-4'>PLEASE PAY : <span className='text-warning font-bold'>${order.price} (Per Unit)</span></p>
                    <p className='text-center'>TOTAL AMOUNT : <span className='text-secondary font-bold'>${order.price * order.order} <small>(Per Unit * Order Quantity)</small></span></p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 mx-auto max-w-md shadow-2xl bg-base-100 mb-5">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;