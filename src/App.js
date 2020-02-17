import React from "react";
import { Switch, Route } from "react-router-dom";

import SetsOverview from "./pages/sets-overview/sets-overview.component";
import ExerciseOverview from "./pages/exercise-overview/exercise-overview.component";
import TrainingdayOverview from "./pages/trainingday-overview/trainingday-overview.component";
import NotFound from "./pages/not-found/not-found.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/days" component={TrainingdayOverview} />
        <Route exact path="/overview/:date" component={ExerciseOverview} />
        <Route path="/overview/:date/:name" component={SetsOverview} />
        <Route path="/404" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
