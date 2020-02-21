import React from "react";
import { connect } from "react-redux";
import { Row, Col, Collapse } from "antd";

import { addSet } from "../../redux/workout/workout.actions";
import SetInput from "../set-input/set-input.component";

import "./exercise-collapse.styles.scss";

class ExerciseCollapse extends React.Component {
  render() {
    const { objectID, title, exercises } = this.props;
    const { Panel } = Collapse;

    return (
      <div className="exercise-collapse">
        <Collapse defaultActiveKey={objectID}>
          <Panel header={title} key={objectID} style={{ padding: 0 }}>
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
            {exercises[title].map(({ reps, weight }, id) => {
              return (
                <SetInput
                  name={{ name: title, id: objectID }}
                  key={id}
                  reps={reps}
                  weight={weight}
                />
              );
            })}
          </Panel>
        </Collapse>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  exercises: state.workout.exercises
});

const mapDispatchToProps = dispatch => ({
  addSet: name => dispatch(addSet(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseCollapse);
