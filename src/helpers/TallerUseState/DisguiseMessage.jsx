import React, { useState } from 'react'

export const DisguiseMessage = () => {

    const [isVisible,setIsVisible] = useState(false);
    const [message, setMessage] = useState('Bienvenido');

    const toggleMessage = () =>{
       
      
        setIsVisible(!isVisible);
        
        if (!isVisible) {
            setMessage('');
          } else {
            setMessage('Bienvenido');
          }
       
        
    }

   



  return (
    <div>
        <div>
            <div className='border-solid border-black border-[0.5rem] w-[117rem] h-[56.5rem] flex justify-center items-center'>
                <div className='border-solid border-black border-[0.5rem] w-[20rem] h-[20rem]  text-center jusify-center'>
                    <h1 >{message}</h1>
                    <button className='border-solid border-black border-[0.3rem] mt-[1rem] mr-[1rem]' onClick={toggleMessage} >{isVisible ? 'Mostrar ' :'Ocultar'}</button>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
