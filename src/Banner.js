import React,{useState,useEffect} from 'react'
import axios from './axios'
import requests from './requests'

export default function Banner() {
    const [movie,setMovie] = useState([]);
    
    useEffect(()=>{
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[Math.floor(Math.random()*request.data.results.length-1)]
            )
        }
        fetchData();
    },[])
    console.log(movie)
    return (
        <header className="banner" style={{
            backgroundSize : "cover",
            
            backgroundRepeat : "no-repeat",
            backgroundImage : `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            // backgroundPosition : "center center"
        }}>
            <h1 className="banner_title">{movie?.title || movie?.name || movie?.originalName}</h1>
            <p className="banner_content">{movie?.overview}</p>
             
        </header>
    )
}
