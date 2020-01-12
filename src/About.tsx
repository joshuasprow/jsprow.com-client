import React, { FC, lazy, useEffect, useState } from "react";

const HelmetTitle = lazy(() => import("./HelmetTitle"));
const Page = lazy(() => import("./Page"));

const About: FC = () => {
  const [count, setCount] = useState(0);
  const suffix = `${count * 2}s`;

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + 1);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <HelmetTitle page="About" suffix={suffix} />
      <Page className="about-page">
        <article>
          <p>This is a PWA!</p>
        </article>
      </Page>
    </>
  );
};

export default About;
