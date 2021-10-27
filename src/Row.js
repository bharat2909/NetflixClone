import React,{useState,useEffect} from 'react'
import axios from './axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'
export default function Row({title,fetchURL,isLargeRow}) {

    const baseurl="https://image.tmdb.org/t/p/original/";

    const [movies,setMovies] = useState([]);
    const opts = {
        height: '390px',
        width: '100%',
        playerVars: {
          //https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    }
    const [trailerUrl,setTrailerUrl] = useState('');

    const handleClick=(movie)=>{
        if(trailerUrl){
            setTrailerUrl('');
        }
        else{
            movieTrailer(movie?.name || movie?.title || "")
            .then((url)=>{
                const urlParams = new URLSearchParams(new URL(url).search);
                //The above line is for fetching all the parameters from the url that is returned by movieTrailer.
                setTrailerUrl(urlParams.get('v'));
                //The above line is for fetching the video id that is required below and set it as trailerUrl.
            }).catch((error)=>{console.log(error)})
        }
    }

     useEffect(() =>{
         async function fetchData() {
            const request = await axios.get(fetchURL);
            // Now as we got the fetchURL as the latter part and we got baseURL fixed in axios.js file. So function of axios.get is to join the baseURL and fetchURL part together and return the results.
            setMovies(request.data.results)
            // console.log(request);
         }
         fetchData();
     },[fetchURL])
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className={`row_img ${isLargeRow && "row_large"}`}>  
                {
                    movies.map((movie =>(

                        <img key={movie.id} onClick={()=>handleClick(movie)} className={`image ${isLargeRow && "row_larger"}`} src={`${baseurl}${isLargeRow ? movie.poster_path:movie.backdrop_path}`} alt={movie.name} />
                    )))
                }
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
        </div>
    )
}

