import React from "react";

import "./workout-dashboard.styles.scss";

class WorkoutDashboard extends React.Component {
  render() {
    return (
      <div className="workout-dashboard">
        <div className="control-bar">
          <div className="row">
            <div className="dummy-control-bar">a</div>
            <div className="dummy-control-bar">a</div>
            <div className="dummy-control-bar">a</div>
          </div>
          <div className="row">
            <div className="dummy-control-bar">a</div>
            <div className="dummy-control-bar">a</div>
            <div className="dummy-control-bar">a</div>
          </div>
        </div>
        <div className="header">
          <h1>HEADER</h1>
        </div>
        <div className="exercises">
          <div className="wrapper-exercises">
            <div className="dummy-exercises">a</div>
            <div className="dummy-exercises">a</div>
            <div className="dummy-exercises">a</div>
            <div className="dummy-exercises">a</div>
            <div className="dummy-exercises">a</div>
            <div className="dummy-exercises">a</div>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkoutDashboard;
