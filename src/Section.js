import "./App.css";
import React, { useContext } from "react";
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

export default Section;
