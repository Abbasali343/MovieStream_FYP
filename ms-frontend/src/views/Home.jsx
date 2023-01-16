import Slider from './Slider'
import style from '../assets/css/Home.module.css'

export default function Home(){
    return(
        <div className={style.main}>
            <Slider type='movie'/>
            <Slider type='series'/>
        </div>
    )
}