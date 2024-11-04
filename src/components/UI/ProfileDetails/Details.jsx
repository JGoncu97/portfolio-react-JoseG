import React from 'react'
import './Details.css'
export const Details = ({title,title2,info}) => {

  const profileInfo = "w-[45rem] h-[35rem] p-12"; 

  const detailsProfile = "font-sans text-[1.5rem] w-[45rem] h-[25rem] text-justify"; 

  const titleProfile = "text-[3rem] font-bold mb-0 mt-24";

  const color1 = "text-black";
  const color2 = "text-[#fdca3f]";

  return (
        <div className={profileInfo}>
            <h3 className={titleProfile}><span className={color1}>{title}</span><span className={color2}>{title2}</span></h3>
            <p className={detailsProfile}>{info}</p>
        </div>
  )
}
