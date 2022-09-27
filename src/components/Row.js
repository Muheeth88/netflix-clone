
import React, { useEffect, useState } from 'react'
import http from '../axios';
import "./Row.css"

const Row = ({title, fetchUrl}) => {

    const base_URL = "https://image.tmdb.org/t/p/original" 
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        async function fetchData () {
            const request = await http.get(fetchUrl)
            console.log(request.data.results);
            setMovies(request.data.results)
            // return request; 
        }
        fetchData()
    }, [fetchUrl])
  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='row_posters'>
            {movies.map(movie => (
                <img key={movie.id} className='row_poster' src={`${base_URL}${movie.poster_path}`} alt={movie.name}></img>
            ))}
        </div>
    </div>
  )
}

export default Row