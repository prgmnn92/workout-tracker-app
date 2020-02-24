import React from "react";
import { connect } from "react-redux";
import { Row, Col, Collapse, Button } from "antd";

import { addSetsToDatabase } from "../../firebase/firebase.utils";

import { addSet, removeSet } from "../../redux/workout/workout.actions";
import SetInput from "../set-input/set-input.component";

import "./exercise-collapse.styles.scss";

class ExerciseCollapse extends React.Component {
  render() {
    const {
      objectID,
      title,
      exercises,
      addSet,
      removeSet,
      pickedDate
    } = this.props;
    const { Panel } = Collapse;

    return (
      <div className="exercise-collapse">
        <Collapse accordion defaultActiveKey={objectID}>
          <Panel header={title} key={objectID} style={{ padding: 0 }}>
            <Row
              type="flex"
              justify="start"
              gutter={[24, 16]}
              className="collapse-header"
            >
              <Col>Reps</Col>
              <Col>Weight</Col>
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
            <Button onClick={() => addSet(title)} type="danger">
              ADD SET
            </Button>
            <Button onClick={() => removeSet(title)} type="primary">
              REMOVE SET
            </Button>
            <Button
              onClick={() => addSetsToDatabase(exercises, pickedDate)}
              type="danger"
            >
              SAVE ALL
            </Button>
          </Panel>
        </Collapse>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  exercises: state.workout.exercises,
  pickedDate: state.workout.pickedDate
});

const mapDispatchToProps = dispatch => ({
  addSet: name => dispatch(addSet(name)),
  removeSet: name => dispatch(removeSet(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseCollapse);
