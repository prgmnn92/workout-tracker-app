import { SetsActionTypes } from "./sets.types";

//import { addSetsToDatabase } from "../../firebase/firebase.utils";

const INITIAL_STATE = {
  sets: [{}]
};

const setsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SetsActionTypes.CHECKIN_SETS:
      return {
        ...state
      };
    case SetsActionTypes.ADD_SET:
      return {
        ...state,

        sets: [...state.sets, {}]
      };
    case SetsActionTypes.REMOVE_SET:
      return {
        ...state,
        sets: [...state.sets.slice(0, -1)]
      };

    case SetsActionTypes.SET_WEIGHT:
      state.sets[action.id] = {
        ...state.sets[action.id],
        weight: action.payload
      };

      return {
        ...state
      };
    case SetsActionTypes.SET_REPS:
      state.sets[action.id] = {
        ...state.sets[action.id],
        reps: action.payload
      };

      return {
        ...state
      };
    case SetsActionTypes.FETCH_SETS_START:
      return {
        ...state
      };
    case SetsActionTypes.FETCH_SETS_SUCCESS:
      return {
        ...state,
        sets: action.payload
      };
    case SetsActionTypes.FETCH_SETS_FAILURE:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default setsReducer;
