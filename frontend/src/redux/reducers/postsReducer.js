const defaultState = [];

export const postsReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case "GET_POSTS": {
      state = payload;
      return state;
    }
    case "GET_USER_POSTS": {
      state = payload;
      return state;
    }
    default:
      return state;
  }
};
