import React, { FC, lazy, Suspense } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";

const About = lazy(() => import("./About"));
const Home = lazy(() => import("./Home"));

const App: FC = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Suspense fallback={"Loading..."}>
        <Switch>
          <Route component={About} path="/about" />
          <Route component={Home} path="/" />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
