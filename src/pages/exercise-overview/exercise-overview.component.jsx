import React from "react";
import { connect } from "react-redux";

import { getExercisesFromDatabase } from "../../firebase/firebase.utils";

import {
  addExercise,
  removeExercise,
  setExerciseName
} from "../../redux/exercise/exercise.actions";

import "./exercise-overview.styles.scss";

import CustomButton from "../../components/custom-button/custom-button.component";
import ExerciseCard from "../../components/exercise/exercise.component";

class ExerciseOverview extends React.Component {
  state = {};

  componentDidMount() {
    const exercises = getExercisesFromDatabase();

    this.setState({ ...exercises });
    //console.log(this.state);
  }

  render() {
    const {
      setExerciseName,
      addExercise,
      removeExercise,
      exercises
    } = this.props;

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
          <CustomButton clickEvent={removeExercise}>
            Remove Exercise
          </CustomButton>
          <input
            type="text"
            name="exercise"
            onChange={e => setExerciseName(e.target.value)}
          />
          <CustomButton clickEvent={addExercise}>Add Exercise</CustomButton>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    exercises: state.exercise.exercises
  };
};

const mapDispatchToProps = dispatch => ({
  setExerciseName: name => dispatch(setExerciseName(name)),
  addExercise: () => dispatch(addExercise()),
  removeExercise: () => dispatch(removeExercise())
});

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseOverview);
