import React from 'react'
import './Professional.css'
import { Estudies } from '../../../UI/Estudies/Estudies'

export const ProfessionalProfile = () => {
  return (
    <div className='ContainerProfessional'>
      <div className='Estudies'>
        <Estudies Date={'14/06/2014'} Name={'Alberto Arvelo Torrealba'} Title={'Bachiller en Ciencias'} />
      </div>
      
    </div>
  )
}
