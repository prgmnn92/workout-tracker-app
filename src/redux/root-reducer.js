import { combineReducers } from "redux";

import exerciseReducer from "./exercise/exercise.reducer";
import setsReducer from "./sets/sets.reducer";
import trainingdayReducer from "./trainingday/trainingday.reducer";

const rootReducer = combineReducers({
  exercise: exerciseReducer,
  sets: setsReducer,
  trainingdays: trainingdayReducer
});

export default rootReducer;
