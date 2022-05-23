import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import React from 'react';


const ProductsRow = ({ product, index, setDeleting }) => {
    const { image, name } = product;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="avatar">
                    <div className="w-20 mask mask-squircle">
                        <img src={image} alt='' />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>
                <label onClick={() => setDeleting(product)} htmlFor="delete-confirm-modal" className="btn btn-xs bg-white"><FontAwesomeIcon className='text-xl' icon={faTrashCan} /></label>
            </td>

        </tr>
    );
};

export default ProductsRow;