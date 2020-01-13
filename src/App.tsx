import React, { FC, lazy, Suspense } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import ThemeContext from "./ThemeContext";

const BirdConversation = lazy(() => import("./BirdConversation"));
const Home = lazy(() => import("./Home"));
const PanicButton = lazy(() => import("./PanicButton"));
const GitHubCorners = lazy(() => import("./GitHubCorners"));
const ThemeSwitch = lazy(() => import("./ThemeSwitch"));

const App: FC = () => {
  return (
    <ThemeContext.Provider>
      <Router>
        <nav>
          <Suspense fallback="">
            <GitHubCorners />
          </Suspense>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/bird-conversation">Bird Conversation</Link>
            </li>
            <li>
              <Suspense fallback={"Loading..."}>
                <ThemeSwitch />
              </Suspense>
            </li>
            <li>
              <Suspense fallback={<button>...</button>}>
                <PanicButton />
              </Suspense>
            </li>
          </ul>
        </nav>
        <Suspense fallback={"Loading..."}>
          <Switch>
            <Route component={BirdConversation} path="/bird-conversation" />
            <Route component={Home} path="/" />
          </Switch>
        </Suspense>
      </Router>
    </ThemeContext.Provider>
  );
};

export default App;
