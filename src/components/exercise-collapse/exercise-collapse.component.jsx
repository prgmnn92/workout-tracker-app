import React from "react";
import { connect } from "react-redux";
import { Row, Col, Collapse, Button } from "antd";

import { addSet, removeSet } from "../../redux/workout/workout.actions";
import SetInput from "../set-input/set-input.component";

import "./exercise-collapse.styles.scss";

class ExerciseCollapse extends React.Component {
  render() {
    const { objectID, title, exercises, addSet, removeSet } = this.props;
    const { Panel } = Collapse;

    return (
      <div className="exercise-collapse">
        <Collapse accordion defaultActiveKey={objectID}>
          <Panel header={title} key={objectID}>
            <Row className="collapse-header">
              <Col>Reps</Col>
              <Col style={{ marginLeft: "44%" }}>Weight</Col>
            </Row>
            {exercises[title].map((repsAndWeight, id) => {
              const { reps, weight } = repsAndWeight;
              return (
                <SetInput
                  id={id}
                  name={title}
                  key={id}
                  reps={reps}
                  weight={weight}
                />
              );
            })}
            <div className="control-buttons">
              <Button
                className="button"
                onClick={() => addSet(title)}
                type="primary"
              >
                ADD SET
              </Button>
              <Button
                className="button"
                onClick={() => removeSet(title)}
                type="danger"
              >
                REMOVE SET
              </Button>
            </div>
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
  addSet: name => dispatch(addSet(name)),
  removeSet: name => dispatch(removeSet(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseCollapse);
