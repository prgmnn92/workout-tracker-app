import { TrainingdayActionTypes } from "./trainingday.types";

import { firestore } from "../../firebase/firebase.utils";

import { convertTrainingdaySnapshotToMap } from "../../firebase/firebase.utils";

// FETCHING DATA

export const fetchTrainingdayStart = () => ({
  type: TrainingdayActionTypes.FETCH_TRAININGDAY_START
});

export const fetchTrainingdaySuccess = trainingday => ({
  type: TrainingdayActionTypes.FETCH_TRAININGDAY_SUCCESS,
  payload: trainingday
});

export const fetchTrainingdayFailure = errorMessage => ({
  type: TrainingdayActionTypes.FETCH_TRAININGDAY_FAILURE,
  payload: errorMessage
});

export const fetchTrainingdayStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection("exerciseCollection"); //.collection("exerciseCollection");

    dispatch(fetchTrainingdayStart());

    collectionRef
      .get()
      .then(snapshot => {
        const trainingdaysMap = convertTrainingdaySnapshotToMap(snapshot);
        dispatch(fetchTrainingdaySuccess(trainingdaysMap));
      })
      .catch(error => dispatch(fetchTrainingdayFailure(error.message)));
  };
};
