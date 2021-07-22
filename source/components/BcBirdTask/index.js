import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  Link,
} from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

const HomeComponent = () => {
  return (
    <>
      <div className="bg-primary py-4 m-4 text-light text-center">
        <h2 className="mt-2">Welcome to React Application Home</h2>
        <h4 className className="text-warning">
          Please Register and Login
        </h4>
      </div>
    </>
  );
};

const LogOut = () => {
  return (
    <div className="text-center">
      <h1 className="text-warning">You are Logged Out!!</h1>
    </div>
  );
};

export default function BCBirdIndex() {
  return (
    <>
      <Router>
        <div className="bg-secondary p-4 m-2 d-flex justify-content-evenly">
          <Link className="btn btn-danger" to="/">
            Home
          </Link>
          <Link className="btn btn-danger" to="/login">
            Login
          </Link>
          <Link className="btn btn-danger" to="/register">
            Register
          </Link>
          <Link className="btn btn-danger" to="/dashboard">
            Dashboard
          </Link>
          <Link className="btn btn-danger" to="/logout">
            Logout
          </Link>
        </div>
        <Switch>
          <Route exact path="/">
            <HomeComponent />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/LogOut">
            <LogOut />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
