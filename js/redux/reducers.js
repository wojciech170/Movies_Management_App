import {combineReducers} from "redux";
import {FETCHED, FETCHED_FAILURE, FETCHING} from "./actions";


const initialState = {
    loading: false,
    movies: [],
    error: null,
};

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCHED:
            return {
                ...state,
                loading: false,
                movies: action.payload
            };
        case FETCHED_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};


export default combineReducers({moviesReducer})