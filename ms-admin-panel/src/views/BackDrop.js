import style from '../assets/css/BackDrop.module.css';


export default function BackDrop(props){

    function clear(){
        props.clear();
        props.action();
    }

    return(
        <div onClick={clear} className={style.backdrop}></div>
    )
}