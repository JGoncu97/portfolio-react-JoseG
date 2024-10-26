import React from 'react'
import './ProjectStyle.css'
import { ProjectCards } from '../../../UI/ProjectCards/ProjectCards'
import MarketPlace from '../../../../assets/images/MarketPlace.png'
import FormEmail from '../../../../assets/images/FormEmail.png'
import Cards from '../../../../assets/images/TarjetasSimsonp.png'
import ApiRickandMorty from '../../../../assets/images/RickandMorty.png'
import JuegoTriqui from '../../../../assets/images/JuegoTriqui.png'
import Juego from '../../../../assets/images/JuegoPPT.png'
export const Projects = () => {
  return (
    <div className='Projects'>
            <h2 className='TittleProjects'><span className='color1'>Proy</span><span className='color2'>ectos</span></h2>
            <div className='containerCards'>
                <ProjectCards nombre={'MiniMarket ApiRest'} url={'https://market-place-jose-gonzalez.vercel.app/'} imagen={MarketPlace}/>
                <ProjectCards nombre={'Formulario Email'} url={'https://formulario-email-js.vercel.app/'} imagen={FormEmail}/>
                <ProjectCards nombre={'Generador de Tarjetas Simsonp'} url={'https://generador-tarjetas-simsonp.vercel.app/'} imagen={Cards}/>
                <ProjectCards nombre={'Buscardor Rick and Morty ApiRest'} url={'https://buscardor-rick-and-morty.vercel.app/'} imagen={ApiRickandMorty}/>
                <ProjectCards nombre={'Juego Triqui'} url={'https://juego-triqui.vercel.app/'} imagen={JuegoTriqui}/>
                <ProjectCards nombre={'Juego Piedra-Papel-Tijera'} url={'https://game-js-smoky.vercel.app/'} imagen={Juego}/>
            </div>
    </div>
  )
}
