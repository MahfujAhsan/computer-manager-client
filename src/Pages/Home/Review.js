import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../Shared/Spinner';
import AllReview from './AllReview';

const Review = () => {
    const { data: reviews, isLoading, refetch } = useQuery('review', () => fetch('http://localhost:5000/reviews', {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Spinner />
    }
    return (
        <div>
            <div className='text-center my-12'>
                <h2 className='text-3xl text-secondary font-bold uppercase'>Customer Review</h2>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12'>

                    {
                        reviews.slice(-3).map(review => <AllReview key={review._id} review={review} refetch={refetch}/>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Review;