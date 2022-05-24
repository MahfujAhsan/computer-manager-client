import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import auth from '../../firebase.init';

const Purchase = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        axios.get(`http://localhost:5000/products/${id}`)
            .then(function (response) {
                setProduct(response.data);
            })
    }, [id]);
    const handleQuantity = e => {
        const { minOrder, ...rest } = product;
        const newMinOrder = e.target.value;
        const newProduct = { minOrder: newMinOrder, ...rest }
        setProduct(newProduct);
    };

    const handleOrder = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const productName = e.target.productName.value;
        const available = e.target.available.value;
        const price = e.target.price.value;
        const order = e.target.order.value;
        const shippingAdd = e.target.shippingAdd.value;
        const phone = e.target.phone.value;
        const orderInfo = {
            name: name,
            email: email,
            productName: productName,
            available: available,
            price: price,
            order: order,
            shippingAdd: shippingAdd,
            phone: phone
        };
        axios.post('http://localhost:5000/orders', orderInfo)
            .then(function (response) {
                console.log(response)
                if (response.data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Order Placed SuccessfullY.',
                        showConfirmButton: false,
                        timer: 2000
                    })
                    e.target.reset()
                }
            })
    }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 px-12 my-16'>
            <div className='border-2 border-secondary rounded-lg p-5 text-center'>
                <h2 className='text-xl my-3 font-bold'>{product.name}</h2>
                <img className='w-75 mx-auto' src={product.image} alt="" />
                <p className='my-3'>{product.shortDetails}</p>
                <p className='text-xl'><span className='font-bold'>Price: ${product.price}</span> <span className='text-secondary'>(Per Unit)</span></p>
            </div>
            <div className='border-2 border-secondary rounded-lg p-5'>
                <h2 className='text-3xl text-secondary font-bold text-center mb-4'>Place your Order</h2>
                <form onSubmit={handleOrder} className='grid grid-cols-1 justify-center gap-3' >
                    <label className="label">
                        <span className="label-text-alt font-bold">Your Name:</span>
                    </label>
                    <input name='name' type="text" value={user?.displayName} className="input input-bordered w-full max-w-xs lg:max-w-xl" disabled />
                    <label className="label">
                        <span className="label-text-alt font-bold">Your Email:</span>
                    </label>
                    <input name='email' type="email" value={user?.email} className="input input-bordered w-full max-w-xs lg:max-w-xl" disabled />
                    <label className="label">
                        <span className="label-text-alt font-bold">Product Name:</span>
                    </label>
                    <input name='productName' type="text" value={product.name} className="input input-bordered w-full max-w-xs lg:max-w-xl" disabled />
                    <label className="label">
                        <span className="label-text-alt font-bold">Available Products: </span>
                    </label>
                    <input name='available' type="number" value={product.available} className="input input-bordered w-full max-w-xs lg:max-w-xl" disabled />
                    <label className="label">
                        <span className="label-text-alt font-bold">Price $ (Per Unit) : </span>
                    </label>
                    <input name='price' type="number" value={product.price} className="input input-bordered w-full max-w-xs lg:max-w-xl" disabled />
                    <label className="label">
                        <span className="label-text-alt font-bold">Order Quantity: (min. 100pcs)</span>
                    </label>
                    <input name='order' type="number" onChange={handleQuantity} value={product.minOrder} className="input input-bordered w-full max-w-xs lg:max-w-xl" />
                    <label className="label">
                        {
                            product.minOrder < 100 ? <span className="label-text-alt font-bold text-error">"Please Enter Minimum Quantity."</span> : ''
                        }
                        {
                            product.available < product.minOrder ? <span className="label-text-alt font-bold text-error">"Enter a Valid Quantity (within 'Available Products')."</span> : ''
                        }
                    </label>
                    <label className="label">
                        <span className="label-text-alt font-bold">Shipping Address:</span>
                    </label>
                    <input name='shippingAdd' type="text" placeholder='Shipping Address' className="input input-bordered w-full max-w-xs lg:max-w-xl" />
                    <label className="label">
                        <span className="label-text-alt font-bold">Phone Number:</span>
                    </label>
                    <input name='phone' type="tel" placeholder='Your Phone' className="input input-bordered w-full max-w-xs lg:max-w-xl" />

                    <input disabled={product.minOrder < 100 || product.available < product.minOrder} className='btn btn-secondary w-full max-w-xs lg:max-w-xl font-bold' type="submit" value="Place Order" />
                </form>
            </div>
        </div>
    );
};

export default Purchase;