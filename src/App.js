import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contactus";
import Home from "./components/Home";
import Service from "./components/Service";




const App = () => {
  return (
    <>
      <Navbar />
     <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/about">
        <About />
      </Route>

      <Route exact path="/service">
        <Service />
      </Route>

      <Route exact  path="/contact">
        <Contact />
      </Route>
    </Switch>
    </>
  
   
  );
};

export default App;
