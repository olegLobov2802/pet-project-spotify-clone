import { contentListAPI } from '../api/api';

const SET_PLAYLIST_NEW_RELEASES = 'SET_PLAYLIST_NEW_RELEASES';
const IS_LOADING = 'IS_LOADING';

const SET_TOTAL_COUNT_PAGES = 'SET_COUNT_PAGES';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

let initialState = {
  playlistNewReleases: [],
  pagination: {
    limit: 6,
    offset: 1,
    total: null,
  },
  isLoading: false,
};

export let homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLAYLIST_NEW_RELEASES:
      return {
        ...state,
        playlistNewReleases: [...action.playlist],
      };

    case SET_TOTAL_COUNT_PAGES:
      return {
        ...state,
        pagination: { ...state.pagination, total: action.totalCount },
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        pagination: { ...state.pagination, offset: action.offset },
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

const checkIsLoading = (load) => ({
  type: IS_LOADING,
  load,
});

const setPlaylistNewReleases = (playlist) => ({
  type: SET_PLAYLIST_NEW_RELEASES,
  playlist,
});

export const setCurrentPage = (offset) => ({
  type: SET_CURRENT_PAGE,
  offset,
});

const setTotalCountPages = (totalCount) => ({
  type: SET_TOTAL_COUNT_PAGES,
  totalCount,
});

export const getPlaylistNewReleas = (offset) => {
  return (dispatch) => {
    dispatch(checkIsLoading(true));
    contentListAPI.getPlaylistNewReleas(offset).then((albums) => {
      dispatch(setPlaylistNewReleases(albums.items));
      dispatch(setTotalCountPages(albums.total));
      dispatch(checkIsLoading(false));
    });
  };
};
