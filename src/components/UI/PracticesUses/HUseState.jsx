
import React, { useState } from 'react';

export const HUseState = () => {
    const [input, setInputName] = useState('');
    const [nombre, setNombre] = useState('');

    const handleNameChange = (e) => {
        setInputName(e.target.value);
    };

    const enviarNombre = () => {
        setNombre(input); 
    };

    return (
        <>
            <div>
                <h2>Bienvenido {nombre}</h2> 
                <input 
                    placeholder='tu nombre es?' 
                    onChange={handleNameChange}
                />
                <button onClick={enviarNombre}>Imprimir</button> 
            </div>
        </>
    );
};

