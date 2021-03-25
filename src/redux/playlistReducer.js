import {contentListAPI} from "../api/api";

const SET_PLAYLIST = "SET_PLAYLIST";

let initialState = {
  playlist: [],
};

export let playlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLAYLIST:
      return {
        ...state,
        playlist: [...action.playlist],
      };
    default:
      return state;
  }
};

export const setPlaylist = (playlist) => ({
  type: SET_PLAYLIST,
  playlist,
});

// export const getPlaylist = (token, id) => {
//   return (dispatch) => {
//     contentListAPI.getPlaylist(token, id).then(response => {
//       // dispatch(setPlaylist(response))
//       console.log(response)
//     })
//   }
// }
