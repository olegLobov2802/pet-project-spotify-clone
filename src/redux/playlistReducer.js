import { contentListAPI } from "../api/api";

const SET_PLAYLIST = "SET_PLAYLIST";

let initialState = {
  playlist: [],
};

export let playlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLAYLIST:
      return {
        ...state,
        playlist: [...state.playlist, ...action.playlist],
      };
    default:
      return state;
  }
};

const setPlaylist = (playlist) => ({
  type: SET_PLAYLIST,
  playlist,
});

export const getPlaylistCategory = (id) => {
  return (dispatch) => {
    contentListAPI.getPlaylistCategory(id).then((response) => {
      dispatch(setPlaylist(response));
    });
  };
};
export const getPlaylistNewReleas = () => {
  return (dispatch) => {
    contentListAPI.getPlaylistNewReleas().then((items) => {
      dispatch(setPlaylist(items));
      console.log(items)
    });
  };
};
