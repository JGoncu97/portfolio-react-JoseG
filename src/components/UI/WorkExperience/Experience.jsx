import React from 'react'
import './Experience.css'

export const Experience = ({Date,PositionJob,Company,Description}) => {
  return (
    <div className='ExperienceJob'>
        <div className='containerJob1'>
            <p className='Date'>{Date}</p>
        </div>
        <div className='containerJob2'>
            <h4 className='PositionJob'>{PositionJob}</h4>
            <p className='TitleCompany'>{Company}</p>
            <p className='Description'>{Description}</p>
        </div>
    </div>
  )
}
