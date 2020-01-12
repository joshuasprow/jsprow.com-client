import React, { FC, lazy, useEffect, useState } from "react";

const HelmetTitle = lazy(() => import("./HelmetTitle"));
const Page = lazy(() => import("./Page"));

const About: FC = () => {
  return (
    <>
      <HelmetTitle page="About" />
      <Page className="about-page">
        <article>
          <p>This is a PWA!</p>
        </article>
      </Page>
    </>
  );
};

export default About;
