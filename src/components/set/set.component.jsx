import React from "react";
import { connect } from "react-redux";

import { setWeight, setReps } from "../../redux/sets/sets.actions";
import "./set.styles.scss";

const Set = ({ id, setWeight, setReps, weight, reps, isDispatched }) => {
  return (
    <div className="set">
      <h4>Set {id}</h4>

      <span>Repeats:</span>
      <input
        type="text"
        name="reps"
        placeholder="Reps"
        value={reps}
        onChange={event => setReps(event.target.value, id - 1)}
        disabled={isDispatched}
      />

      <span>Weight:</span>
      <input
        type="text"
        name="weight"
        placeholder="Weight"
        value={weight}
        onChange={event => setWeight(event.target.value, id - 1)}
        disabled={isDispatched}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  isDispatched: state.sets.isDispatched
});

const mapDispatchToProps = dispatch => ({
  setWeight: (value, id) => dispatch(setWeight(value, id)),
  setReps: (value, id) => dispatch(setReps(value, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Set);
