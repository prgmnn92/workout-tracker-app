import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { fetchTrainingdayStartAsync } from "../../redux/trainingday/trainingday.actions";

import "./trainingday-overview.styles.scss";

class TrainingdayOverview extends React.Component {
  componentDidMount() {
    const { fetchTrainingdayStartAsync, trainingdays } = this.props;

    fetchTrainingdayStartAsync();

    console.log(trainingdays);
  }

  render() {
    const { trainingdays, history } = this.props;
    const date = new Date().toISOString().split("T")[0];
    return (
      <div className="trainingday-overview">
        <div className="tracked-days">
          {trainingdays !== null
            ? trainingdays.map(day => (
                <div
                  onClick={() => history.push("/overview/" + day)}
                  className="card"
                >
                  <span className="title">{day}</span>
                </div>
              ))
            : null}
        </div>
        <div className="start-track">
          <span
            className="start-button"
            onClick={() => history.push("/overview/" + date)}
          >
            Start Track
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  trainingdays: state.trainingdays.trainingdays
});

const mapDispatchToProps = dispatch => ({
  fetchTrainingdayStartAsync: () => dispatch(fetchTrainingdayStartAsync())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(TrainingdayOverview));
