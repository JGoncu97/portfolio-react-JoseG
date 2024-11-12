import React, { useState } from 'react'
import { CollectColors } from './CollectColors'

export const Colors = () => {

        const [bgColors, setBgColors] = useState ("bg-gray-600")


  return (
    
    <div className={`w-full h-[57rem] border-solid border-black border-[0.5rem] ${bgColors}`} >
        <div className='flex border-solid border-red border-[0.5rem]'>
        <label className='mr-[1rem]'> Elije el color de fondo</label>
        <select 
           
            value={bgColors}
            onChange={(e) => setBgColors(e.target.value)}
          >
            {CollectColors.map(color => (
              <option key={color.index} value={color.tailwind}>
                {color.name}
              </option>
            ))}
          </select>
          </div>

    </div>
  )
}
