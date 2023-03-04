import React, { useRef } from "react";

const SearchBar = ({ changeUser, error }) => {
  const choice = useRef("");

  const searchUserHandler = (e) => {
    e.preventDefault();
    changeUser(choice.current.value);
    choice.current.value = "";
  };

  return (
    <form onSubmit={searchUserHandler}>
      <input
        type="text"
        ref={choice}
        placeholder="Type username here..."
        required
      />
      <div>
        <div>{error}</div>
        <button type="submit">Search</button>
      </div>
    </form>
  );
};

export default SearchBar;
