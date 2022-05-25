import React from 'react';
import member from "../../assets/member.mp4"

const UsbMember = () => {
    return (
        <div className='px-12 my-12'>
            <h2 className='text-3xl text-error font-bold uppercase text-center my-12'>Our Verification</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                <div>
                    <video className='rounded-lg' controls muted autoPlay src={member}></video>
                </div>
                <div className='flex flex-col items-center justify-center shadow-lg rounded-lg px-5'>
                    <h2 className='text-2xl font-bold'>Member of USB-IF</h2>
                    <p className='text-xl my-6 text-center'>An ISO certified company | 300 well-trained employees | 10000sqm factory Avg Response time: <span className='text-success font-bold'>24/7</span></p>
                    <p>Dongguan City Worldpass Industrial Co., Ltd was established in 2015, which is a subsidiary of Dongguan City AllPass Electronic Co. Ltd founded in 2006. Our company has more than 300 employees and covers an area of 10,000 square meters. We are a new and high-tech enterprise integrating R&D, production, and sales of consumer electronic products. Our company has got several technical patents for its products. It develops the most front-end and best-selling products with a keen sense of smell from the market.</p>
                    <button className='btn font-bold my-6'>Inquire Now</button>
                </div>
            </div>
        </div>
    );
};

export default UsbMember;