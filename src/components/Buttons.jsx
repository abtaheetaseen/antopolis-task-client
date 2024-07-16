import React, { useState } from 'react'

const Buttons = ({buttonCategory, filteredItems}) => {

    const [activeButton, setActiveButton] = useState(null);

    const handleClick = (val, index) => {
        setActiveButton(index);
        filteredItems(val);
    }

  return (
    <>
      {
        buttonCategory.map((val, index) => (
            <button key={index} onClick={() => handleClick(val, index)} className={`border-2 py-3 px-5 rounded-full ${activeButton === index ? 'border-green-500 text-green-400' : 'border-red-600 text-red-600'}`}>
                {val}
            </button>
        ))
      }
    </>
  )
}

export default Buttons
