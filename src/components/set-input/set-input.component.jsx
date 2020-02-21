import React from "react";
import { connect } from "react-redux";

import {
  addSet,
  setReps,
  setWeight
} from "../../redux/workout/workout.actions";

import { InputNumber, Button, Row, Col } from "antd";

import "./set-input.styles.scss";

const SetInput = ({ reps, weight, addSet, name, setWeight, setReps }) => {
  return (
    <Row gutter={[24, 16]} type="flex" justify="start" className="set-input">
      <Col span={8}>
        <InputNumber
          min={0}
          max={100000}
          defaultValue={reps}
          onChange={value => setReps(value)}
        />
      </Col>
      <Col span={8}>
        <InputNumber
          min={0}
          max={100000}
          defaultValue={weight}
          step={2.5}
          onChange={value => setWeight(value)}
        />
      </Col>
      <Col span={8}>
        <Button onClick={() => addSet(name)} type="danger">
          +
        </Button>
      </Col>
    </Row>
  );
};

const mapDispatchToProps = dispatch => ({
  addSet: name => dispatch(addSet(name)),
  setReps: value => dispatch(setReps(value)),
  setWeight: value => dispatch(setWeight(value))
});

export default connect(null, mapDispatchToProps)(SetInput);
