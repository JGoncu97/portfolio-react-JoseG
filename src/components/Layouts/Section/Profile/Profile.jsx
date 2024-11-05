import React from 'react'
import { Details } from '../../../UI/ProfileDetails/Details'
import ProfilePhoto from '../../../../assets/images/ProfilePhoto.jpeg'
import './Profile.css'

export const Profile = () => {

  const profile = "flex justify-between items-center m-0 w-[114rem] h-[40rem]";
  const containerImg = "relative flex items-end";
  const profileImg = "w-[49rem] h-[37rem] relative z-10 mr-0";
  const boxYellow = "w-[8rem] h-[8rem] bg-[#fdca3f] absolute top-[30rem] right-[44rem]";
  const boxGray = "w-[8rem] h-[8rem] bg-gray-500 absolute bottom-[30rem] left-[35rem]";


  return (
    <div className={profile}>
        <Details title={'Informacion d'} title2={'e Perfil'} info={'Soy un aprendiz de Desarrollo de Software del SENA con practicas actualmente mas enfocadas en el area de Front-end, pero en continuo aprendizaje para conocer todas las areas que compone el Desarrollo Web, tambien cuento con conocimiento de Java Intermedio, manejo de la biblioteca de React en conjunto con la libreria de Chakram-UI y con animo de profesionalizarme cada vez mas y entrar en el mundo del desarrollo de software'} />
        <div className={containerImg}>
            <div className='Boxes'>
            <div className={boxGray}/>
            <div className={boxYellow}/>
            </div>
            
            <img className={profileImg} src={ProfilePhoto} alt="Profile" />
            
        </div>
        
    </div>
  )
}
