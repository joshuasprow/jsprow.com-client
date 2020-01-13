import React, { lazy } from "react";
import { useLocation } from "react-router-dom";
import makePageClassName from "./lib/make-page-class-name";

const HelmetTitle = lazy(() => import("./HelmetTitle"));

export default () => {
  const location = useLocation();
  const className = makePageClassName(location.pathname);

  return (
    <>
      <HelmetTitle page="Bird Conversation" />
      <main className={className}>
        <article>
          <button>Bird Sound!</button>
        </article>
      </main>
    </>
  );
};
