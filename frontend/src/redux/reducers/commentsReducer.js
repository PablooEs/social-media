const defaultState = [];

export const commentsReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case "GET_COMMENTS": {
      state = payload;
      return state;
    }
    default:
      return state;
  }
};
