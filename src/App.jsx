import { FirstBackground } from './components/Background/FirstBackground'

import './App.css'
import { HUseState } from './components/UI/PracticesUses/HUseState'
import { ColorRandom } from './components/UI/PracticesUses/ColorRamdon'
import { TallerUsesState } from './components/UI/PracticesUses/TallerUsesState'
import { Colors } from './helpers/Colors'
import { DisguiseMessage } from './helpers/TallerUseState/DisguiseMessage'




export const App =()=> {
  


  return (
    <>
    <div className='containerFather'>
      {/* <FirstBackground/> */}
        {/* <HUseState/> */}
        {/* <ColorRandom/> */}
        {/* <TallerUsesState/> */}
        {/* <Colors/> */}
        <DisguiseMessage/>

    </div>
      
      
    </>
  )
}


