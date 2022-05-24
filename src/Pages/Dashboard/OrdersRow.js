import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const OrdersRow = ({order, index, setOrderDelete}) => {
    return (
        <tr key={index}>
            <td>{order.productName}</td>
            <td className='font-bold'>{order.transactionId}</td>
            <td>{order.order}</td>
            <td>
                {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}>
                    <button className="btn btn-xs">Payment</button>
                </Link>}
                {(order.price && order.paid) &&
                    <p className="text-success border-2 border-success rounded-lg text-center font-bold">Paid</p>
                }
            </td>
            <td>
                {!order.paid && <label onClick={() => setOrderDelete(order)} htmlFor="order-delete-modal" className="btn btn-xs bg-white"><FontAwesomeIcon className='text-xl' icon={faTrashCan} /></label>}
            </td>
        </tr>
    );
};

export default OrdersRow;