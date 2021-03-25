import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { playlistReducer } from "./playlistReducer";
import { categoryReducer } from "./categoryReducer";

let reducers = combineReducers({
  playlistPage: playlistReducer,
  categoryPage: categoryReducer,
});

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

window.store = store;
