import { contentListAPI } from '../api/api';

const IS_LOADING = 'IS_LOADING';
const SET_ARTISTS_ID = 'SET_ARTISTS_ID';

let initialState = {
  isLoading: false,
  artistsId: null,
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

    default:
      return state;
  }
};

export const setArtistsId = (id) => ({
  type: SET_ARTISTS_ID,
  id,
});

const checkIsLoading = (load) => ({
  type: IS_LOADING,
  load,
});

export const getArtists = (id) => {
  return (dispatch) => {
    dispatch(checkIsLoading(true));
    contentListAPI.getArtists(id).then((data) => {
      // dispatch(setPlaylistAlbum(items));
      console.log(data);
      dispatch(checkIsLoading(false));
    });
  };
};
