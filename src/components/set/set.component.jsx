import React from "react";

import "./set.styles.scss";

const Set = ({ id }) => (
  <div className="set">
    <h4>Set {id}</h4>

    <span>Repeats:</span>
    <input type="text" name="reps" placeholder="Reps" />

    <span>Weight:</span>
    <input type="text" name="weight" placeholder="Weight" />
  </div>
);

export default Set;
