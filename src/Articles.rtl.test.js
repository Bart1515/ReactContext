import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import Articles from "./Articles";

afterEach(cleanup);

function renderArticles(args) {
  let defaultProps = {
    articles: [],
    removeArticles: () => {},
  };

  const props = { ...defaultProps, ...args };
  return render(<Articles {...props} />);
}

it("test...", () => {
  renderArticles();
  expect(screen.getByRole("button")).toHaveTextContent("Ta bort valda");
});
