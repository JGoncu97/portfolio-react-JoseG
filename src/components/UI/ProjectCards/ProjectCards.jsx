import React from 'react'
import './Cards.css'
export const ProjectCards = ({ nombre, url, imagen }) => {
  return (
    <div className='Cards'>
        <img src={imagen} alt={nombre} className='CardsImg' />
      <h3>{nombre}</h3>
      <a href={url} target="_blank" rel="noopener noreferrer" className='Link'>
        Ver Despliegue
      </a>
    </div>
  )
}
