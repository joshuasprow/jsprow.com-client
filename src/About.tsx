import React, { FC, lazy } from "react";
import { useLocation } from "react-router-dom";
import makePageClassName from "./lib/make-page-class-name";

const HelmetTitle = lazy(() => import("./HelmetTitle"));

const About: FC = () => {
  const location = useLocation();
  const className = makePageClassName(location.pathname);

  return (
    <>
      <HelmetTitle page="About" />
      <main className={className}>
        <article>
          <p>This is a PWA!</p>
        </article>
      </main>
    </>
  );
};

export default About;
