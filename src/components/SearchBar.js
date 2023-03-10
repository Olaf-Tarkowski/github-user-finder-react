import React, { useRef } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  padding: 10px;

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  padding: 0px 10px;
  font-family: "Roboto Condensed", sans-serif;
  border: none;
  border-radius: 5px;
  height: 48px;
  flex-grow: 1;
`;

const Button = styled.button`
  margin-left: 10px;
  width: 170px;
  height: 48px;
  font-family: "Roboto Condensed", sans-serif;
  font-size: 20px;
  line-height: 125%;
  text-align: center;
  color: #ffffff;
  background: #212529;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.5s;
  :hover {
    transform: scale(1.05);
  }
  :active {
    background: #74c69d;
  }
  @media (max-width: 400px) {
    margin: 10px 0 0;
    width: 100%;
  }
`;

const SearchBar = ({ changeUser, error }) => {
  const choice = useRef("");

  const searchUserHandler = (e) => {
    e.preventDefault();
    changeUser(choice.current.value);
    choice.current.value = "";
  };

  return (
    <Form onSubmit={searchUserHandler}>
      <Input
        type="text"
        ref={choice}
        placeholder={error !== "" ? "No results..." : "Type username here..."}
        required
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default SearchBar;
