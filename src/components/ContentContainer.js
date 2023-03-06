import React from "react";
import SearchBar from "./SearchBar";
import Card from "./Card";
import HistoryCard from "./HistoryCard";
import { useUserData } from "./useUserData";
import styled from "styled-components";

const Container = styled.main`
  max-width: 800px;
  margin: auto;
`;

const ContentContainer = () => {
  const { changeUser, user, searchHistory, error } = useUserData();

  const visible = JSON.parse(localStorage.getItem("searchHistory"));

  return (
    <Container>
      <SearchBar changeUser={changeUser} error={error} />
      <Card user={user} />
      {visible !== null ? (
        <HistoryCard
          searchHistory={searchHistory}
          handleSearchHistory={changeUser}
        />
      ) : (
        ""
      )}
    </Container>
  );
};
export default ContentContainer;
