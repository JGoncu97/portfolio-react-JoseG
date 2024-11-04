import { Header } from '../../Layouts/Header/Header'
import { ProfessionalProfile } from '../../Layouts/Section/ProfessionalProfile/ProfessionalProfile'
import { Profile } from '../../Layouts/Section/Profile/Profile'
import { Projects } from '../../Layouts/Section/Projects/Projects'

import './Home.css'




export const Home = () => {

  const home = "relative bg-white w-[110rem] h-[200rem] mb-[18rem] ml-8";
const contentSon = "w-[40rem] h-[40rem]";


  return (
    <div className={home}>

        <div className={contentSon}>
          <Header/>
          <Profile />
          <ProfessionalProfile/>
          <Projects/>
        </div>
      
    </div>
  )
}
