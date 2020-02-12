import { useColorMode } from "@chakra-ui/core";
import React, { FC } from "react";
import { RouteComponentProps, useLocation } from "react-router-dom";
import makeClassName from "../lib/make-page-class-name";

const Home: FC<RouteComponentProps> = () => {
  const { colorMode } = useColorMode();

  const location = useLocation();
  const className = makeClassName(location.pathname);

  return (
    <>
      <main className={className}>
        <article>
          <p>Welcome to jsprow.com!</p>
          <pre>{colorMode}</pre>
        </article>
      </main>
    </>
  );
};

export default Home;
