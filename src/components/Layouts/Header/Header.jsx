import React from 'react';

import './Navbar.css'

import { ContactMe } from '../../Pages/ContactMe/ContactMe';
import { Title } from '../../UI/Tittle/Tittle';

export const Header = () => {
  return (
    <header >
        <Title/>
        <ContactMe/>
    </header>
  )
}


