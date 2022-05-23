import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Spinner from '../Shared/Spinner';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../Hooks/useToken';

const Login = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(user || googleUser)

    let errorText;

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect( () => {
        if (token) {
            navigate(from, { replace: true });
        };
    }, [token, navigate, from])

    if (loading || googleLoading) {
        return <Spinner />
    };

    if (error || googleError) {
        errorText = <p className='text-error my-3'>{error?.message || googleError?.message}</p>
    }

    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password)
    };
    return (
        <div className='flex h-screen justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-3xl font-bold text-secondary">Log In</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Your Email</span>
                            </label>
                            <input type="email"
                                placeholder="Email Address"
                                class="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Enter a valid Email'
                                    }
                                })} />
                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-error">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span class="label-text-alt text-error">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Your Password</span>
                            </label>
                            <input type="password"
                                placeholder="Your Secret KeY"
                                class="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Secret KeY Should be 6 char. or longer'
                                    }
                                })} />
                            <label class="label">
                                {errors.password?.type === 'required' && <span class="label-text-alt text-error">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span class="label-text-alt text-error">{errors.password.message}</span>}
                            </label>
                        </div>
                        {errorText}
                        <input className='btn btn-secondary w-full max-w-xs font-bold' type="submit" value="Login" />
                    </form>
                    <p className='my-4'><small>New to Computer Manager? <Link className='text-secondary font-bold' to="/signup">Create an Account</Link></small></p>
                    <div class="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        class="btn btn-outline font-bold">Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;