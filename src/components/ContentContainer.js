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

  return (
    <Container>
      <SearchBar changeUser={changeUser} error={error} />
      <Card user={user} />
      <HistoryCard
        searchHistory={searchHistory}
        handleSearchHistory={changeUser}
      />
    </Container>
  );
};
export default ContentContainer;
