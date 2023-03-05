import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  background: #fff;
`;

const Title = styled.div`
  padding-bottom: 10px;
  font-size: 24px;
  font-weight: 700;
`;

const ButtonSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Button = styled.button`
  padding: 5px 10px;
  font-family: "Roboto Condensed", sans-serif;
  font-size: 16px;
  line-height: 125%;
  text-align: center;
  text-transform: capitalize;
  color: #ffffff;
  background: #212529;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.5s;
  :hover {
    transform: scale(1.1);
  }
  :active {
    background: #74c69d;
  }
`;

const HistoryCard = ({ handleSearchHistory, searchHistory }) => {
  return (
    <Container>
      <Title>Search History:</Title>
      <ButtonSection>
        {searchHistory.map((choice) => (
          <Button key={choice} onClick={() => handleSearchHistory(choice)}>
            #{choice}
          </Button>
        ))}
      </ButtonSection>
    </Container>
  );
};

export default HistoryCard;
