import React, { FC, lazy, useEffect, useState } from "react";

const HelmetTitle = lazy(() => import("./HelmetTitle"));
const Page = lazy(() => import("./Page"));

const About: FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        const next = prev + 1;
        console.log([prev, next]);
        return next;
      });
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <HelmetTitle page="About" suffix={count} />
      <Page className="about-page">
        <article>
          <p>This is a PWA!</p>
        </article>
      </Page>
    </>
  );
};

export default About;
