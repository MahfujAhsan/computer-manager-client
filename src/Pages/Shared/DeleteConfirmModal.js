import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deleting, refetch, setDeleting }) => {
    const { _id, name } = deleting;

    const handleDelete = () => {
        fetch(`http://localhost:5000/products/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success('Deleted SuccessfullY.');
                    setDeleting(null);
                    refetch();
                };
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-center text-red-600">Are You Sure you want to Delete?<br /> <small>{name}</small> </h3>
                    <p class="py-4 text-center">Once You Deleted, It's cann't be undo.</p>
                    <div class="modal-action">
                        <td><button onClick={() => handleDelete()} class="btn btn-xs bg-white">Delete</button></td>
                        <label for="delete-confirm-modal" class="btn btn-xs bg-white">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteConfirmModal;