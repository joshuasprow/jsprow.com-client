import React, { FC, lazy, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import makeClassName from "./lib/make-page-class-name";

const HelmetTitle = lazy(() => import("./HelmetTitle"));

const Home: FC<RouteComponentProps> = () => {
  const [alert, setAlert] = useState<undefined | string>(undefined);
  const className = makeClassName(location.pathname);

  const handleAlertButton = () => setAlert("🔥🔥 PANIC 🔥🔥");

  return (
    <>
      <HelmetTitle alert={alert} page="Home" />
      <main className={className}>
        <article>
          <p>Welcome to jsprow.com!</p>
          <button onClick={handleAlertButton}>PANIC</button>
        </article>
      </main>
    </>
  );
};

export default Home;
