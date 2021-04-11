import "./App.css";
import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import _ from "lodash";
import MyContext from "./Context";

const StyledSection = styled.div`
  border-radius: 25px;
  border: 2px solid #73ad21;
  padding: 20px;
  float: left;
`;

function Section(props) {
  const { mySections, dispatch } = useContext(MyContext);
  const handleClick = (item) => {
    if (
      _.find(mySections, function (s) {
        return s.id === item.id;
      })
    ) {
      dispatch({ type: "remove", payload: item.id });
    } else {
      dispatch({ type: "add", payload: item });
    }
  };

  return (
    <StyledSection onClick={() => handleClick(props.item)}>
      {props.item.webTitle}
    </StyledSection>
  );
}

function SectionsList() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(
      "https://content.guardianapis.com/sections?api-key=3250d0a4-97be-408b-8e38-57f599ae2398"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result.response.results);
          setIsLoaded(true);
          setItems(result.response.results);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        {items.map((item) => (
          <Section key={item.id} item={item}></Section>
        ))}
      </div>
    );
  }
}
export { Section, SectionsList };
