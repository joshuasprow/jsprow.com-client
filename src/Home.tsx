import React, { FC } from "react";
import { RouteComponentProps, useLocation } from "react-router-dom";
import makeClassName from "./lib/make-page-class-name";

const Home: FC<RouteComponentProps> = () => {
  const location = useLocation();
  const className = makeClassName(location.pathname);

  return (
    <>
      <main className={className}>
        <article>
          <p>Welcome to jsprow.com!</p>
        </article>
      </main>
    </>
  );
};

export default Home;
