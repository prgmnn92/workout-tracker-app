import React from "react";
import { connect } from "react-redux";
import "./trainingday-overview.styles.scss";

import { fetchTrainingdayStartAsync } from "../../redux/trainingday/trainingday.actions";

class TrainingdayOverview extends React.Component {
  componentDidMount() {
    const { fetchTrainingdayStartAsync, trainingdays } = this.props;

    fetchTrainingdayStartAsync();

    console.log(trainingdays);
  }

  render() {
    const { trainingdays } = this.props;
    return (
      <div>
        {trainingdays !== null ? trainingdays.map(day => <h1>{day}</h1>) : null}
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
)(TrainingdayOverview);
