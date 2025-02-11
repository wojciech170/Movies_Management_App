import React from 'react';
import {useSelector} from "react-redux";
import ListItem from './ListItem';

const MovieList = () => {
    const movies = useSelector(state => state.moviesReducer.movies.Search);
    const loading = useSelector(state => state.moviesReducer.loading);
    const error = useSelector(state => state.moviesReducer.error);

    return (
        <div className='movie-list'>
            {loading && "Loading..."}
            {movies ?
                movies.map((movie, index) => (
                    <div className='movie-card' key={index}>
                        <ListItem movie={movie}/>
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