import React, { FC, lazy, useState } from "react";

const HelmetTitle = lazy(() => import("./HelmetTitle"));
const Page = lazy(() => import("./Page"));

const Home: FC = () => {
  const [alert, setAlert] = useState<undefined | string>(undefined);

  const handleAlertButton = () => setAlert("🔥🔥 PANIC 🔥🔥");

  return (
    <>
      <HelmetTitle alert={alert} page="Home" />
      <Page>
        <article>
          <p>Welcome to jsprow.com!</p>
          <button onClick={handleAlertButton}>PANIC</button>
        </article>
      </Page>
    </>
  );
};

export default Home;
