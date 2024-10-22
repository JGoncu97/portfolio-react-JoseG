import React from 'react'
import { Details } from '../../../UI/ProfileDetails/Details'
import ProfilePhoto from '../../../../assets/images/ProfilePhoto.jpeg'
import './Profile.css'

export const Profile = () => {
  return (
    <div className='Profile'>
        <Details title={'Informacion d'} title2={'e Perfil'} info={'Soy un aprendiz de Desarrollo de Software del SENA con practicas actualmente mas enfocadas en el area de Front-end, pero en continuo aprendizaje para conocer todas las areas que compone el Desarrollo Web, tambien cuento con conocimiento de Java Intermedio, manejo de la biblioteca de React en conjunto con la libreria de Chakram-UI y con animo de profesionalizarme cada vez mas y entrar en el mundo del diseño web'} />
        <div className='ContainerImg'>
            <div className='Boxes'>
            <div className='BoxGray'/>
            <div className='BoxYellow'/>
            </div>
            
            <img className='ProfileImg' src={ProfilePhoto} alt="Profile" />
            
        </div>
        
    </div>
  )
}
