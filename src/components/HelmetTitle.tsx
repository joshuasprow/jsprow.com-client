import React, { FC } from "react";
import { Helmet } from "react-helmet-async";

const HelmetTitle: FC<HelmetTitleProps> = ({ alert, page, suffix }) => {
  const title = alert || `jsprow.com - ${page}${suffix ? ` (${suffix})` : ""}`;

  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default HelmetTitle;

interface HelmetTitleProps {
  alert?: string;
  page: string;
  suffix?: number | string;
}
