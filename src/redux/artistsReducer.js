import { contentListAPI } from '../api/api';

const IS_LOADING = 'IS_LOADING';
const SET_ARTISTS_ID = 'SET_ARTISTS_ID';
const SET_ARTIST_INFO = 'SET_ARTIST_INFO';
const SET_TOP_TRACK = 'SET_TOP_TRACK';
const SET_ALBUMS_ARTISTS = 'SET_ALBUMS_ARTISTS';
const SET_SIMILAR_ARTISTS = 'SET_SIMILAR_ARTISTS';

let initialState = {
  isLoading: false,
  artistsId: null,
  followers: null,
  genres: [],
  img: null,
  name: null,
  topTrack: [],
  albums: [],
  similarArtists: [],
};

export let artistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ARTISTS_ID:
      return {
        ...state,
        artistsId: action.id,
      };

    case IS_LOADING:
      return {
        ...state,
        isLoading: action.load,
      };

    case SET_ARTIST_INFO:
      return {
        ...state,
        followers: action.followers,
        genres: [...action.genres],
        img: action.img,
        name: action.name,
      };

    case SET_TOP_TRACK:
      return {
        ...state,
        topTrack: [...action.playlist],
      };

    case SET_ALBUMS_ARTISTS:
      return {
        ...state,
        albums: [...action.albums],
      };

    case SET_SIMILAR_ARTISTS:
      return {
        ...state,
        similarArtists: [...action.artists],
      };

    default:
      return state;
  }
};

export const setArtistsId = (id) => ({
  type: SET_ARTISTS_ID,
  id,
});

const setArtistsInfo = (followers, genres, img, name) => ({
  type: SET_ARTIST_INFO,
  followers,
  genres,
  img,
  name,
});

const checkIsLoading = (load) => ({
  type: IS_LOADING,
  load,
});

const setTopTrack = (playlist) => ({
  type: SET_TOP_TRACK,
  playlist,
});

const setAlbumsArtists = (albums) => ({
  type: SET_ALBUMS_ARTISTS,
  albums,
});

const setSimilarArtists = (artists) => ({
  type: SET_SIMILAR_ARTISTS,
  artists,
});

export const getArtists = (id) => {
  return (dispatch) => {
    dispatch(checkIsLoading(true));
    contentListAPI.getArtists(id).then((data) => {
      dispatch(setArtistsInfo(data.followers.total, data.genres, data.images[0].url, data.name));
      dispatch(checkIsLoading(false));
    });
    contentListAPI.getTopTrackArtists(id).then((tracks) => {
      dispatch(setTopTrack(tracks));
    });
    contentListAPI.getAlbumArtists(id).then((data) => {
      dispatch(setAlbumsArtists(data.items));
    });
    contentListAPI.getSimilarArtists(id).then((data) => {
      dispatch(setSimilarArtists(data.artists));
    });
  };
};
