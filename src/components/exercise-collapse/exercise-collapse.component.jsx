import React from "react";
import { Row, Col, Collapse } from "antd";

import SetInput from "../set-input/set-input.component";

import "./exercise-collapse.styles.scss";

const ExerciseCollapse = ({ key, title }) => {
  const { Panel } = Collapse;
  return (
    <div className="exercise-collapse">
      <Collapse defaultActiveKey={key}>
        <Panel header={title} key={key} style={{ padding: 0 }}>
          <Row
            type="flex"
            justify="start"
            gutter={[24, 16]}
            className="collapse-header"
          >
            <Col>Reps</Col>
            <Col>Weight</Col>
            <Col></Col>
          </Row>
          <SetInput />
        </Panel>
      </Collapse>
    </div>
  );
};

export default ExerciseCollapse;
