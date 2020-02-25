import React from "react";
import { connect } from "react-redux";
import { Spin, Button } from "antd";

import { addSetsToDatabase } from "../../firebase/firebase.utils";

import ExerciseCollapse from "../../components/exercise-collapse/exercise-collapse.component";
import {
  addExercise,
  fetchCollectionsStartAsync,
  setExerciseName,
  setPlan
} from "../../redux/workout/workout.actions";
import Menu from "../../components/menu/menu.component";
import { DATENOW } from "../../utils/utils";

import "./workout-dashboard.styles.scss";

class WorkoutDashboard extends React.Component {
  state = {
    plan: ""
  };

  componentDidMount() {
    const { fetchCollectionsStartAsync, exercises } = this.props;

    fetchCollectionsStartAsync(DATENOW);

    if (exercises !== undefined) this.setState({ isFetching: false });
  }

  render() {
    const { exercises, pickedDate } = this.props;

    return (
      <div className="workout-dashboard">
        <Menu />
        <div className="exercises">
          <div className="wrapper-exercises">
            {exercises !== undefined && Object.keys(exercises).length > 0 ? (
              Object.keys(exercises).map((exercise, id) => {
                return (
                  <ExerciseCollapse key={id} objectID={id} title={exercise} />
                );
              })
            ) : !(exercises === undefined) ? (
              <Spin
                style={{ position: "absolute", top: "50%", left: "50%" }}
                size="large"
              />
            ) : (
              <h1>Add Exercise to Start</h1>
            )}
            <Button
              size="large"
              className="save-button"
              onClick={() => addSetsToDatabase(exercises, pickedDate)}
              type="primary"
            >
              SAVE DATA
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  exercises: state.workout.exercises,
  pickedDate: state.workout.pickedDate
});

const mapDispatchToProps = dispatch => ({
  setPlan: name => dispatch(setPlan(name)),
  addExercise: name => dispatch(addExercise(name)),
  fetchCollectionsStartAsync: date =>
    dispatch(fetchCollectionsStartAsync(date)),
  setExerciseName: name => dispatch(setExerciseName(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutDashboard);
