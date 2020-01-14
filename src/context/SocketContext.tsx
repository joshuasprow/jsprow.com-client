import React, { createContext, FC, useEffect } from "react";
import io from "socket.io-client";

const socket = io.connect("localhost:3001", { query: "test" });

const Context = createContext<SocketIOClient.Socket>(socket);

const Provider: FC = props => {
  useEffect(() => {
    socket.on("connected", (socketId: string) => {
      console.log("socketId:", socketId);
    });
  }, []);

  return <Context.Provider {...props} value={socket} />;
};

export default { Context, Provider };
