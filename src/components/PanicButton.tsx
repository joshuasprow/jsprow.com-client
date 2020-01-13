import React, { useState, useEffect } from "react";
import HelmetTitle from "./HelmetTitle";

const PanicButton = () => {
  const [alert, setAlert] = useState<undefined | string>(undefined);

  const handleAlertButton = () => setAlert("🔥 PANIC 🔥");

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (alert) {
      timeout = setTimeout(() => {
        setAlert(undefined);
      }, 3000);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [alert]);

  return (
    <>
      <HelmetTitle alert={alert} page="Home" />
      <button onClick={handleAlertButton}>PANIC</button>
    </>
  );
};

export default PanicButton;
