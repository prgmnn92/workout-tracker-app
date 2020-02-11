import { combineReducers } from "redux";

import exerciseReducer from "./exercise/exercise.reducer";

const rootReducer = combineReducers({
  exercise: exerciseReducer
});

export default rootReducer;
