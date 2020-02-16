import React from "react";
import { connect } from "react-redux";

import {
  addSet,
  removeSet,
  fetchSetsStartAsync
} from "../../redux/sets/sets.actions";

import CustomButton from "../../components/custom-button/custom-button.component";
import Set from "../../components/set/set.component";

import "./exercisepage.styles.scss";

class ExercisePage extends React.Component {
  componentDidMount() {
    //get saved sets with name and date
    const { fetchSetsStartAsync } = this.props;

    fetchSetsStartAsync(this.props.match.params);
  }

  render() {
    const { addSet, removeSet, sets } = this.props;
    console.log(this.props.match.params);

    return (
      <div className="exercise-page">
        <div className="title">
          <h2>{this.props.match.params.name}</h2>
        </div>
        <div className="sets">
          {sets
            ? sets.map(({ reps, weight }, id) => (
                <Set reps={reps} weight={weight} key={id} id={id + 1} />
              ))
            : null}
        </div>
        <div className="control-buttons">
          <CustomButton>Save</CustomButton>
          <CustomButton clickEvent={removeSet}>Remove Set</CustomButton>
          <CustomButton clickEvent={addSet}>Add Set</CustomButton>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    sets: state.sets.sets
  };
};

const mapDispatchToProps = dispatch => ({
  addSet: () => dispatch(addSet()),
  removeSet: () => dispatch(removeSet()),
  fetchSetsStartAsync: dateAndName => dispatch(fetchSetsStartAsync(dateAndName))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExercisePage);
