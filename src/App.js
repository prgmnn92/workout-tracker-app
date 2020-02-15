import React from "react";
import { Switch, Route } from "react-router-dom";

import ExercisePage from "./pages/exercisepage/exercisepage.component";
import ExerciseOverview from "./pages/exercise-overview/exercise-overview.component";
import NotFound from "./pages/not-found/not-found.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/overview/:date" component={ExerciseOverview} />
        <Route path="/overview/:date/:name" component={ExercisePage} />
        <Route path="/404" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
