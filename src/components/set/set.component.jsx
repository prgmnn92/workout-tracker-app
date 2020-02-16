import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";

import { setWeight, setReps } from "../../redux/sets/sets.actions";
import "./set.styles.scss";

const Set = ({ id, setWeight, setReps, weight, reps }) => {
  const didMountRef = useRef(false);

  const effect = useEffect(() => {
    if (didMountRef.current) {
      console.log("test");
    } else didMountRef.current = true;
  });

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
      />

      <span>Weight:</span>
      <input
        type="text"
        name="weight"
        placeholder="Weight"
        onChange={event => setWeight(event.target.value, id - 1)}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  setWeight: (value, id) => dispatch(setWeight(value, id)),
  setReps: (value, id) => dispatch(setReps(value, id))
});

export default connect(null, mapDispatchToProps)(Set);
