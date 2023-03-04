import React from "react";
import SearchBar from "./SearchBar";
import Card from "./Card";
import HistoryCard from "./HistoryCard";
import { useUserData } from "./useUserData";

const ContentContainer = () => {
  const { changeUser, user, searchHistory, error } = useUserData();

  return (
    <main>
      <SearchBar changeUser={changeUser} error={error} />
      <Card user={user} />
      <HistoryCard
        searchHistory={searchHistory}
        handleSearchHistory={changeUser}
      />
    </main>
  );
};
export default ContentContainer;
