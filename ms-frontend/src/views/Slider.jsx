import axios from 'axios'
import { useNavigate } from "react-router-dom";
import movie from '../assets/images/movie.webp'
import style from '../assets/css/Slider.module.css'
import { useState } from 'react';
import { useEffect } from 'react';

export default function Slider(prop){

    const navigate = useNavigate();

    const type = prop.type;
    var name;
    

    const [media,setMedia] = useState([]);

    var url;

    if (type === 'movie') {
        name = 'Movies';
        url = 'http://localhost:3000/v1/users/allmovies';
    } else {
        name = 'Series'
        url = 'http://localhost:3000/v1/users/allseries';
    }

    async function fetchData(){
        const data = await axios.get(url)

        setMedia(data.data);
    }

 

    useEffect(()=>{
        fetchData();
    },[])

    function goto(){
        if (type === 'movie') {
            navigate('/movies');
        } else {
            navigate('/series');
        }
    }

    return(
        <div className={style.main}>
            <h1 className={style.heading}>{name}</h1>
            <h5 className={style.next} onClick={goto}>View More &gt;&gt;</h5>
            <div className={style.holder}>
                {
                    media.slice(0,12).reverse().map((item)=>(
                        <div className={style.card}>
                        <img className={style.movieimg} src={movie}/>
                        <h2 className={style.title}>{item.title}</h2>
                    </div>
                    ))
                }
               
            </div>
        </div>
    )
}