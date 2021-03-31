import {autorize, contentListAPI} from "../api/api";

const SET_CATEGORY = "SET_CATEGORY";
const SET_CATEGORY_ID = "SET_CATEGORY_ID";
const SET_PLAYLIST = "SET_PLAYLIST";
const SET_PLAYLIST_NEW_RELEASES = "SET_PLAYLIST_NEW_RELEASES";
const SET_TRACK = "SET_TRACK";

let initialState = {
  category: [],
  categoryId: [],
  playlist: [],
  playlistNewReleases: [],
  trackList: [],
  track: [],
};

export let categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        category: [...action.category],
      };
    case SET_CATEGORY_ID:
      return {
        ...state,
        categoryId: [action.categoryId],
      };
    case SET_PLAYLIST:
      return {
        ...state,
        playlist: [...action.playlist],
      };
    case SET_PLAYLIST_NEW_RELEASES:
      return {
        ...state,
        playlistNewReleases: [...action.playlist],
      };
    case SET_TRACK:
      return {
        ...state,
        trackList: [...action.tracks],
      };
    default:
      return state;
  }
};

const setCategory = (category) => ({
  type: SET_CATEGORY,
  category,
});

const setCategoryId = (categoryId) => ({
  type: SET_CATEGORY_ID,
  categoryId,
});

const setPlaylistNewReleases = (playlist) => ({
  type: SET_PLAYLIST_NEW_RELEASES,
  playlist,
});

const setPlaylist = (playlist) => ({
  type: SET_PLAYLIST,
  playlist,
});

const setTracks = (tracks) => ({
  type: SET_TRACK,
  tracks,
});

export const getCategory = () => {
  return (dispatch) => {
    contentListAPI.getCategory().then((data) => {
      dispatch(setCategory(data.categories.items));
      data.categories.items.map((item) => {
        dispatch(setCategoryId(item.id));
      });
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

export const getPlaylistCategory = (id) => {
  return (dispatch) => {
    contentListAPI.getPlaylistCategory(id).then((response) => {
      dispatch(setPlaylist(response));
      console.log(response);
    });
  };
};

export const getTrackList = (id) => {
  return (dispatch) => {
    contentListAPI.getTrackList(id).then((items) => {
      dispatch(setTracks(items));
      console.log(items);
    });
  };
};

export const getTrack = (id) => {
  return (dispatch) => {
    contentListAPI.getTrack(id).then((response) => {
      // dispatch(setTracks(items));
    });
  };
};
