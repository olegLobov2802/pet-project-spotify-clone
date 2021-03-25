const SET_NEW_ALBUMS = "SET_NEW_ALBUMS";

let initialState = {
  playlist: [],
};

export let plalistReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEW_ALBUMS:
      return {
        ...state,
        playlist: [...action.albums],
      };
    default:
      return state;
  }
};

export const setNewPlaylist = (albums) => ({
  type: SET_NEW_ALBUMS,
  albums,
});
