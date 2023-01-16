import { useHistory } from 'react-router-dom';
import style from '../assets/css/SeriesOption.module.css';

export default function SeriesOption(props){

    const history = useHistory();

    function newSeries(){
        history.push('/admin/addseries');
    }
    function oldSeries(){
        props.old();
    }

    return(
        <div className={style.main}>
            <h1 className={style.heading}>Select a Option</h1>
            <div className={style.btns}>
            <button className={style.select} onClick={newSeries}>New Series</button>
            <button className={style.select} onClick={oldSeries}>Old Series</button>
            </div>
        </div>
    )
}