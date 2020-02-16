import { SetsActionTypes } from "./sets.types";

import {
  firestore,
  convertSetsSnapshotToMap
} from "../../firebase/firebase.utils";

export const checkinSets = () => ({
  type: SetsActionTypes.CHECKIN_SETS
});

export const addSet = () => ({
  type: SetsActionTypes.ADD_SET
});

export const removeSet = () => ({
  type: SetsActionTypes.REMOVE_SET
});

export const setWeight = (weight, id) => ({
  type: SetsActionTypes.SET_WEIGHT,
  payload: weight,
  id: id
});

export const setReps = (reps, id) => ({
  type: SetsActionTypes.SET_REPS,
  payload: reps,
  id: id
});

// FETCHING DATA

export const fetchSetsStart = () => ({
  type: SetsActionTypes.FETCH_SETS_START
});

export const fetchSetsSuccess = sets => ({
  type: SetsActionTypes.FETCH_SETS_SUCCESS,
  payload: sets
});

export const fetchSetsFailure = errorMessage => ({
  type: SetsActionTypes.FETCH_SETS_FAILURE,
  payload: errorMessage
});

export const fetchSetsStartAsync = ({ date, name }) => {
  return dispatch => {
    const collectionRef = firestore.collection("exerciseCollection").doc(date);
    dispatch(fetchSetsStart());

    collectionRef
      .get()
      .then(snapshot => {
        const setsMap = convertSetsSnapshotToMap(snapshot, name);

        dispatch(fetchSetsSuccess(setsMap));
      })
      .catch(error => dispatch(fetchSetsFailure(error.message)));
  };
};
