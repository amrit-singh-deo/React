import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Upload from "../pages/Upload";
import Gallery from "../pages/Gallery";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Upload} />
        <Route path="/gallery" component={Gallery} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
