import { combineReducers } from "redux";

import workoutReducer from "./workout/workout.reducer";

const rootReducer = combineReducers({
  workout: workoutReducer
});

export default rootReducer;
