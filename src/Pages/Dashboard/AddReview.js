import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import auth from '../../firebase.init';

const AddReview = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);
    const onSubmit = async data => {
        const review = {
            name: user?.displayName,
            email: user?.email,
            ratings: data.ratings,
            description: data.description
        };
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Thank You for Your Valuable FeedBack.',
                        showConfirmButton: false,
                        timer: 2000
                    })
                    reset();
                }
                else {
                    toast.error('Failed to add Review')
                }
            })
    };
    return (
        <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000">
            <h2 className='text-3xl font-bold text-center my-6'>Add a Review</h2>
            <div className="card w-full bg-neutral text-neutral-content">
                <div className="card-body items-center text-center">
                    <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold">Name: </span>
                            </label>
                            <input type="text"
                                value={user?.displayName}
                                className="input input-bordered w-full max-w-xs"
                                {...register("name")} disabled />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold">Email: </span>
                            </label>
                            <input type="email"
                                value={user?.email}
                                className="input input-bordered w-full max-w-xs"
                                {...register("email")} disabled />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold">Give Us a Rating</span>
                            </label>
                            <select
                                className="select select-bordered"
                                {...register("ratings")}>
                                <option selected>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold">Add Your Review</span>
                            </label>
                            <input type="text"
                                placeholder="Your Review"
                                className="input input-bordered w-full max-w-xs"
                                {...register("description", {
                                    required: {
                                        value: true,
                                        message: 'Description is Required'
                                    }
                                })} />
                            <label className="label">
                                {errors.description?.type === 'required' && <span className="label-text-alt text-secondary font-bold">{errors.description.message}</span>}
                            </label>
                        </div>
                        <input className='btn btn-secondary font-bold text-white mt-4' type="submit" value="Add Review" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;