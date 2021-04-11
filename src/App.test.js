import { render, screen } from "@testing-library/react";
import App from "./App";
import { unmountComponentAtNode } from "react-dom";

//react testing library
it("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/mina/i); // i är ignore case
  expect(linkElement).toBeInTheDocument();
});

it("should pass", () => {
  expect(true).toEqual(true);
});
