import React from "react";
import styled from "styled-components";
import Table from "./Table";

const Container = styled.div`
  margin: 0 10px;
  padding: 10px;
  border-radius: 5px;
  background: #fff;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  @media (min-width: 400px) {
    flex-wrap: nowrap;
  }
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;

  @media (min-width: 400px) {
    max-height: 170px;
    width: auto;
  }
`;

const BasicInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px; ;
`;

const Link = styled.a`
  font-size: 24px;
  font-weight: 700;
  color: #000;
  text-decoration: none;
  transition: 0.5s;
  :active {
    color: #74c69d;
  }
`;

const Login = styled.div`
  font-size: 20px;
  font-weight: 300;
`;

const Card = ({ user }) => {
  return (
    <Container>
      <Img src={user.avatar_url} />
      <BasicInfo>
        <Link href={user.html_url}>
          {user.name !== null ? user.name : user.login}
        </Link>
        <Login>{user.login}</Login>
        {user.bio !== null ? user.bio : "This profile has no bio"}
        <Table user={user} />
      </BasicInfo>
    </Container>
  );
};

export default Card;
