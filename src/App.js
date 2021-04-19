import "./App.css";
import Articles from "./Articles";
import Section from "./Section";
import SectionsList from "./SectionsList";
import MyContext from "./Context";
import React, { useState, useReducer, useMemo } from "react";
import styled from "styled-components";
import _ from "lodash";

const StyledApp = styled.div`
  text-align: center;
  margin: auto;
  width: 50%;
`;

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "remove":
      return [..._.filter(state, (a) => a.id !== action.payload)];
    case "reset":
      return { sections: [] };
    default:
      throw new Error();
  }
}

function App() {
  const [mySections, dispatch] = useReducer(reducer, []);
  const contextValue = useMemo(() => {
    return { mySections, dispatch };
  }, [mySections, dispatch]);

  const [articles, setArticles] = useState([]);

  // const removeArticles = (removeList) => {
  //   let articlesCopy = [...articles];
  //   removeList.forEach((remId) => {
  //     articlesCopy = _.filter(articlesCopy, (a) => a.id !== remId);
  //   });

  //   setArticles(articlesCopy);
  // };

  const removeArticles = React.useCallback(
    (removeList) => {
      let articlesCopy = [...articles];
      removeList.forEach((remId) => {
        articlesCopy = _.filter(articlesCopy, (a) => a.id !== remId);
      });
      setArticles(articlesCopy);
    },
    [articles]
  );

  const getArticles = () => {
    setArticles((arts) => []);
    mySections.forEach((section) => {
      fetch(
        "https://content.guardianapis.com/" +
          section.id +
          "?api-key=3250d0a4-97be-408b-8e38-57f599ae2398"
      )
        .then((res) => res.json())
        .then(
          (result) => {
            console.log(result.response.results);
            setArticles((arts) => [
              ...arts,
              ...result.response.results.slice(0, 3),
            ]);
          },
          (error) => {}
        );
    });
  };

  return (
    <StyledApp>
      <div>
        <button onClick={getArticles}>Skapa tidning</button>
        <Articles articles={articles} removeArticles={removeArticles} />
        <MyContext.Provider value={contextValue}>
          <h2>Mina ämnen:</h2>
          <div style={{ overflow: "hidden" }}>
            {mySections.map((s) => (
              <Section key={s.id} item={s}></Section>
            ))}
          </div>
          <h2>Tillängliga ämnen:</h2>
          <SectionsList />
        </MyContext.Provider>
      </div>
    </StyledApp>
  );
}

export default App;
