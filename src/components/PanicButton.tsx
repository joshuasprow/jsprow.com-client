import React, { useState } from "react";
import HelmetTitle from "./HelmetTitle";

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
