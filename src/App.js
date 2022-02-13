import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Notice_board_JnrClg from "./Pages/Notice_Board/NoticeB_JnrClg";
import Notice_board_DegreeClg from "./Pages/Notice_Board/NoticeB_DegreeClg";
import Notice_board_School from "./Pages/Notice_Board/NoticeB_School";
import Study_Mat_DegreeClg from "./Pages/Study_Material/Study_Mat_DegreeClg";
import Study_Mat_JnrClg from "./Pages/Study_Material/Study_Mat_JnrClg";
import Study_Mat_School from "./Pages/Study_Material/Study_Mat_School";
import NavBar from "./NavBar";
import "./App.css";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route
          exact
          path="/notice_board_jnrClg"
          component={Notice_board_JnrClg}
        />
        <Route
          exact
          path="/notice_board_degreeClg"
          component={Notice_board_DegreeClg}
        />
        <Route
          exact
          path="/notice_board_school"
          component={Notice_board_School}
        />
      </Switch>
    </div>
  );
}

export default App;
