import React from "react";
import { connect } from "react-redux";

import {
  addExercise,
  removeExercise
} from "../../redux/exercise/exercise.actions";

import "./exercise-overview.styles.scss";

import CustomButton from "../../components/custom-button/custom-button.component";
import ExerciseCard from "../../components/exercise/exercise.component";

const ExerciseOverview = ({ addExercise, removeExercise, exercises }) => {
  return (
    <div className="exercise-overview">
      <div className="title">
        <h2>Overview</h2>
      </div>
      <div className="exercises">
        {exercises
          ? exercises.map((exercise, id) => <ExerciseCard key={id} id={id} />)
          : null}
      </div>
      <div className="control-buttons">
        <CustomButton>Save</CustomButton>
        <CustomButton clickEvent={removeExercise}>Remove Exercise</CustomButton>
        <CustomButton clickEvent={addExercise}>Add Exercise</CustomButton>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    exercises: state.exercise.exercises
  };
};

const mapDispatchToProps = dispatch => ({
  addExercise: () => dispatch(addExercise()),
  removeExercise: () => dispatch(removeExercise())
});

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseOverview);
