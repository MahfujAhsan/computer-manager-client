// import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import React from 'react';

// const AllOrders = ({index, order, refetch,setOrderDelete}) => {
//     const {_id, name, email, productName, available, price, shippingAdd, phone, paid, transactionId} = order;
//     refetch();
//     return (
//         <tr>
//             <th>{index + 1}</th>
//             <td>{_id}</td>
//             <td>{email}</td>
//             <td>{!paid && <p className="text-success border-2 border-success rounded-lg text-center font-bold">UnPaid</p>}</td>
//             <td>{paid && <button className="btn btn-xs btn-outline">Pending</button>}</td>
//             <td>
//                 {!paid && <label onClick={() => setOrderDelete(order)} htmlFor="order-delete-modal" className="btn btn-xs bg-white"><FontAwesomeIcon className='text-xl' icon={faTrashCan} /></label>}
//             </td>
//         </tr>
//     );
// };

// export default AllOrders;