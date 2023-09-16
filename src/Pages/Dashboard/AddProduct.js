import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

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
                if (result.success) {
                    const image = result.data.url;
                    const product = {
                        name: data.name,
                        image: image,
                        shortDetails: data.shortDetails,
                        minOrder: data.minOrder,
                        available: data.available,
                        price: data.price
                    }
                    fetch('https://computer-manager-server.vercel.app/products', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: 'Product Added SuccessfullY.',
                                    showConfirmButton: false,
                                    timer: 2000
                                })
                                reset();
                            }
                            else {
                                toast.error('Failed to add Product')
                            }
                        })
                }
            })
    };
    return (
        <div data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000">
            <h2 className='text-3xl font-bold text-center my-6'>Add a Product</h2>
            <div className="card w-full bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                    <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold">Product Name</span>
                            </label>
                            <input type="text"
                                placeholder="Product Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Product name is Required'
                                    }
                                })} />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-secondary font-bold">{errors.name.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold">Product Image</span>
                            </label>
                            <input type="file"
                                className="input input-bordered w-full max-w-xs"
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: 'Product Image is Required'
                                    }
                                })} />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-secondary font-bold">{errors.image.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold">Short Details</span>
                            </label>
                            <input type="text"
                                placeholder='Short Details'
                                className="input input-bordered w-full max-w-xs"
                                {...register("shortDetails", {
                                    required: {
                                        value: true,
                                        message: 'Short Details is Required'
                                    }
                                })} />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-secondary font-bold">{errors.shortDetails.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold">Min. Order Quantity</span>
                            </label>
                            <input type="number"
                                placeholder='Min. Quantity'
                                className="input input-bordered w-full max-w-xs"
                                {...register("minOrder", {
                                    required: {
                                        value: true,
                                        message: 'Min. Quantity is Required'
                                    }
                                })} />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-secondary font-bold">{errors.minOrder.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold">Available Quantity</span>
                            </label>
                            <input type="number"
                                placeholder='Available Quantity'
                                className="input input-bordered w-full max-w-xs"
                                {...register("available", {
                                    required: {
                                        value: true,
                                        message: 'Available Quantity is Required'
                                    }
                                })} />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-secondary font-bold">{errors.available.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold">Price (Per Unit)</span>
                            </label>
                            <input type="number"
                                placeholder='Price (Per Unit)'
                                className="input input-bordered w-full max-w-xs"
                                {...register("price", {
                                    required: {
                                        value: true,
                                        message: 'Price is Required'
                                    }
                                })} />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-secondary font-bold">{errors.price.message}</span>}
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