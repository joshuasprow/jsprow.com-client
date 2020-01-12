import React, { FC, lazy } from "react";

const Page = lazy(() => import("./Page"));

const Home: FC = () => {
  return (
    <Page className="home-page">
      <article>
        <p>Welcome to jsprow.com!</p>
      </article>
    </Page>
  );
};

export default Home;
