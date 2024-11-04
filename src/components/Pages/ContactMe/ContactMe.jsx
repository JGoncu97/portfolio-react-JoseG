import React from 'react'
import { Contact } from '../../UI/ContactME/Contact'
import PhoneIcon from '../../../assets/images/phone.png'
import EmailIcon from '../../../assets/images/email.png'

import './ContactStyle.css'

export const ContactMe = () => {

  const containerHeader = "flex justify-between items-center p-4 h-[4rem]";
  const containerFH = "w-[23rem] h-[18rem]";
  const icon= "w-[2rem] h-[2rem]";
  const separator = "block w-full h-[2px] bg-black my-4 rounded";
  
  return (
    <div className={containerFH}>
      <span className={separator}></span>
        <div className={containerHeader}>
          <Contact title='Phone' content='314-6739183' />
          <img className={icon} src={PhoneIcon} alt="" />
        </div>
        <span className={separator}></span>
        <div className={containerHeader}>
          <Contact title='Email' content='jggc1197@gmail.com' />
          <img className={icon} src={EmailIcon} alt="" />
        </div>
        <span className={separator}></span>
    </div>
  )
}
