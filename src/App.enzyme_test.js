import React from "react";
import { Articles } from "./App";
import { shallow } from "./enzymeSetup";

function renderArticles(args) {
  const defaultProps = {
    articles: [],
    removeArticles: () => {},
  };
  //articles={articles} removeArticles={removeArticles}
  const props = { ...defaultProps, ...args };
  return shallow(<Articles {...props} />);
}

it("renders form and header", () => {
  const wrapper = renderArticles();
  // console.log(wrapper.debug());
  expect(wrapper.find("button").length).toBe(1);
  // expect(wrapper.find("h2").text()).toEqual("Add Course");
});
