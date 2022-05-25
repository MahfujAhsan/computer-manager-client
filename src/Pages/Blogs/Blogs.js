import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='lg:w-2/4 mx-auto p-5'>
                <h2 className='mockup-code px-8 font-bold bg-secondary text-white text-xl'>How will you improve the performance of a React Application?</h2>
                <p className='font-bold my-3'>* Ensure re-rendering a component only happens when necessary.</p>
                <p className='font-bold my-3'>* Memoization is an optimization strategy that caches a component-rendered operation, saves the result in memory, and returns the cached result for the same input.</p>
                <p className='font-bold my-3'>* Code-splitting is important optimization technique for a React application.</p>
                <p className='font-bold my-3'>* With the concept of windowing, we can render to the DOM only the visible portion to the user.</p>
                <p className='font-bold my-3'>* To optimize an application that consists of several images, we can avoid rendering all of the images at once to improve the page load time.</p>
            </div>
            <div className='lg:w-2/4 mx-auto p-5'>
                <h2 className='mockup-code px-8 font-bold text-white text-xl'>What are the different ways to manage a state in a React application?</h2>
                <p className='font-bold my-3'>* <span className='text-secondary'>Local State :</span> To locally manage a component’s state in a class-based component, we instantiate a local state object, which contains all the state variables we need to use in the component.</p>
                <p className='font-bold my-3'>* <span className='text-secondary'>Global State :</span> The main purpose of the global state is to share a state among multiple components.</p>
                <p className='font-bold my-3'>* <span className='text-secondary'>Server State :</span> Server state to synchronize all the time to prevent that its information is not out of date.</p>
                <p className='font-bold my-3'>* <span className='text-secondary'>URL State :</span> URL state is often missing as a category of state, but it is an important one.</p>
            </div>
            <div className='lg:w-2/4 mx-auto p-5'>
                <h2 className='mockup-code px-8 bg-secondary font-bold text-white text-xl'>How does prototypical inheritance work?</h2>
                <p className='font-bold my-3'>* JavaScript ES6 allowed for “prototypal inheritance”, meaning that objects and methods can be shared, extended, and copied. Prototypical inheritance refers to the ability to access object properties from another object. JavaScript prototype use to add new properties and methods to an existing object constructor. Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.</p>
            </div>
            <div className='lg:w-2/4 mx-auto p-5'>
                <h2 className='mockup-code px-8 font-bold text-white text-xl'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                <p className='font-bold my-3'>* Use 'filter' & then use 'includes' for find every product's name (a specific property in each item/product) in an array that is also a specific condition. That's mean, it should describe something like, Filter products if 'name' property includes in product object in products Array. Code Snippet Below: </p>
                <pre data-prefix="$"><code className='text-secondary font-bold'>$ products.filter(product =[greater then symbol] product.name.includes(searchInputValue))</code></pre>
            </div>
            <div className='lg:w-2/4 mx-auto p-5'>
                <h2 className='mockup-code px-8 bg-secondary font-bold text-white text-xl'>What is a unit test? Why should write unit tests?</h2>
                <p className='font-bold my-3'>* Unit testing is a testing method that tests an individual software unit in isolation. For React components, this could mean checking that the component renders correctly for the specified props.</p>
            </div>
            <div className='lg:w-2/4 mx-auto p-5'>
                <h2 className='mockup-code px-8 font-bold text-white text-xl'>Why should write unit tests?</h2>
                <p className='font-bold my-3'>* Unit tests improves our application maintainability.</p>
                <p className='font-bold my-3'>* Provides quick feedback on file-save to tell you whether or not your changes worked.</p>
                <p className='font-bold my-3'>* Provides a great safety net which can enhance your confidence when its time to add features or refactor existing features.</p>
                <p className='font-bold my-3'>* Unit tests improves the way you write code.</p>
                <p className='font-bold my-3'>* Unit tests also help for Prevent regressions</p>
            </div>
        </div>
    );
};

export default Blogs;