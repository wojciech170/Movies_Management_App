import React from 'react';
import {useSelector} from "react-redux";

const MovieList = () => {
    const movies = useSelector(state => state.moviesReducer.movies.Search);
    const loading = useSelector(state => state.moviesReducer.loading);
    const error = useSelector(state => state.moviesReducer.error);

    return (
        <div>
            {loading && "Loading..."}
            {movies ?
                movies.map((movie, index) => (
                    <div key={index}>
                        <img src={movie.Poster} alt={movie.Title}/>
                        Title: {movie.Title} Production Year: {movie.Year}
                    </div>
                ))
                :
                <></>
            }
            {error && error}
        </div>
    );
};

export default MovieList;