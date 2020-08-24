import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import "./App.css";
import "./styles/styles.css";

// Pages import
import HomeScreen from "./containers/homeScreen/HomeScreen.js";
import FeaturesScreen from "./containers/featuresScreen/FeaturesScreen.js";
import SoonScreen from "./containers/soonScreen/SoonScreen.js";

// Component import
import Header from "./components/header/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/soon">
          <SoonScreen />
        </Route>
        <Route path="/features">
          <FeaturesScreen />
        </Route>
        <Route path="/">
          <HomeScreen />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
