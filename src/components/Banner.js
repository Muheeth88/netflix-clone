import React, { useEffect, useState } from 'react'
import http from '../axios';
import requests from '../requests';
import "./Banner.css"

const Banner = () => {

    const [movie, setMovie] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
            const request = await http.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[ Math.floor(Math.random() * request.data.results.length - 1)]
            )
            return request; 
        }
        fetchData()
    }, [])

    console.log(">>>>>>>>>>>>>>",movie.backdrop_path);

    function truncate(str, n) {
        return str.length > n ? str.substr(0, n-1) + "..." : str;
    }

  return (
    <header className='banner' style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`}} >
        <div className='banner_contents'>
            <h2 className='banner_title'>{movie?.title || movie?.name || movie?.original_name}</h2>
            <div className='banner_buttons'>
                <button className='banner_button'>Play</button>
                <button className='banner_button'>My List</button>
            </div>
            {/* <h2 className='banner_description'>{truncate(movie.overview, 150)}</h2> */}
            <h2 className='banner_description'>{movie.overview}</h2>
        </div>
        <div className='banner_fadeBottom'></div>
    </header>
  )
}

export default Banner