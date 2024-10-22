import React from 'react'
import './Details.css'
export const Details = ({title,title2,info}) => {
  return (
        <div className='ProfileInfo'>
            <h3 className='titleProfile'><span className='color1'>{title}</span><span className='color2'>{title2}</span></h3>
            <p className='DetailsProfile'>{info}</p>
        </div>
  )
}
