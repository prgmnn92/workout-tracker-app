import React from "react";
import { Switch, Route } from "react-router-dom";

import ExercisePage from "./pages/exercisepage/exercisepage.component";
import ExerciseOverview from "./pages/exercise-overview/exercise-overview.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/view" component={ExerciseOverview} />
        <Route path="/" component={ExercisePage} />
      </Switch>
    </div>
  );
}

export default App;
