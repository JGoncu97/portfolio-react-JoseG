import React from 'react'
import { Contact } from '../../UI/ContactME/Contact'
import PhoneIcon from '../../../assets/images/phone.png'
import EmailIcon from '../../../assets/images/email.png'

import './ContactStyle.css'

export const ContactMe = () => {
  return (
    <div className='ContainerFH'>
      <span className="separator"></span>
        <div className='containerHeader'>
          <Contact title='Phone' content='314-6739183' />
          <img src={PhoneIcon} alt="" />
        </div>
        <span className="separator"></span>
        <div className='containerHeader'>
          <Contact title='Email' content='jggc1197@gmail.com' />
          <img src={EmailIcon} alt="" />
        </div>
        <span className="separator"></span>
    </div>
  )
}
