import React from 'react';
import store from "../redux/store";
import {Provider} from "react-redux";
import MovieSearch from "./MovieSearch";

const Main = () => {
    return (
        <Provider store={store}>
            <MovieSearch/>
        </Provider>
    );
};

export default Main;