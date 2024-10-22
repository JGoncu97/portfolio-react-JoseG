import { Header } from '../../Layouts/Header/Header'
import { ProfessionalProfile } from '../../Layouts/Section/ProfessionalProfile/ProfessionalProfile'
import { Profile } from '../../Layouts/Section/Profile/Profile'

import './Home.css'




export const Home = () => {
  return (
    <div className='Home'>

        <div className='ContentSon'>
          <Header/>
          <Profile />
          <ProfessionalProfile/>
        </div>
      
    </div>
  )
}
