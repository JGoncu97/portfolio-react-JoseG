import React, { useState } from 'react';

export const ColorRandom = () => {
  const [color1, setColor1] = useState('');
  const [color2, setColor2] = useState('');
  const [color3, setColor3] = useState('');

  const changeColor = () => {
   
    const randomValue1 = Math.floor(Math.random() * 255); 
    const randomValue2 = Math.floor(Math.random() * 255); 
    const randomValue3 = Math.floor(Math.random() * 255); 
    
    setColor1(parseFloat(randomValue1)); 
    setColor2(parseFloat(randomValue2));
    setColor3(parseFloat(randomValue3));

    console.log(`rgb(${color1},${color2},${color3})`)

  };
  const fondoColor ={
    backgroundColor: `rgb(${color1},${color2},${color3})`,
  }
 
  const box = `border-solid border-2 border-black w-[100vw] h-[100vh] flex justify-center items-center `;
  const btnColor= 'border-solid border-2 border-black rounded-[1rem]  h-[2rem] bg-red-400' ;

  return (
    <>
      <div style={fondoColor} className={box}>
        <button className={btnColor} onClick={changeColor}>Cambiar Color</button>
      </div>
    </>
  );
};
