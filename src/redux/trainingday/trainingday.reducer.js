import { TrainingdayActionTypes } from "./trainingday.types";

const INITIAL_STATE = {
  trainingdays: null
};

const trainingdayReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TrainingdayActionTypes.FETCH_TRAININGDAY_START:
      return {
        ...state
        //isDispatched: !state.TRAININGDAY[0].hasOwnProperty("reps") TODO
      };
    case TrainingdayActionTypes.FETCH_TRAININGDAY_SUCCESS:
      return {
        ...state,
        trainingdays: action.payload
      };
    case TrainingdayActionTypes.FETCH_TRAININGDAY_FAILURE:
      return {
        ...state
      };

    default:
      return state;
  }
};

export default trainingdayReducer;
