import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {removeExercise} from "../../redux/exercise/exercise.actions"; 

import "./exercise-card.styles.scss";

const ExerciseCard = ({ date,name, history, removeExercise }) => {

  
  return(
    <div>
    <div className="exercise card"onClick={() => history.push(history.location.pathname + "/" + name)}>
      <span>
        <h2 className="card-title">{name}</h2>
        <p className="card-description">...with a description !</p>
        </span>
        
      </div>
      <button onClick={() => removeExercise({date,name})}>REMOVE</button>
    </div>
);
}

const mapDispatchToProps = dispatch => ({
  removeExercise: (dateAndName) => dispatch(removeExercise(dateAndName))
});

export default connect(null,mapDispatchToProps)(withRouter(ExerciseCard));
