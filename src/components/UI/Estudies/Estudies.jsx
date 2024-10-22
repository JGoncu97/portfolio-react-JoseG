import React from 'react'
import './Estudies.css'

export const Estudies = ({Date,Name,Title}) => {
  return (
    <div className='EstudiesProfile'>
        <p className='Date'>{Date}</p>
        <h4 className='Institution'>{Name}</h4>
        <p className='Tittle'>{Title}</p>
    </div>
  )
}
