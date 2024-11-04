import React from 'react'
import './Experience.css'

export const Experience = ({Date,PositionJob,Company,Description}) => {

  const experienceJob = "flex font-segoe";

  const containerJob1 = "w-[10rem] h-auto p-[0.6rem]";
  
  const containerJob2 = "w-[43rem] border-l-2 border-gray-500";
  
  const positionJob = "text-[2rem] pl-12 font-bold mb-1 mt-0";
  
  const titleCompany = "pl-12 text-gray-500 mb-0.5 mt-0.5";
  
  const description = "pl-12 text-gray-500 mt-0.5";
  

  return (
    <div className={experienceJob}>
        <div className={containerJob1}>
            <p >{Date}</p>
        </div>
        <div className={containerJob2}>
            <h4 className={positionJob}>{PositionJob}</h4>
            <p className={titleCompany}>{Company}</p>
            <p className={description}>{Description}</p>
        </div>
    </div>
  )
}
