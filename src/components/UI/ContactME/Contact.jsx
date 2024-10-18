import React from 'react'

export const Contact = ({title,content}) => {
  return (
    <div className='Contact'>
        <div>
            <h3>{title}</h3>
            <p>{content}</p>
        </div>
    </div>
  )
}
