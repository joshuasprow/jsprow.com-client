import React, { FC, lazy, Suspense } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import ThemeContext from "./ThemeContext";

const About = lazy(() => import("./About"));
const Home = lazy(() => import("./Home"));
const ThemeSwitch = lazy(() => import("./ThemeSwitch"));

const App: FC = () => {
  return (
    <ThemeContext.Provider>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Suspense fallback={"Loading..."}>
                <ThemeSwitch />
              </Suspense>
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
    </ThemeContext.Provider>
  );
};

export default App;
