import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  // key = property
  auth: authReducer,
  project: projectReducer
});

export default rootReducer;
