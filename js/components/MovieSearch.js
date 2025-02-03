import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {fetchMovies} from "../redux/actions";
import MovieList from "./MovieList";

const MovieSearch = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();

    return (
        <div>
        <div className='search-bar'>
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