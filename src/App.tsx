import React, { FC, lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import GitHubCorner from "./components/GitHubCorner";
import Navbar from "./components/Navbar";
import SocketContext from "./context/SocketContext";
import ThemeContext from "./context/ThemeContext";

const BirdConversation = lazy(() => import("./pages/BirdConversation"));
const Home = lazy(() => import("./pages/Home"));

const App: FC = () => {
  return (
    <HelmetProvider>
      <SocketContext.Provider>
        <ThemeContext.Provider>
          <Router>
            <Navbar />
            <Suspense fallback={"Loading..."}>
              <Switch>
                <Route component={BirdConversation} path="/bird-conversation" />
                <Route component={Home} path="/" />
              </Switch>
            </Suspense>
            <GitHubCorner />
          </Router>
        </ThemeContext.Provider>
      </SocketContext.Provider>
    </HelmetProvider>
  );
};

export default App;
