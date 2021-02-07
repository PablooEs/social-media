import { loginReducer } from "./loginReducer";
import { combineReducers } from "redux";
import { postsReducer } from "./postsReducer";

const allReducers = combineReducers({
  login: loginReducer,
  posts: postsReducer,
});

export default allReducers;
