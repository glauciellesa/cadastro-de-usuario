import React, { useContext } from "react";
import { UsersContext } from "../context/UsersContext";
import RenderRows from "./RenderRows";

const RenderTable = () => {
  const { users, setUsers } = useContext(UsersContext);
  return (
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
  );
};

export default RenderTable;
