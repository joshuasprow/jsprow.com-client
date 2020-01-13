import React, { FC, lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import GitHubCorners from "./components/GitHubCorners";
import Navbar from "./components/Navbar";
import ThemeContext from "./context/ThemeContext";

const BirdConversation = lazy(() => import("./pages/BirdConversation"));
const Home = lazy(() => import("./pages/Home"));

const App: FC = () => {
  return (
    <HelmetProvider>
      <ThemeContext.Provider>
        <Router>
          <Navbar />
          <Suspense fallback={"Loading..."}>
            <Switch>
              <Route component={BirdConversation} path="/bird-conversation" />
              <Route component={Home} path="/" />
            </Switch>
          </Suspense>
          <GitHubCorners />
        </Router>
      </ThemeContext.Provider>
    </HelmetProvider>
  );
};

export default App;
