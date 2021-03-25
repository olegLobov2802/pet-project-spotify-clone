import { contentListAPI } from "../api/api";

const SET_CATEGORY = "SET_CATEGORY";

let initialState = {
  category: [],
};

export let categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        category: [...action.category],
        token: action.token,
      };
    default:
      return state;
  }
};

const setCategory = (category) => ({
  type: SET_CATEGORY,
  category,
});

export const getCategory = () => {
  return (dispatch) => {
    contentListAPI.getCategory().then((data) => {
      dispatch(setCategory(data.categories.items));
    });
  };
};

