import { contentListAPI } from "../api/api";

const SET_CATEGORY = "SET_CATEGORY";
const SET_PLAYLIST = "SET_PLAYLIST";
const SET_GENRE = "SET_GENRE";
const SET_PLAYLIST_NEW_RELEASES = "SET_PLAYLIST_NEW_RELEASES";
const SET_GENRE_ID = "SET_GENRE_ID";
const SET_PLAYLIST_ID = "SET_PLAYLIST_ID";
const SET_GENRE_ITEM = "SET_GENRE_ITEM";

let initialState = {
  category: [],
  playlist: [],
  genre: [],
  playlistNewReleases: [],
  genreId: null,
  playlistCover: null,
  playlistId: null,
  genreItem: {}
};

export let categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        category: [...action.category],
      };
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
    case SET_PLAYLIST_ID:
      return {
        ...state,
        playlistId: action.id,
        playlistCover: action.cover,
      };
    case SET_PLAYLIST_NEW_RELEASES:
      return {
        ...state,
        playlistNewReleases: [...action.playlist],
      };
    case SET_GENRE_ITEM:
      return {
        ...state,
        genreItem: {...action.item},
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

export const setPlaylistId = (id, cover) => ({
  type: SET_PLAYLIST_ID,
  id,
  cover,
});

const setCategory = (category) => ({
  type: SET_CATEGORY,
  category,
});

const setPlaylistNewReleases = (playlist) => ({
  type: SET_PLAYLIST_NEW_RELEASES,
  playlist,
});

const setPlaylist = (playlist) => ({
  type: SET_PLAYLIST,
  playlist,
});

const setGenre = (genre) => ({
  type: SET_GENRE,
  genre,
});

export const getCategory = () => {
  return (dispatch) => {
    contentListAPI.getCategory().then((data) => {
      dispatch(setCategory(data.categories.items));
    });
  };
};

export const getPlaylistNewReleas = () => {
  return (dispatch) => {
    contentListAPI.getPlaylistNewReleas().then((items) => {
      dispatch(setPlaylistNewReleases(items));
    });
  };
};

export const getGenre = (id) => {
  return (dispatch) => {
    contentListAPI.getGenre(id).then((response) => {
      dispatch(setGenre(response));
    });
  };
};

export const getPlaylist = (id) => {
  return (dispatch) => {
    contentListAPI.getPlaylist(id).then((items) => {
      dispatch(setPlaylist(items));
    });
  };
};
