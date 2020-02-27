import React from "react";
import { connect } from "react-redux";

import { setReps, setWeight } from "../../redux/workout/workout.actions";

import { InputNumber, Row, Col } from "antd";

import "./set-input.styles.scss";

const SetInput = ({
  reps,
  weight,
  removeSet,
  name,
  setWeight,
  setReps,
  id
}) => {
  return (
    <Row className="set-input">
      <Col span={8}>
        <InputNumber
          className="input-box"
          min={0}
          max={100000}
          step={1.0}
          defaultValue={reps}
          onChange={value => setReps(value, name, id)}
        />
      </Col>
      <Col span={8}>
        <InputNumber
          className="input-box"
          style={{ marginLeft: "65%" }}
          min={0}
          max={100000}
          step={2.5}
          defaultValue={weight}
          onChange={value => setWeight(value, name, id)}
        />
      </Col>
    </Row>
  );
};

const mapDispatchToProps = dispatch => ({
  setReps: (value, name, id) => dispatch(setReps(value, name, id)),
  setWeight: (value, name, id) => dispatch(setWeight(value, name, id))
});

export default connect(null, mapDispatchToProps)(SetInput);
