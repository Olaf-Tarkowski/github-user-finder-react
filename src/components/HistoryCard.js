import React from "react";

const HistoryCard = ({ handleSearchHistory, searchHistory}) => {
  return (
    <div>
      <h3>Search History:</h3>
      <ul>
        {searchHistory.map((choice) => (
          <li key={choice}>
            <button onClick={() => handleSearchHistory(choice)}>
              {choice}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryCard;
