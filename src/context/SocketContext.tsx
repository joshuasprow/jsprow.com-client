import React, { createContext, FC, useEffect } from "react";
import io from "socket.io-client";

const socket = io.connect("localhost:3001", { query: "test" });

const Context = createContext<SocketIOClient.Socket>(socket);

const Provider: FC = props => {
  useEffect(() => {
    socket.on(
      "user joined",
      (response: { username: string; numUsers: number }) =>
        console.log(response)
    );
  }, []);

  return <Context.Provider {...props} value={socket} />;
};

export default { Context, Provider };
