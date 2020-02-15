import React from "react";
import { connect } from "react-redux";

import { getExerciseCollectionToday } from "../../firebase/firebase.utils";

import {
  addExercise,
  removeExercise,
  setExerciseName
} from "../../redux/exercise/exercise.actions";

import "./exercise-overview.styles.scss";

import CustomButton from "../../components/custom-button/custom-button.component";
import ExerciseCard from "../../components/exercise-card/exercise-card.component";

class ExerciseOverview extends React.Component {
  state = {};

  componentDidMount() {
    getExerciseCollectionToday().then(exercises =>
      this.setState({ ...exercises })
    );
    //getExerciseCollection();

    //  this.setState({ ...exercises });
  }

  render() {
    const {
      setExerciseName,
      addExercise,
      removeExercise,
      exercises,
      exerciseName
    } = this.props;

    return (
      <div className="exercise-overview">
        <div className="title">
          <h2>Overview</h2>
        </div>
        <div className="exercises">
          {this.state
            ? Object.keys(this.state).map((exercise, id) => (
                <ExerciseCard key={id} name={exercise} />
              ))
            : console.log("no")}
          {exercises
            ? exercises.map(exercise => {
                //exerciseName => console.log(exerciseName)

                return (
                  <ExerciseCard
                    key={exercise.id}
                    name={Object.keys(exercise)[0]}
                  />
                );
              })
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
          <CustomButton
            clickEvent={
              exerciseName
                ? () => addExercise(exerciseName)
                : () => alert("Please Enter A Name For The Exercise")
            }
          >
            Add Exercise
          </CustomButton>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    exercises: state.exercise.exercises,
    exerciseName: state.exercise.exerciseName
  };
};

const mapDispatchToProps = dispatch => ({
  setExerciseName: name => dispatch(setExerciseName(name)),
  addExercise: name => dispatch(addExercise(name)),
  removeExercise: () => dispatch(removeExercise())
});

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseOverview);
