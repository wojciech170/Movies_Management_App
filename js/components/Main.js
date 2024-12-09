import React from 'react';
import store from "../redux/store";
import {Provider} from "react-redux";
import MovieSearch from "./MovieSearch";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const Main = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    <Route path="/" element={<MovieSearch/>}/>
                </Routes>
            </Provider>
        </BrowserRouter>
    );
};

export default Main;