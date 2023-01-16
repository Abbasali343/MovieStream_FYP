import style from '../assets/css/DetailsView.module.css';
import img from '../assets/img/movieTitle.jpeg';

export default function DetailsView(props){

    const data = props.state;
    
    function close(){
        props.action();
    }

    return(
        <div className={style.main}>
            <h1 className={style.close} onClick={close}>X</h1>
            <h1 className={style.title}>{data.title}</h1>
            <img className={style.img} src={img}></img>
            <h3 className={style.description}>{data.description}</h3>
            <h4 className={style.type}>Type: {data.type}</h4>
            <h4 className={style.language}>Language: {data.fixedlanguage}</h4>
            <h4 className={style.date}>Release Year: {data.date}</h4>
        </div>
    )
}