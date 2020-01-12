import React, { FC, lazy } from "react";

const Page = lazy(() => import("./Page"));

const About: FC = () => {
  return (
    <Page className="about-page">
      <article>
        <p>This is a PWA!</p>
      </article>
    </Page>
  );
};

export default About;
