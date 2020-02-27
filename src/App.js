import React from "react";
import { Switch, Route } from "react-router-dom";

import WorkoutDashboard from "./pages/workout-dashboard/workout-dashboard.component";
import NotFound from "./pages/not-found/not-found.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={WorkoutDashboard} />
        <Route path="/404" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
