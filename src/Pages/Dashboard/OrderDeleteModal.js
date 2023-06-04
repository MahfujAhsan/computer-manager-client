import React from 'react';
import Swal from 'sweetalert2';

const OrderDeleteModal = ({ orderDelete, setOrderDelete }) => {
    const { _id, productName } = orderDelete;

    const handleDelete = () => {
        fetch(`http://localhost:5000/orders/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Deleted SuccessfullY.',
                        showConfirmButton: false,
                        timer: 2000
                    })
                    setOrderDelete(null);
                };
            })
    }
    return (
        <div>
            <input type="checkbox" id="order-delete-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-center text-red-600">Are You Sure you want to Delete?<br /> <small>{productName}</small> </h3>
                    <p className="py-4 text-center">Once You Deleted, It's cann't be undo.</p>
                    <div className="modal-action">
                        <td><button onClick={() => handleDelete()} className="btn btn-xs bg-white">Delete</button></td>
                        <label htmlFor="order-delete-modal" className="btn btn-xs bg-white">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default OrderDeleteModal;