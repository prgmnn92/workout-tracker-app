import React from "react";

import "./exercise-card.styles.scss";

const ExerciseCard = ({ name }) => (
  <div className="exercise card">
    <span>
      <h2 className="card-title">{name}</h2>
      <p className="card-description">...with a description !</p>
    </span>
  </div>
);

export default ExerciseCard;
