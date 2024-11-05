
import React, { useState } from 'react';

export const HUseState = () => {
   
    // /*Ejercicio Calculadora*/ 
    //const [input, setInput1] = useState('');
    // const [input2, setInput2] = useState('');
    // const [resultado, setResultado] = useState('');

    // const handleCalculate = (e) => {
    //     setInput1(e.target.value);
       
    // };
 
    // const handleCalculate2 = (e) => {
    //     setInput2(e.target.value);
       
    // };

  

    // const sendResultadoSuma = () => {
    
    //     const num1 = parseFloat(input);
    //     const num2 = parseFloat(input2);
        
    //     if(!isNaN(num1) && !isNaN(num2)){
    //         setResultado(num1 + num2); 
    //     }else{
    //         setResultado("No se permiten datos vacios")
            
    //     }

    // }

    // const sendResultadoResta = () => {
    
    //     const num1 = parseFloat(input);
    //     const num2 = parseFloat(input2);
        
    //     if(!isNaN(num1) && !isNaN(num2)){
    //         setResultado(num1 - num2); 
    //     }else{
    //         setResultado("No se permiten datos vacios")
            
    //     }

    // }

    // const sendResultadoMultiplicar = () => {
    
    //     const num1 = parseFloat(input);
    //     const num2 = parseFloat(input2);
        
    //     if(!isNaN(num1) && !isNaN(num2)){
    //         setResultado(num1 * num2); 
    //     }else{
    //         setResultado("No se permiten datos vacios")
            
    //     }
    // }

    // const sendResultadoDividir = () => {
    
    //     const num1 = parseFloat(input);
    //     const num2 = parseFloat(input2);

    //     if(!isNaN(num1) && !isNaN(num2)){
    //         setResultado(num1 / num2); 
    //     }else{
    //         setResultado("No se permiten datos vacios")
            
    //     }
     
            
       

    // }
    
    const buttonStyle = 'border-2 border-solid border-black ml-2 p-1.5 rounded-md bg-red-600'


    return (
        <>
            {/* <div>
                <h2>Calculadora </h2> 
                <input 
                    placeholder='Numero 1' 
                    onChange={handleCalculate}
                />
                <input 
                    placeholder='Numero 2' 
                    onChange={handleCalculate2}
                />
                <button className={buttonStyle} onClick={sendResultadoSuma}>Sumar</button> 
                <button className={buttonStyle} onClick= {sendResultadoResta}>Restar</button> 
                <button className={buttonStyle} onClick={sendResultadoMultiplicar}>Multiplicar</button> 
                <button className={buttonStyle} onClick={sendResultadoDividir}>Dividir</button> 
                <h3>{resultado}</h3>
            </div> */}

            <h1>Hola world</h1>
        </>
    );
};

