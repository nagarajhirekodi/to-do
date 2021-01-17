import React from "react";
import DisplayTODO from "./components/TodoComponent";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

function App(props) {
  return (
    <div className="app">
      <Router>
        <Route exact={true} path="/" component={DisplayTODO} />
      </Router>
    </div>
  );
}

export default App;
