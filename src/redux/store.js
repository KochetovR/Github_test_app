import {combineReducers} from "redux";
import { applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import {reposReducer} from "./reposReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    repos: reposReducer,
})

export const store = configureStore({reducer:rootReducer}, composeWithDevTools(applyMiddleware(thunk)))