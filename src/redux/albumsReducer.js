import { contentListAPI } from '../api/api';

const SET_PLAYLIST_INFO = 'SET_PLAYLIST_INFO';
const IS_LOADING = 'IS_LOADING';
const SET_PLAYLIST_ALBUM = 'SET_PLAYLIST_ALBUM';

let initialState = {
  playlistCover: null,
  playlistId: null,
  playlistAlbum: [],
  playlistAlbumImg: null,
  albumName: null,
  albumArtists: [],
  isLoading: false,
};

export let albumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLAYLIST_ALBUM:
      return {
        ...state,
        playlistAlbum: [...action.playlist],
      };

    case SET_PLAYLIST_INFO:
      return {
        ...state,
        playlistId: action.id,
        playlistAlbumImg: action.img,
        albumName: action.albumName,
        albumArtists: [...action.artists],
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

export const setPlaylistInfo = (id, img, albumName, artists) => ({
  type: SET_PLAYLIST_INFO,
  id,
  img,
  albumName,
  artists,
});

const checkIsLoading = (load) => ({
  type: IS_LOADING,
  load,
});

const setPlaylistAlbum = (playlist) => ({
  type: SET_PLAYLIST_ALBUM,
  playlist,
});

export const getAlbumsTrack = (id) => {
  return (dispatch) => {
    dispatch(checkIsLoading(true));
    contentListAPI.getAlbumsTrack(id).then((items) => {
      dispatch(setPlaylistAlbum(items));
      dispatch(checkIsLoading(false));
    });
  };
};

// // TODO
// export const getAlbums = (id) => {
//   return (dispatch) => {
//     dispatch(checkIsLoading(true));
//     contentListAPI.getAlbums(id).then((response) => {
//       console.log(response);
//       dispatch(checkIsLoading(false));
//     });
//   };
// };
