import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import { Home } from "./Home";

import { BimbowsLoader } from "./bimbows/BimbowsLoader";

import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.layout}>
      <h1 className={classes.layoutTitle}>
        Module-federation micro-frontends demo
      </h1>
      <nav className={classes.layoutNav}>
        <Link to="/">Home</Link>
        <Link to="/bimbows-3-1">Bimbows 3.1</Link>
        <Link to="/settings">Settings</Link>
      </nav>
      <div className={classes.layoutRoute}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="bimbows-3-1" element={<BimbowsLoader />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
