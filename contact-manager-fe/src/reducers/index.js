import { combineReducers } from "redux";
import contactReducer  from "./contactReducers";
import authReducer from "./authReducer";
export default combineReducers({
    contactReducer,authReducer
})