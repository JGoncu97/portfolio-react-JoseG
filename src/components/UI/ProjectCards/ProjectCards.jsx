import React from 'react'
import './Cards.css'
export const ProjectCards = ({ nombre, url, imagen }) => {
  const cards = "font-segoe border border-gray-300 rounded-lg p-4 m-4 text-center w-[20rem] h-[26rem] shadow-md";

  const cardsImg = "w-full rounded-lg h-[15rem] object-cover";
  
  const link = "inline-block mt-12 py-2 px-3 bg-blue-600 text-white rounded-full no-underline"; 
  

  return (
    <div className={cards}>
        <img src={imagen} alt={nombre} className={cardsImg} />
      <h3>{nombre}</h3>
      <a href={url} target="_blank" rel="noopener noreferrer" className={link}>
        Ver Despliegue
      </a>
    </div>
  )
}
