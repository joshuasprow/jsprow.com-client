import React, { createContext, FC } from "react";
import io from "socket.io-client";

const socket = io.connect("localhost:3001", { query: "test" });

const Context = createContext<SocketIOClient.Socket>(socket);

const Provider: FC = props => {
  return <Context.Provider {...props} value={socket} />;
};

export default { Context, Provider };
