import {api} from '../api';

const FETCHING = "FETCHING";
const FETCHED = "FETCHED";
const FETCHED_FAILURE = "FETCHED_FAILURE";

const startFetching = () => {
    return {
        type: FETCHING,
    }
};

const moviesFetched = (movies) => {
    return {
        type: FETCHED,
        payload: movies,
    }
};

const fetchFailed = (error) => {
    return {
        type: FETCHED_FAILURE,
        payload: error,
    }
};

const fetchMovies = (query) => {
    return async (dispatch) => {
        dispatch(startFetching());
        try {
            const movies = await api.fetchData(query);
            dispatch(moviesFetched(movies));
        } catch (error) {
            dispatch(fetchFailed(error));
        }
    };
};

export {
    FETCHING,
    FETCHED,
    FETCHED_FAILURE,
    startFetching,
    moviesFetched,
    fetchFailed,
    fetchMovies,
}