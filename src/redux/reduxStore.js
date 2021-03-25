import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {plalistReducer} from "./playlistReducer";

let reducers = combineReducers({
  playlistPage: plalistReducer
})

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));