import React from "react";
import moment from "moment";
import { connect } from "react-redux";
import "moment/locale/de-ch";
import { Row, Col, Button, DatePicker, Input, Select, Spin } from "antd";

import ExerciseCollapse from "../../components/exercise-collapse/exercise-collapse.component";
import {
  addExercise,
  fetchCollectionsStartAsync,
  setExerciseName
} from "../../redux/workout/workout.actions";

import { DATENOW } from "../../utils/utils";

import "./workout-dashboard.styles.scss";

class WorkoutDashboard extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;

    fetchCollectionsStartAsync(DATENOW);
  }

  render() {
    const {
      fetchCollectionsStartAsync,
      exercises,
      setExerciseName,
      addExercise
    } = this.props;

    const { Option } = Select;

    return (
      <div className="workout-dashboard">
        <div className="control-bar">
          <Row className="row">
            <Col span={8}>
              <Select defaultValue="lucy" size="large" style={{ width: 200 }}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </Col>
            <Col span={8}>
              <Input
                size="large"
                placeholder="Basic usage"
                className="exercise-input"
                onChange={event => setExerciseName(event.target.value)}
              />
            </Col>
            <Col span={8}>
              <DatePicker
                defaultValue={moment(DATENOW, "YYYY-MM-DD")}
                onChange={(_, date) =>
                  date.length === 10 ? fetchCollectionsStartAsync(date) : null
                }
                size="large"
                className="exercise-input"
              />
            </Col>
          </Row>
          <Row className="row">
            <Col span={8}>
              <Button size="large" type="primary" className="exercise-button">
                LOAD PLAN
              </Button>
            </Col>
            <Col span={8}>
              <Button
                size="large"
                type="primary"
                className="exercise-button"
                onClick={addExercise}
              >
                ADD EXERCISE
              </Button>
            </Col>
            <Col span={8}>
              <Button size="large" type="primary" className="exercise-button">
                RESET
              </Button>
            </Col>
          </Row>
        </div>
        <div className="header">
          <h1>HEADER</h1>
        </div>
        <div className="exercises">
          <div className="wrapper-exercises">
            {exercises !== undefined && Object.keys(exercises).length > 0 ? (
              Object.keys(exercises).map((exercise, id) => {
                return (
                  <ExerciseCollapse key={id} objectID={id} title={exercise} />
                );
              })
            ) : (
              <Spin
                style={{ position: "absolute", top: "50%", left: "50%" }}
                size="large"
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  exercises: state.workout.exercises
});

const mapDispatchToProps = dispatch => ({
  addExercise: name => dispatch(addExercise(name)),
  fetchCollectionsStartAsync: date =>
    dispatch(fetchCollectionsStartAsync(date)),
  setExerciseName: name => dispatch(setExerciseName(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutDashboard);
