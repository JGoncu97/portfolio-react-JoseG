import React from 'react'
import './Estudies.css'

export const Estudies = ({Date,Name,Title}) => {
  return (
    <div className='EstudiesProfile'>
        <p className='Date'>{Date}</p>
        <h4 className='Institution'>{Title}</h4>
        <p className='Title'>{Name}</p>
    </div>
  )
}
