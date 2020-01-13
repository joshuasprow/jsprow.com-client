import React, { lazy, useState } from "react";

const HelmetTitle = lazy(() => import("./HelmetTitle"));

const PanicButton = () => {
  const [alert, setAlert] = useState<undefined | string>(undefined);
  const handleAlertButton = () => setAlert("🔥🔥 PANIC 🔥🔥");

  return (
    <>
      <HelmetTitle alert={alert} page="Home" />
      <button onClick={handleAlertButton}>PANIC</button>
    </>
  );
};

export default PanicButton;
