const SET_CATEGORY = "SET_CATEGORY";

let initialState = {
  category: [],
  token: null,
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

export const setCategory = (category, token) => ({
  type: SET_CATEGORY,
  category,
  token,
});
