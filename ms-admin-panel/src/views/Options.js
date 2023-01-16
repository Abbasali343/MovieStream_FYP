import style from '../assets/css/Options.module.css';
import { useHistory } from 'react-router-dom';
import img from '../assets/img/movieTitle.jpeg';

export default function Options(props){

    const history = useHistory();
    function moviePage(){
        history.push('/admin/addmovie');
        // props.movie();
    }
    function seriesPage(){
        history.push('/admin/addseries');
        // props.series();
    }

    return(
        <div className={style.main}>
            <h1 className={style.heading}>Select a Type</h1>
            <div className={style.btns}>
            <button className={style.select} onClick={moviePage}>Movie</button>
            <button className={style.select} onClick={seriesPage}>Series</button>
            </div>
            
        </div>
    )
}