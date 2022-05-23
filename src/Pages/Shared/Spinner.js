import React from 'react';
import loadingSpinner from "../../assets/spinner.gif";

const Spinner = () => {
    return (
        <div className='w-50 mx-auto'>
            <img style={{maxHeight: "500px"}} className='w-100 mx-auto' src={loadingSpinner} alt="" />
        </div>
    );
};

export default Spinner;