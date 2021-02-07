const defaultState = {};

export const loginReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
    case "LOG_IN": {
      state = payload;
      return state;
    }
    case "LOG_OUT": {
      state = false;
      return state;
    }
    default:
      return state;
  }
};
