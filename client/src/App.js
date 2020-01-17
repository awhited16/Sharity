import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";

// import Home from "./pages/home";
import Footer from "./components/Footer";


import Landing from './components/Landing'
// import Login from './components/Login'
import RegisterBusiness from './components/RegisterBusiness'
import DonationSubmissionForm from "./components/DonationSubmissionForm";
import AvailableDonations from "./pages/AvailableDonations";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/pickups" />
          <Route exact path="/about" />
          <Route exact path="/register" component={RegisterBusiness} />
          <Route exact path="/donations" component={AvailableDonations}/>
          <Route exact path="/donate" component={DonationSubmissionForm}/>
        </Switch>
      </div>
      <div className="container-fluid">
      </div>
        <Footer />
    </Router>
  );
}

export default App;