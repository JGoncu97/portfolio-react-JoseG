import React, { useEffect, useState } from 'react'
import { ColorRandom } from './ColorRamdon';

export const TallerUsesState = () => {

    const [darkMode, setDarkMode] = useState(false);
    const [like, setlike] =useState(0);
    const [dislike, setdislike] = useState(0);
    const [colorRandom, setColorRandom] = useState('#FFFFFF');
    const [colorName , setColorName] = useState('Nombre de Color');
    const [hora,setHora] = useState(0);
    const [minuto , setMinuto] = useState(0);
    const [segundos, setSegundos] = useState(0)
    const [isRunning, setIsRunning] = useState(false); 
    
    useEffect(() => {
        let interval;

        if (isRunning) {
            interval = setInterval(() => {
                setSegundos((prevSegundos) => {
                    
                    if (prevSegundos === 59) {

                        setMinuto((prevMinuto) => {

                            if (prevMinuto === 59) {
                                setHora((prevHora) => prevHora + 1); 
                                return 0; 
                            }
                            return prevMinuto + 1; 
                        });
                        return 0; 

                    }
                    return prevSegundos + 1; 
                });
            }, 1000); 
        } else {
            clearInterval(interval); 
        }

        return () => clearInterval(interval); 
    }, [isRunning]);

  

    const cronometro = () => {
        setIsRunning(true); 
    };

    const pararCronometro = () => {
        setIsRunning(false); 
    };

    const resetCronometro = () =>{
        setHora(0);
        setMinuto(0);
        setSegundos(0);
    }
   

    const coloresAbsolutos = [
        "#FF0000",     // Rojo
        "#00FF00",     // Verde
        "#0000FF",     // Azul
        "#FFFF00",     // Amarillo
        "#FF00FF",     // Magenta
        "#00FFFF",     // Cian
        "#000000",     // Negro
        "#FFFFFF",     // Blanco
        "#808080",     // Gris
        "#800000",     // Marrón oscuro
        "#808000",     // Oliva
        "#800080",     // Púrpura
        "#008080",     // Verde azulado
        "#C0C0C0",     // Plata
        "#FFA500",     // Naranja
        "#A52A2A"      // Marrón
        ];


    const changeColor = () =>{

        const randomColor = coloresAbsolutos[Math.floor(Math.random() * coloresAbsolutos.length)]; 
        console.log(randomColor);
        setColorRandom(randomColor);


        switch (randomColor) {
            case "#FF0000":
                setColorName('Rojo')
                break;
            case "#00FF00" :
                setColorName('Verde')
                break;
            case '#0000FF':
                setColorName('Azul')
                break;
            case '#FFFF00':
                setColorName('Amarillo')
                break;
            case '#FF00FF':
                setColorName('Magenta')
                break;
            case '#00FFFF' :
                setColorName('Cian')
                break;
            case '#000000' :
                setColorName('Negro')
                break;
            case '#FFFFFF' :
                setColorName('Blanco')
                break;
            case '#808080' :
                setColorName('Gris')
                break;
            case '#800000' :
                setColorName('Marron Oscuro')
                break;
            case '#808000':
                setColorName('Oliva')
                break;
            case '#800080':
                setColorName('Purpura')
                break;
            case '#008080' :
                setColorName('Verde Azulado')
                break;
            case '#C0C0C0':
                setColorName('Plata')
                break;
            case '#FFA500':
                setColorName('Naranja')
                break;
            case '#A52A2A':
                setColorName('Marron')
                break;
            default:
                break;
        }

    }

    const changeMode = () =>{
        setDarkMode(!darkMode)
        


    }

    const bgColor ={
        backgroundColor : darkMode ? '#000000' : '#ffffff',
        color: darkMode ? '#ffffff' : '#000000'
    }

    const btnColor ={
        borderColor : darkMode ? 'white' : 'black'
    }
    const fondo = 'h-[100vh] w-[100vw] border-solid border-2  border-black flex justify-center items-center'
    const btnDarkMode ='border-solid border-2 rounded-[1rem]  h-[2rem] relative bottom-[25rem] right-[25rem]'

    const btnLikes = {
        color: 'black'
    }

    const containerColor ={
        backgroundColor : `${colorRandom}`,
        
    }

 
    

  return (

    <div className={fondo} style={bgColor}>
        <button style={btnColor} onClick={changeMode} className={btnDarkMode}>Dark mode</button>
            <div className='border-solid border-2 border-black w-[20rem] h-[20rem] bg-white  justify-center items-center'>
                <div className='flex w-[100%] border-solid border-2 border-black justify-center gap-10 mt-[6rem] mb-[2rem]'>
                <h2 style={btnLikes}>{like}</h2>
                <h2 style={btnLikes}>{dislike}</h2>
                </div>
                <div className='flex justify-center items-center gap-1'>
                <button style={btnLikes} 
                        className='border-solid border-2 border-black w-[3rem] rounded-[2rem]'
                        onClick={() =>setlike(like + 1)}> Like </button>
                <button style={btnLikes} 
                        className='border-solid border-2 border-black w-[3.4rem] rounded-[2rem]' 
                        onClick={() => setdislike(dislike +1)}> Dislike </button>

                </div>
             
            </div>
            <div  className='border-solid border-2 border-black w-[20rem] h-[20rem] bg-white relative'>
                <h2 style={btnLikes}  className='relative text-center mt-[2rem]' >{colorName}</h2>

                <button  onClick={changeColor} style={btnLikes} className='border-solid border-2 border-black w-[8rem] rounded-[2rem] relative top-[1rem] left-[6rem]'> Cambiar Color </button>
                <div style={containerColor} className='w-[19.8rem] h-[12.5rem] relative  top-[2rem]' />

                
                
            </div>
            <div className='border-solid border-2 border-black w-[20rem] h-[20rem] bg-white relative text-center'>
                    <h2 style={btnLikes}>Cronometro</h2>
                <div className='relative left-[9rem]'>
                    <div className='flex'>
                    <h2 style={btnLikes}>{hora} : {minuto} : {segundos}</h2>
                    </div>
                </div>
                <button style={btnLikes} onClick={cronometro} className='border-solid border-2 border-black w-[8rem] rounded-[2rem] relative top-[1rem] '>Iniciar</button>
                <button style={btnLikes} onClick={pararCronometro} className='border-solid border-2 border-black w-[8rem] rounded-[2rem] relative top-[1rem] '>Parar</button>
                <button style={btnLikes} onClick={resetCronometro} className='border-solid border-2 border-black w-[8rem] rounded-[2rem] relative top-[1rem] '>Resetear</button>

            </div>
    </div>
  )
}
