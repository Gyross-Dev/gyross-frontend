import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";

import Layout from "./layout/Layout";
import Container from "./container/Container";
function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Container} />
      </Switch>
    </Layout>
  );
}

export default App;
