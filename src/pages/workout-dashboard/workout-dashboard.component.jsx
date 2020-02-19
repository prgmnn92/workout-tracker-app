import React from "react";
import moment from "moment";
import "moment/locale/de-ch";
import { Row, Col, Button, DatePicker, Input, Select } from "antd";

import ExerciseCollapse from "../../components/exercise-collapse/exercise-collapse.component";

import { DATENOW } from "../../utils/utils";

import "./workout-dashboard.styles.scss";

class WorkoutDashboard extends React.Component {
  render() {
    const arr = [0, 1, 2, 3, 4, 5, 6];

    const { Option } = Select;
    console.log(DATENOW);
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
              />
            </Col>
            <Col span={8}>
              <DatePicker
                defaultValue={moment(DATENOW, "YYYY-MM-DD")}
                onChange={(_, date) => console.log(date)}
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
              <Button size="large" type="primary" className="exercise-button">
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
            {arr.map(i => (
              <ExerciseCollapse key={i} title={"Title_" + i} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default WorkoutDashboard;
