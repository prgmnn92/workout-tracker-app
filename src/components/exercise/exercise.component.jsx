import React from "react";

import "./exercise.styles.scss";

const ExerciseCard = ({ name, id }) => (
  <div className="exercise card">
    <span>
      <h2 className="card-title">My awesome card</h2>
      <p className="card-description">...with a description !</p>
    </span>
  </div>
);

export default ExerciseCard;
