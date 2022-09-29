import { appReducer } from "./appReducer";
import { inputBoxReducer}  from "./inputBoxReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({inputBoxReducer,appReducer})

export default rootReducer