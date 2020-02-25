import React from "react";
import { Switch, Route } from "react-router-dom";

import PageLayout from "./hoc/layout/layout.component";
import WorkoutDashboard from "./pages/workout-dashboard/workout-dashboard.component";
import NotFound from "./pages/not-found/not-found.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <PageLayout>
        <Switch>
          <Route exact path="/" component={WorkoutDashboard} />
          <Route path="/404" component={NotFound} />
        </Switch>
      </PageLayout>
    </div>
  );
}

export default App;
