"use client"
import React from 'react'
import AddAnimalForm from './AddAnimalForm'

const AddAnimalButton = () => {
  return (
    <div>
                    <button className='border-2 border-white py-3 px-5 rounded-full text-white' onClick={() => document.getElementById('my_modal_2').showModal()}>Add Animal</button>
                    <dialog id="my_modal_2" className="modal">
                        <div className="modal-box">
                            <h3 className="text-lg text-black">Add Animal</h3>
                            
                            {/* form for adding animal */}
                        <AddAnimalForm />

                        </div>

                        <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </form>

                    </dialog>
                    </div>
  )
}

export default AddAnimalButton
