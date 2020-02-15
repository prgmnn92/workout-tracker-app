import React from "react";
import { connect } from "react-redux";

import { addSet, removeSet } from "../../redux/exercise/exercise.actions";

import CustomButton from "../../components/custom-button/custom-button.component";
import Set from "../../components/set/set.component";

import "./exercisepage.styles.scss";

class ExercisePage extends React.Component { 


  render() {

  const { addSet, removeSet, sets } = this.props

  return (
    <div className="exercise-page">
      <div className="title">
        <h2>{this.props.match.params.name}</h2>
      </div>
      <div className="sets">
        {sets ? sets.map((set, id) => <Set key={id} id={id} />) : null}
      </div>
      <div className="control-buttons">
        <CustomButton>Save</CustomButton>
        <CustomButton clickEvent={removeSet}>Remove Set</CustomButton>
        <CustomButton clickEvent={addSet}>Add Set</CustomButton>
      </div>
    </div>
  );
  }
};

const mapStateToProps = state => {
  return {
    sets: state.exercise.sets
  };
};

const mapDispatchToProps = dispatch => ({
  addSet: () => dispatch(addSet()),
  removeSet: () => dispatch(removeSet())
});

export default connect(mapStateToProps, mapDispatchToProps)(ExercisePage);
