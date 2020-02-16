import { combineReducers } from "redux";

import exerciseReducer from "./exercise/exercise.reducer";
import setsReducer from "./sets/sets.reducer";

const rootReducer = combineReducers({
  exercise: exerciseReducer,
  sets: setsReducer
});

export default rootReducer;
