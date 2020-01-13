import React, { FC, lazy } from "react";

const HelmetTitle = lazy(() => import("./HelmetTitle"));
const Page = lazy(() => import("./Page"));

const About: FC = () => {
  return (
    <>
      <HelmetTitle page="About" />
      <Page>
        <article>
          <p>This is a PWA!</p>
        </article>
      </Page>
    </>
  );
};

export default About;
