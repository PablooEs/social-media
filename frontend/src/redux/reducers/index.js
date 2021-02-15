import { loginReducer } from "./loginReducer";
import { combineReducers } from "redux";
import { postsReducer } from "./postsReducer";
import { commentsReducer } from "./commentsReducer";

const allReducers = combineReducers({
  login: loginReducer,
  posts: postsReducer,
  comments: commentsReducer,
});

export default allReducers;
