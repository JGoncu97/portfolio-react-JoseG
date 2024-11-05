import { Home } from '../Pages/Home/Home'
import './BackgroundStyle.css'

export const FirstBackground = () => {

  const backgroundFirstStyle = "bg-[rgb(230,227,227)] w-[120rem] h-[206rem] block items-center";
  const boxColor = "relative bg-[rgb(253,202,63)] w-[20rem] h-[20rem]";
  const blackBox = "relative z-10 bg-[rgba(0,0,0,0.986)] w-[1.5rem] h-[1.5rem] absolute bottom-[17rem] left-[7rem]";


  return (
    <div className={backgroundFirstStyle}>
        <div className={boxColor} />
        <div className={blackBox} />
        <Home/>
    </div>
  )
}
