
import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';
import http from '../axios';
import "./Row.css"
import movieTrailer from "movie-trailer"

const Row = ({title, fetchUrl, isLargeRow}) => {

    const base_URL = "https://image.tmdb.org/t/p/original" 
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    
    useEffect(() => {
        async function fetchData () {
            const request = await http.get(fetchUrl)
            console.log(request.data.results);
            setMovies(request.data.results)
            // return request; 
        }
        fetchData()
    }, [fetchUrl])

    const opts = {
        height: "390",
        playerVars: {
            autoplay: 1
        }
    }

    const handleClick = (movie) => {
        console.log("Clikkkkkkked");
        if(trailerUrl) {
            setTrailerUrl("");
        } else {
        movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
        .then((url) => {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"))
            
        })
        .catch(e => console.log(e.message))   
        }
    }

  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='row_posters'>
            {movies.map(movie => (
                <img 
                key={movie.id} 
                className={`row_poster ${isLargeRow && "row_largePoster"}`} 
                src={`${base_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                alt={movie.name}
                onClick = {() => handleClick(movie)}>
                </img> 
            ))}
        </div>
        { trailerUrl && <YouTube className='row_trailer' videoId={trailerUrl} opts={opts}></YouTube> }
    </div>
  )
}

export default Row