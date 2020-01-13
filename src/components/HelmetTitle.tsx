import React, { FC } from "react";
import { Helmet } from "react-helmet-async";

const makeTitle = ({ alert, page, suffix }: HelmetTitleProps) =>
  alert || `jsprow.com - ${page}${suffix ? ` (${suffix})` : ""}`;

const HelmetTitle: FC<HelmetTitleProps> = props => {
  const title = makeTitle(props);

  return <Helmet title={title} />;
};

export default HelmetTitle;

interface HelmetTitleProps {
  alert?: string;
  page: string;
  suffix?: number | string;
}
