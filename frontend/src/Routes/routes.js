import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import Landing from "../components/Landing";
import WineDescription from "../components/WineDescription";
// import Wines from "../components/Wines";
// import AboutUs from "../components/AboutUs";
// import LogIn from "../components/LogIn";
// import SignUp from "../components/SignUp";
// import UserProfile from "../components/UserProfile";
import Footer from "../components/Footer";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/WineDescription" component={WineDescription} />
        {/* 
        <Route path="/Wines" component={Wines} />
        <Route path="/AboutUs" component={AboutUs} />
        <Route path="/LogIn" component={LogIn} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/Profile" component={UserProfile} /> 
*/}
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
