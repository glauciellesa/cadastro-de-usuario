import React, { useContext } from "react";
import styled from "styled-components";
import { UsersContext } from "../context/UsersContext";
import RenderRows from "./RenderRows";

const RenderTable = () => {
  const { users, setUsers } = useContext(UsersContext);
  return (
    <StyledTable>
      <table className="table mt-4 col-xs-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <RenderRows users={users} setUsers={setUsers} />
        </tbody>
      </table>
    </StyledTable>
  );
};
const StyledTable = styled.div`
  tr {
    color: ${({ theme }) => theme.dark};
  }
`;

export default RenderTable;
