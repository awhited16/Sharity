import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
// import RegisterBusiness from "./components/RegisterBusiness";
import Home from "./pages/home";
import Footer from "./components/Footer";

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
        <Home />
      </div>
        <Footer />
    </Router>
  );
}

export default App;