import { SetsActionTypes } from "./sets.types";

import { addSetsToDatabase } from "../../firebase/firebase.utils";

const INITIAL_STATE = {
  sets: [{}],
  isDispatched: false
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
        //isDispatched: !state.sets[0].hasOwnProperty("reps") TODO
      };
    case SetsActionTypes.FETCH_SETS_SUCCESS:
      return {
        ...state,
        sets: action.payload !== null ? action.payload : [{}]
      };
    case SetsActionTypes.FETCH_SETS_FAILURE:
      return {
        ...state
      };
    case SetsActionTypes.DISPATCH_SETS:
      const { date, name } = action.payload;

      addSetsToDatabase(date, name, state.sets);

      console.log();

      return {
        ...state,
        isDispatched: true
      };
    default:
      return state;
  }
};

export default setsReducer;
