import React from "react";
import Articles from "./Articles";
import renderer from "react-test-renderer";
import { sections, about, animalsFarmed, artAndDesign } from "./mockData";

//<Articles articles={articles} removeArticles={removeArticles} />
it("test, test...", () => {
  const tree = renderer.create(
    <Articles articles={about.response.results} removeArticles={jest.fn()} />
  );

  expect(tree).toMatchSnapshot();
});
