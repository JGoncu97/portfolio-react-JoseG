import React from 'react'
import './Professional.css'
import { Estudies } from '../../../UI/Estudies/Estudies'
import { Experience } from '../../../UI/WorkExperience/Experience'

export const ProfessionalProfile = () => {
  return (
    <div className='ContainerProfessional'>
      <div className='ContainerJobs'>
        <div className='Estudies'>
          <h3 className='titleEducation'><span className='color1'>Mi</span> <span className='color2'>Eduacion</span></h3>
            <Estudies Date={'2010 - 2014'} Title={'Bachiller en Ciencias'} Name={'Alberto Arvelo Torrealba'} />
            <Estudies Date={'2023 - Cursando Actual'} Title={'Tecnologo en Analisis y Desarrollo de Software'} Name={'Servicio Nacional de Aprendizaje'} />
        </div>
        <div className='ContainerExperiences'>
          <h3 className='titleWork'><span className='color1'>Experiencia</span> <span className='color2'> Laboral</span></h3>
            <Experience Date={'07/2024 - 09/2024'} PositionJob={'Monitor de Desarrollo'} Company={'SENNOVA-ARMENIA'} Description={'Aprendiz monitor de desarrollo de software en el Proyecto de Investigacion SENNOVA 2024 : SGPS-12446-2024, en donde en calidad de monitor cumpli las funciones de desarrollador Front-End en la construccion del micro proyecto ECONOMIA CIRCULAR COMO APORTE A LA SOSTENIBLIDAD DE DOS SEDES DEL CENTRO DE COMERCIO Y TURISMO A PARTIR DE FUENTES NO CONVENCIONALES DE ENERGIA RENOVABLE, EN SENA QUINDIO, para un Analisis de Ahorro Energetico entre dos comercializadores de la ciudad de Armenia.'} />
            <Experience Date={'04/2023 - 04/2024'} PositionJob={'Auxiliar Cocina'} Company={'AVESCO S.A'} Description={'Auxiliar de cocina en la franquicia de KOKORIKO, cumpliendo labores de preparacion, alistamento y coccion de alimentos, inventariado y control de rotacion de alimento'} />
            
        </div>
      </div>
    </div>
  )
}
