import React from "react";
import styled from "styled-components";

const Th = styled.th`
  padding: 0 0 10px;
  :nth-child(2) {
    padding: 0 10px 10px;
  }
`;

const Td = styled.td`
  text-align: center;
`;

const Table = ({ user }) => {
  return (
    <table>
      <tbody>
        <tr>
          <Th>Repos</Th>
          <Th>Followers</Th>
          <Th>Following</Th>
        </tr>
        <tr>
          <Td>{user.public_repos}</Td>
          <Td>{user.followers}</Td>
          <Td>{user.following}</Td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
