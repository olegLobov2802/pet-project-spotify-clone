import { contentListAPI } from '../api/api';

const SET_CATEGORY = 'SET_CATEGORY';
const SET_PLAYLIST = 'SET_PLAYLIST';
const SET_GENRE = 'SET_GENRE';
const SET_PLAYLIST_NEW_RELEASES = 'SET_PLAYLIST_NEW_RELEASES';
const SET_GENRE_ID = 'SET_GENRE_ID';
const SET_PLAYLIST_ID = 'SET_PLAYLIST_ID';
const SET_GENRE_ITEM = 'SET_GENRE_ITEM';
const IS_LOADING = 'IS_LOADING';
const SET_PLAYLIST_ALBUM = 'SET_PLAYLIST_ALBUM';

let initialState = {
  category: [],
  playlist: [],
  genre: [],
  playlistNewReleases: [],
  genreId: null,
  playlistCover: null,
  playlistId: null,
  playlistAlbum: [],
  genreItem: {},
  isLoading: false,
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
    case SET_PLAYLIST_ALBUM:
      return {
        ...state,
        playlistAlbum: [...action.playlist],
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
      };
    case SET_PLAYLIST_NEW_RELEASES:
      return {
        ...state,
        playlistNewReleases: [...action.playlist],
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

export const setPlaylistId = (id) => ({
  type: SET_PLAYLIST_ID,
  id,
});

const checkIsLoading = (load) => ({
  type: IS_LOADING,
  load,
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

const setPlaylistAlbum = (playlist) => ({
  type: SET_PLAYLIST_ALBUM,
  playlist,
});

const setGenre = (genre) => ({
  type: SET_GENRE,
  genre,
});

export const getCategory = () => {
  return (dispatch) => {
    dispatch(checkIsLoading(true));
    contentListAPI.getCategory().then((data) => {
      dispatch(setCategory(data.categories.items));
      dispatch(checkIsLoading(false));
    });
  };
};

export const getPlaylistNewReleas = () => {
  return (dispatch) => {
    dispatch(checkIsLoading(true));
    contentListAPI.getPlaylistNewReleas().then((items) => {
      dispatch(setPlaylistNewReleases(items));
      dispatch(checkIsLoading(false));
    });
  };
};

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

export const getAlbumsTrack = (id) => {
  return (dispatch) => {
    dispatch(checkIsLoading(true));
    contentListAPI.getAlbumsTrack(id).then((items) => {
      dispatch(setPlaylistAlbum(items));
      dispatch(checkIsLoading(false));
    });
  };
};
