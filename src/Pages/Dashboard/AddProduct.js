import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const imgBbAPI = '3093aece7c5e8e0566d90e4110b61624';

    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgBbAPI}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(result => {
            if(result.success) {
                const image = result.data.url;
                const product = {
                    name: data.name,
                    image: image,
                    shortDetails: data.shortDetails,
                    minOrder: data.minOrder,
                    available: data.available,
                    price: data.price
                }
                axios.post('http://localhost:5000/products', product)
                .then(function (response) {
                    if(response.data.insertedId) {
                        toast.success('Product Added SuccessfullY.')
                        reset();
                    }
                })
            }
        })
    };
    return (
        <div>
            <h2 className='text-3xl font-bold text-center my-6'>Add a Product</h2>
            <div class="card w-full bg-neutral text-neutral-content">
                <div class="card-body items-center text-center">
                    <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1'>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text font-bold">Product Name</span>
                            </label>
                            <input type="text"
                                placeholder="Product Name"
                                class="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Product name is Required'
                                    }
                                })} />
                            <label class="label">
                                {errors.name?.type === 'required' && <span class="label-text-alt text-secondary font-bold">{errors.name.message}</span>}
                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text font-bold">Product Image</span>
                            </label>
                            <input type="file"
                                class="input input-bordered w-full max-w-xs"
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: 'Product Image is Required'
                                    }
                                })} />
                            <label class="label">
                                {errors.name?.type === 'required' && <span class="label-text-alt text-secondary font-bold">{errors.image.message}</span>}
                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text font-bold">Short Details</span>
                            </label>
                            <input type="text"
                                placeholder='Short Details'
                                class="input input-bordered w-full max-w-xs"
                                {...register("shortDetails", {
                                    required: {
                                        value: true,
                                        message: 'Short Details is Required'
                                    }
                                })} />
                            <label class="label">
                                {errors.name?.type === 'required' && <span class="label-text-alt text-secondary font-bold">{errors.shortDetails.message}</span>}
                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text font-bold">Min. Order Quantity</span>
                            </label>
                            <input type="number"
                                placeholder='Min. Quantity'
                                class="input input-bordered w-full max-w-xs"
                                {...register("minOrder", {
                                    required: {
                                        value: true,
                                        message: 'Min. Quantity is Required'
                                    }
                                })} />
                            <label class="label">
                                {errors.name?.type === 'required' && <span class="label-text-alt text-secondary font-bold">{errors.minOrder.message}</span>}
                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text font-bold">Available Quantity</span>
                            </label>
                            <input type="number"
                                placeholder='Available Quantity'
                                class="input input-bordered w-full max-w-xs"
                                {...register("available", {
                                    required: {
                                        value: true,
                                        message: 'Available Quantity is Required'
                                    }
                                })} />
                            <label class="label">
                                {errors.name?.type === 'required' && <span class="label-text-alt text-secondary font-bold">{errors.available.message}</span>}
                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text font-bold">Price (Per Unit)</span>
                            </label>
                            <input type="number"
                                placeholder='Price (Per Unit)'
                                class="input input-bordered w-full max-w-xs"
                                {...register("price", {
                                    required: {
                                        value: true,
                                        message: 'Price is Required'
                                    }
                                })} />
                            <label class="label">
                                {errors.name?.type === 'required' && <span class="label-text-alt text-secondary font-bold">{errors.price.message}</span>}
                            </label>
                        </div>
                        <input className='btn btn-secondary font-bold text-white mt-4' type="submit" value="Add Product" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;