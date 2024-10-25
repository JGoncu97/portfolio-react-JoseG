import React from 'react'
import './Contact.css'

export const Contact = ({title,content}) => {
  return (
    <div className='Contact'>
        <div>
            <h3>{title}</h3>
            <p className='DateInfo'>{content}</p>
        </div>
    </div>
  )
}
