import { loginReducer } from "./loginReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  login: loginReducer,
});

export default allReducers;
