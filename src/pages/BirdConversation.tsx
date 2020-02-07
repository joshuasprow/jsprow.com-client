import React, { lazy, useState } from "react";
import { useLocation } from "react-router-dom";
import SocketContext from "../context/SocketContext";
import useSocket from "../hooks/use-socket";
import makePageClassName from "../lib/make-page-class-name";

const HelmetTitle = lazy(() => import("../components/HelmetTitle"));
const UsernameInput = lazy(() => import("../components/UsernameInput"));

const BirdConversation = () => {
  const [username, setUsername] = useState<null | string>(null);

  const location = useLocation();
  const socket = useSocket();

  const className = makePageClassName(location.pathname);
  const disabled = !username;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (disabled) {
      return;
    }

    socket.emit("add user", username);
  };

  return (
    <>
      <HelmetTitle page="Bird Conversation" />
      <main className={className}>
        <form onSubmit={handleSubmit}>
          <UsernameInput onChange={setUsername} />
          <button disabled={disabled}>Submit Name</button>
        </form>
      </main>
    </>
  );
};

export default () => (
  <SocketContext.Provider>
    <BirdConversation />
  </SocketContext.Provider>
);
