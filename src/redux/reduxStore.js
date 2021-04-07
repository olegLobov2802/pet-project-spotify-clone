import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { albumsReducer } from './albumsReducer';
import { categoryReducer } from './categoryReducer';
import { genreReducer } from './genreReducer';
import { homeReducer } from './homeReducer';
import { artistsReducer } from './artistsReducer';

let reducers = combineReducers({
  categorytPage: categoryReducer,
  homePage: homeReducer,
  genrePage: genreReducer,
  albumsPage: albumsReducer,
  artistsPage: artistsReducer,
});

const loadState = () => {
  try {
    const serialisedState = window.localStorage.getItem('app_state');
    if (!serialisedState) return undefined;
    return JSON.parse(serialisedState);
  } catch (err) {
    return undefined;
  }
};

const oldState = loadState();

export const store = createStore(reducers, oldState, composeWithDevTools(applyMiddleware(thunk)));

window.store = store;

const saveState = (state) => {
  try {
    const serialisedState = JSON.stringify(state);

    window.localStorage.setItem('app_state', serialisedState);
  } catch (err) {}
};

store.subscribe(() => {
  saveState(store.getState());
});
