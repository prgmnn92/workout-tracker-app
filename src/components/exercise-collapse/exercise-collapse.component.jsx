import React from "react";
import { connect } from "react-redux";
import { Row, Col, Collapse } from "antd";

import { addSet } from "../../redux/exercise/exercise.actions";
import SetInput from "../set-input/set-input.component";

import "./exercise-collapse.styles.scss";

class ExerciseCollapse extends React.Component {
  render() {
    const { objectID, title, exercises, addSet } = this.props;
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
              console.log("IOD", id);
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
  exercises: state.exercise.exercises
});

const mapDispatchToProps = dispatch => ({
  addSet: name => dispatch(addSet(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseCollapse);
