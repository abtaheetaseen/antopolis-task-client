"use client"
import React from 'react'
import AddCategoryForm from './AddCategoryForm'

const AddCategoryButton = () => {
    return (
        <div>

            <button className='border-2 border-white py-3 px-5 rounded-full text-white' onClick={() => document.getElementById('my_modal_3').showModal()}>Add Category</button>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute text-black right-2 top-2">✕</button>
                    </form>
                    <h3 className="text-lg text-black">Add Category</h3>
                    
                    {/* form for adding animal */}
                    <AddCategoryForm />  

                </div>
            </dialog>
        </div>
    )
}

export default AddCategoryButton
