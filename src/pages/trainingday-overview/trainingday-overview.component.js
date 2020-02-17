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
    return (
      <div className="trainingday-overview" >
        {trainingdays !== null ? trainingdays.map(day => <div onClick={() => history.push( "/overview/" + day)} className="card"><span className="title">{day}</span></div>) : null}
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
