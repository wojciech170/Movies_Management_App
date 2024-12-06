import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchMovies} from "../redux/actions";
import MovieList from "./MovieList";

const MovieSearch = () => {
    const [query, setQuery] = useState("");
    // const movies = useSelector(state => state.movies);
    // const loading = useSelector(state => state.loading);
    // const error = useSelector(state => state.error)
    const dispatch = useDispatch();

    // console.log(movies, loading, error, fetchMovies, query);
    return (
        <div>
        <div>
            <input
                type='text'
                placeholder='Movie Search...'
                onChange={(e) => setQuery(e.target.value)}
            />
                <button type='submit' onClick={() => dispatch(fetchMovies(query))}>Search</button>
        </div>
            <div>
                <MovieList/>
            </div>
        </div>
    );
};

export default MovieSearch;