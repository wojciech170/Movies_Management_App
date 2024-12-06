import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const MovieList = () => {
    const movies = useSelector(state => state.movies);

    console.log(movies);
    return (
        <>
            {movies  ?
                movies.search.map((movie, index) => <div key={index}><img src={movie.poster} alt={movie.title}/>{movie.title}</div>)
                :
                null
            }
        </>
    );
};

export default MovieList;