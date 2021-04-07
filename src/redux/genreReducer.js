import { contentListAPI } from '../api/api';

const SET_PLAYLIST = 'SET_PLAYLIST';
const SET_GENRE = 'SET_GENRE';
const SET_GENRE_ID = 'SET_GENRE_ID';
const SET_GENRE_ITEM = 'SET_GENRE_ITEM';
const IS_LOADING = 'IS_LOADING';

let initialState = {
  playlist: [],
  genre: [],
  genreId: null,
  genreItem: {},
  isLoading: false,
};

export let genreReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLAYLIST:
      return {
        ...state,
        playlist: [...action.playlist],
      };

    case SET_GENRE:
      return {
        ...state,
        genre: [...action.genre],
      };

    case SET_GENRE_ID:
      return {
        ...state,
        genreId: action.id,
      };

    case SET_GENRE_ITEM:
      return {
        ...state,
        genreItem: { ...action.item },
      };

    case IS_LOADING:
      return {
        ...state,
        isLoading: action.load,
      };

    default:
      return state;
  }
};

export const setGenreId = (id) => ({
  type: SET_GENRE_ID,
  id,
});

export const setGenreItem = (item) => ({
  type: SET_GENRE_ITEM,
  item,
});

const checkIsLoading = (load) => ({
  type: IS_LOADING,
  load,
});

const setPlaylist = (playlist) => ({
  type: SET_PLAYLIST,
  playlist,
});

const setGenre = (genre) => ({
  type: SET_GENRE,
  genre,
});

export const getGenre = (id) => {
  return (dispatch) => {
    dispatch(checkIsLoading(true));
    contentListAPI.getGenre(id).then((response) => {
      dispatch(setGenre(response));
      dispatch(checkIsLoading(false));
    });
  };
};

export const getPlaylist = (id) => {
  return (dispatch) => {
    dispatch(checkIsLoading(true));
    contentListAPI.getPlaylist(id).then((items) => {
      dispatch(setPlaylist(items));
      dispatch(checkIsLoading(false));
    });
  };
};
