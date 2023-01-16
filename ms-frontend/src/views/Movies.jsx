import axios from 'axios'
import movie from '../assets/images/movie.webp'
import style from '../assets/css/Movies.module.css'
import { useState } from 'react';
import { useEffect } from 'react';

export default function Movies(){
    
    const name = 'Movies';
    

    const [media,setMedia] = useState([]);

    var url = 'http://localhost:3000/v1/users/allmovies';

    async function fetchData(){
        const data = await axios.get(url)

        setMedia(data.data);
    }

 

    useEffect(()=>{
        fetchData();
    },[])

    return(
        <div className={style.main}>
            <h1 className={style.heading}>{name}</h1>
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