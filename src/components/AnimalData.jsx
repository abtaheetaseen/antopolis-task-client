"use client"
import React from 'react'

const AnimalData = ({item}) => {
  return (
    <div>
        <div className='w-full h-[191px] border-[1px] rounded-xl py-10 px-5 border-gray-800 mb-5 flex items-center justify-center'>
      <img className='' src={item.image_url} alt="" />
      </div>
      <h1 className='text-center'>{item.animalName}</h1>
    </div>
  )
}

export default AnimalData
