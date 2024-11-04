import React from 'react'
import './Contact.css'

export const Contact = ({title,content}) => {

  const dateInfo = "text-gray-500";

  return (
    <div className='Contact'>
        <div>
            <h3>{title}</h3>
            <p className={dateInfo}>{content}</p>
        </div>
    </div>
  )
}
