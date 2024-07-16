"use client"
import axios from 'axios';
import React, { useState } from 'react'
import Swal from 'sweetalert2';

const AddCategoryForm = () => {

    const [loading, setLoading] = useState(false);

    const handleAddCategory = async(e) => {
        e.preventDefault();
        const form = e.target;
        const category = form.name.value;

        try {

            setLoading(true);

            const categoryName = {
                category,
            }

            const res = await axios.post("https://animal-checker.vercel.app/category", categoryName)
            if (res.data.insertedId) {
                console.log(res.data);
                form.reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
            }

            setLoading(false);
            window.location.reload();

        } catch (error) {
            setLoading(false)
            console.log(error)
        }
        
    }

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="">

                <form onSubmit={handleAddCategory}>

                    <div className="relative flex items-center mt-5">

                        <input type="text" name='name' className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-3 focus:border-red-400 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Name" required />
                    </div>

                    <div className='mt-5'>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white bg-black rounded-lg hover:bg-gray-800"
                        >
                            {
                                loading ? "Processing..." : "Save"
                            }
                        </button>
                    </div>

                </form>

            </div>
        </section>
    )
}

export default AddCategoryForm
