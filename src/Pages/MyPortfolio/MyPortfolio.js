import React from 'react';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import molinard1 from "../../assets/molinard-ss/Screenshot_1.png";
import molinard2 from "../../assets/molinard-ss/Screenshot_2.png";
import molinard3 from "../../assets/molinard-ss/Screenshot_3.png";
import molinard4 from "../../assets/molinard-ss/Screenshot_4.png";
import molinard5 from "../../assets/molinard-ss/Screenshot_5.png";
import molinard6 from "../../assets/molinard-ss/Screenshot_6.png";
import molinard7 from "../../assets/molinard-ss/Screenshot_7.png";
import molinard8 from "../../assets/molinard-ss/Screenshot_8.png";

const MyPortfolio = () => {
    return (
        <div>
            <div className='lg:w-2/4 mx-auto'>
                <div class="mockup-code text-center">
                    <pre><code className='text-xl font-bold'>Name: Mahfujur Rahman</code></pre>
                    <pre className='my-3'><code className='text-xl font-bold'>Email: ahsanmahfuj@gmail.com</code></pre>
                </div>
                <div className='my-6'>
                    <h2 className='text-lg font-bold my-6'>Educational Background :</h2>
                    <div class="overflow-x-auto">
                        <table class="table w-full table-compact">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Inst. Name</th>
                                    <th>Study Field</th>
                                    <th>Passing Year</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>1</th>
                                    <td>Bamna Degree College</td>
                                    <td>Business Studies</td>
                                    <td>2015</td>
                                </tr>
                                <tr class="active">
                                    <th>2</th>
                                    <td>Bukabunia Ideal High Secondary School</td>
                                    <td>Business Studies</td>
                                    <td>2017</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="mockup-code text-center my-8">
                        <pre><code className='text-xl font-bold'>Technologies that I Learned as a Web Developer:</code></pre>
                    </div>
                    <div className='grid grid-cols-2'>
                        <div className='font-bold'>
                            <p>* HTML5</p>
                            <p>* CSS3</p>
                            <p>* Bootstrap 5</p>
                            <p>* TailwindCSS</p>
                        </div>
                        <div className='font-bold'>
                            <p>* Javascript (ES6)</p>
                            <p>* ReactJS</p>
                            <p>* NodeJS</p>
                            <p>* ExpressJS</p>
                        </div>
                    </div>
                    <div class="mockup-code text-center my-8">
                        <pre><code className='text-xl font-bold'>Projects Links, that I Completed:</code></pre>
                    </div>
                    <div>
                        <div>
                            * <p className='mb-3'><Link className='font-bold' to="#">https://molinard-perfumer.web.app/</Link></p>
                            <Carousel autoPlay={true}>
                                <div>
                                    <img src={molinard1} alt='' />
                                </div>
                                <div>
                                    <img src={molinard2} alt='' />
                                </div>
                                <div>
                                    <img src={molinard3} alt='' />
                                </div>
                                <div>
                                    <img src={molinard4} alt='' />
                                </div>
                                <div>
                                    <img src={molinard5} alt='' />
                                </div>
                                <div>
                                    <img src={molinard6} alt='' />
                                </div>
                                <div>
                                    <img src={molinard7} alt='' />
                                </div>
                                <div>
                                    <img src={molinard8} alt='' />
                                </div>
                            </Carousel>
                        </div>
                        * <p><Link className='font-bold' to="#">https://ydkjs-review.netlify.app/</Link></p>
                        * <p><Link className='font-bold' to="#">https://quick-computing.netlify.app/</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;