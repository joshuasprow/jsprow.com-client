import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders home page link", () => {
  const { getByText } = render(<App />);
  const homeLinkEl = getByText(/home/i);
  expect(homeLinkEl).toBeInTheDocument();
});

test("renders about page link", () => {
  const { getByText } = render(<App />);
  const birdConversationLinkEl = getByText(/bird conversation/i);
  expect(birdConversationLinkEl).toBeInTheDocument();
});
