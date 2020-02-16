import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import {
  addExercise,
  removeExercise,
  setExerciseName,
  fetchCollectionsStartAsync
} from "../../redux/exercise/exercise.actions";

import "./exercise-overview.styles.scss";

import CustomButton from "../../components/custom-button/custom-button.component";
import ExerciseCard from "../../components/exercise-card/exercise-card.component";

class ExerciseOverview extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;

    fetchCollectionsStartAsync(this.props.match.params.date);
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
          {exercises
            ? exercises.map((exercise, id) => {
                //exerciseName => console.log(exerciseName)

                return (
                  <ExerciseCard
                    key={id}
                    name={Object.keys(exercise)[0]}
                    date={this.props.match.params.date}
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
  removeExercise: () => dispatch(removeExercise()),
  fetchCollectionsStartAsync: date => dispatch(fetchCollectionsStartAsync(date))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ExerciseOverview));
