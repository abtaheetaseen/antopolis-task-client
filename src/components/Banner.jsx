'use client'
import React, { useEffect, useState } from 'react'
import AddAnimalButton from './AddAnimalButton'
import AddCategoryButton from './AddCategoryButton'
import axios from 'axios'
import AnimalData from './AnimalData'
import Buttons from './Buttons'
import Loader from './Loader'

const Banner = () => {

    const [loading, setLoading] = useState(true);
    const [allAnimals, setAllAnimals] = useState([]);
    const [filteredAnimals, setFilteredAnimals] = useState([]);
    const [allButtonCategory, setAllButtonCategory] = useState([]);

    // extract just category value and make it only category named array
    const buttonCategory = allButtonCategory?.map(item => item.category)

    // get all animals data
    const url = 'http://localhost:5000/animals';

    useEffect(() => {
        axios.get(url)
      .then(response => {
        setAllAnimals(response.data);
        setFilteredAnimals(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      })
    }, [url])

    // const buttonCategory = [...new Set(allAnimals?.map(item => item.category))]
    // console.log(buttonCategory)

    // get all category button
    useEffect(() => {
        axios.get("http://localhost:5000/category")
      .then(response => {
        setAllButtonCategory(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      })
    }, [])

    const filteredItems = (cat) => {
        const newItems = allAnimals?.filter((item) => item.category === cat);
        setFilteredAnimals(newItems);
    }

    if(loading){
        return <Loader />
    }

    return (
        <>
            {/* filter section and adding section */}
            <section className='lg:flex lg:items-center lg:justify-between w-full gap-5 mb-[100px]'>

                {/* filter buttons */}
                <div className='mb-10 lg:mb-0 flex flex-wrap items-center justify-between lg:justify-start gap-5'>

                    <Buttons buttonCategory={buttonCategory} filteredItems={filteredItems} />

                </div>

                {/* adding section */}
                <div className='flex items-center justify-between gap-5'>

                    {/* add animal */}
                    <AddAnimalButton />

                    {/* add category */}
                    <AddCategoryButton />

                </div>

            </section>

            {/* show all animals */}
            <section>
                
                <div className='grid grid-cols-1 gap-10 lg:grid-cols-6 md:grid-cols-3'>
                    {
                        filteredAnimals?.map(item => <AnimalData item={item} key={item._id} />)
                    }
                </div>

            </section>
        </>
    )
}

export default Banner
