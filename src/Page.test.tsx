import { render } from "@testing-library/react";
import React from "react";
import Page from "./Page";

test("renders page", () => {
  const { getByRole } = render(<Page />);
  expect(getByRole("main")).toBeInTheDocument();
});
