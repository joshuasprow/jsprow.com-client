import React, { FC, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import ThemeContext from "./context/ThemeContext";

const BirdConversation = lazy(() => import("./pages/BirdConversation"));
const Home = lazy(() => import("./pages/Home"));

const App: FC = () => {
  return (
    <ThemeContext.Provider>
      <Router>
        <Nav />
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
