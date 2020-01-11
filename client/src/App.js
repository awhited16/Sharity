import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import RegisterBusiness from "./components/RegisterBusiness";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" />
          <Route exact path="/pickups" />
          <Route exact path="/about" />
        </Switch>
      </div>
      <div className="container-fluid">
        <RegisterBusiness />
      </div>
        <Footer />
    </Router>
  );
}

export default App;