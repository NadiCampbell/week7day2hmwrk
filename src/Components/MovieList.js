import React from 'react'; 
import Movie from './Movie';
import './MovieBox.css'

function MovieList({movieData}){

    const movieNodes = movieData.map(function(movie){
        return (
            // <Movie key={movie.id} name={movie.name}>{movie.link}</Movie>
            <li className="css-test" key={movie.id}> 
                <span>
                    {movie.name}
                </span>
            </li>
        )
    });

    return (

        <>
        {movieNodes}
        </>
    );
};

export default MovieList; 