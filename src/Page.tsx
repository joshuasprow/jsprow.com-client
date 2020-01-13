import React, { FC } from "react";
import { useLocation } from "react-router-dom";

const makeClassName = (pathname: string) => `${pathname}-page page`;

const Page: FC = props => {
  const location = useLocation();

  const className = makeClassName(location.pathname);

  console.log(className);

  return <main className="page" {...props} />;
};

export default Page;
