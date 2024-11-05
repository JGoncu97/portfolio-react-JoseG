import React from 'react'
import './TitleStyle.css'

export const Title = () => {

  const title = "text-[5rem] font-segoe text-[#222121] m-1";

  const profession = "font-segoe text-[1.4rem] text-gray-500 font-bold w-[20rem] ml-1"; 


  return (
    <div>
        <p className={profession}>Software Developer</p>
        <h1 className={title}>Jose Gregorio <br /> Gonzalez Cuellar</h1>
    </div>
  )
}
