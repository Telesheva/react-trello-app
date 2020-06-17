import React from "react";
import { Switch, Route } from "react-router-dom";
import BoardList from "../components/BoardList/BoardList";
import Board from "../components/Board/Board";

export default function Routes() {
  return (
    <Switch>
      <Route path="/board/:id" component={Board} />
      <Route exact path="/" component={BoardList} />
      <Route
        exact
        path={"**"}
        component={() => (
          <h1 style={{ color: "red", textAlign: "center", marginTop: "50px" }}>
            Page was not found!
          </h1>
        )}
      />
    </Switch>
  );
}
