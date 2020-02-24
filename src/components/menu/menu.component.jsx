import React, { useState } from "react";
import { connect } from "react-redux";
import moment from "moment";
import "moment/locale/de-ch";
import { Row, Col, Select, DatePicker, Button, Input } from "antd";

import { DATENOW } from "../../utils/utils";
import {
  setExerciseName,
  fetchCollectionsStartAsync,
  addExercise,
  setPlan
} from "../../redux/workout/workout.actions";
import { resetDay } from "../../firebase/firebase.utils";

import "./menu.styles.scss";

const Menu = ({
  setExerciseName,
  fetchCollectionsStartAsync,
  addExercise,
  setPlan,
  pickedDate
}) => {
  const { Option } = Select;
  const [choosenWorkout, setChoosenWorkout] = useState("");
  return (
    <div className="menu">
      <Row className="row">
        <Col className="col">
          <Row className="margin-top">
            <Col>
              <Select
                onChange={value => setChoosenWorkout(value)}
                defaultValue=""
                size="large"
                style={{ width: 300 }}
              >
                <Option value="Push">Push</Option>
                <Option value="Pull">Pull</Option>
                <Option value="Beine">Beine</Option>
              </Select>
            </Col>
          </Row>
          <Row className="margin-top">
            <Col>
              <Button
                onClick={() => setPlan(choosenWorkout)}
                size="large"
                type="primary"
                className="exercise-button"
              >
                LOAD PLAN
              </Button>
            </Col>
          </Row>
        </Col>
        <Col className="col">
          <Row className="margin-top">
            <Col>
              <Input
                size="large"
                placeholder="Add Exercise"
                className="exercise-input"
                onChange={event => setExerciseName(event.target.value)}
              />
            </Col>
          </Row>
          <Row className="margin-top">
            <Col>
              <Button
                size="large"
                type="primary"
                className="exercise-button"
                onClick={addExercise}
              >
                ADD EXERCISE
              </Button>
            </Col>
          </Row>
        </Col>
        <Col className="col">
          <Row className="margin-top">
            <Col>
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
          <Row className="margin-top">
            <Col>
              <Button
                onClick={() => resetDay(pickedDate)}
                size="large"
                type="primary"
                className="exercise-button"
              >
                RESET
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = state => ({
  pickedDate: state.workout.pickedDate
});

const mapDispatchToProps = dispatch => ({
  setPlan: name => dispatch(setPlan(name)),
  addExercise: name => dispatch(addExercise(name)),
  fetchCollectionsStartAsync: date =>
    dispatch(fetchCollectionsStartAsync(date)),
  setExerciseName: name => dispatch(setExerciseName(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
