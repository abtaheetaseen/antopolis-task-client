"use client"
import { imageUpload } from '@/imageAPI';
import axios from 'axios';
import React, { useState } from 'react'
import Swal from 'sweetalert2';

const AddAnimalForm = () => {

    const [loading, setLoading] = useState(false);

    const handleAddAnimal = async (e) => {
        e.preventDefault();
        const form = e.target;
        const animalName = form.animalName.value;
        const category = form.category.value;
        const image = form.image.files[0];

        try {
            setLoading(true);

            // upload image and get image url
            const image_url = await imageUpload(image);

            const animalDetails = {
                animalName,
                category,
                image_url
            }

            const res = await axios.post("http://localhost:5000/animals", animalDetails)
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

                <form onSubmit={handleAddAnimal}>

                    <div className="relative flex items-center mt-5">

                        <input type="text" name='animalName' className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-3 focus:border-red-400 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Animal Name" required />

                    </div>

                    <div className="relative flex items-center mt-5">

                        <input type="text" name='category' className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-3 focus:border-red-400 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Category" required />

                    </div>

                    <div className="mt-5 relative">
                        <input
                            required
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                            className='absolute left-[22rem] bottom-3'
                        />
                        <button
                            type="button"
                            className="block w-full px-3 py-3 text-gray-400 border border-gray-300 rounded-lg cursor-pointer focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        >
                            <span className="flex items-center justify-between">
                                <span>Image</span>

                            </span>
                        </button>
                    </div>

                    <div className='mt-5'>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white bg-black rounded-lg hover:bg-gray-800"
                        >
                            {
                                loading ? "Processing..." : "Create Animal"
                            }
                        </button>
                    </div>

                </form>

            </div>
        </section>
    )
}

export default AddAnimalForm
