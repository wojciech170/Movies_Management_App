import {createStore, applyMiddleware} from "redux";
import reducer from "./reducers";
import {logger} from 'redux-logger';
import {composeWithDevTools} from '@redux-devtools/extension';
import {thunk} from 'redux-thunk';


const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;
