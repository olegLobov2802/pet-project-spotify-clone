import { contentListAPI } from '../api/api';

const SET_PLAYLIST_NEW_RELEASES = 'SET_PLAYLIST_NEW_RELEASES';
const IS_LOADING = 'IS_LOADING';

let initialState = {
  playlistNewReleases: [],
};

export let homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLAYLIST_NEW_RELEASES:
      return {
        ...state,
        playlistNewReleases: [...action.playlist],
      };

    default:
      return state;
  }
};

const checkIsLoading = (load) => ({
  type: IS_LOADING,
  load,
});

const setPlaylistNewReleases = (playlist) => ({
  type: SET_PLAYLIST_NEW_RELEASES,
  playlist,
});

export const getPlaylistNewReleas = () => {
  return (dispatch) => {
    dispatch(checkIsLoading(true));
    contentListAPI.getPlaylistNewReleas().then((items) => {
      dispatch(setPlaylistNewReleases(items));
      dispatch(checkIsLoading(false));
    });
  };
};
