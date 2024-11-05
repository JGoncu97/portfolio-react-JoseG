import React from 'react';

import './Navbar.css'

import { ContactMe } from '../../Pages/ContactMe/ContactMe';
import { Title } from '../../UI/Tittle/Tittle';

export const Header = () => {
  const headerStyle = "w-[100rem] h-[20rem] flex justify-between p-[5rem] font-sans";


  return (
    <header className={headerStyle} >
        <Title/>
        <ContactMe/>
    </header>
  )
}


