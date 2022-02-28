import { combineReducers } from "redux";
import connectedReducer from "./connectedReducer";

const reducers = combineReducers({
  connected: connectedReducer,
});

export default reducers;
