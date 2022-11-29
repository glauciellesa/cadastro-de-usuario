import React from "react";
import edit from "../helpers/edit";
import remove from "../helpers/remove";

const RenderRows = (props) => {
  return props.users.list.map((user) => {
    return (
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>
          <button
            className="btn btn-warning"
            onClick={() => edit(user, props.users, props.setUsers)}
          >
            <i className="fa fa-pencil"></i>
          </button>
          <button
            className="btn btn-danger ml-2"
            onClick={() => remove(props.users, user, props.setUsers)}
          >
            <i className="fa fa-trash"></i>
          </button>
        </td>
      </tr>
    );
  });
};

export default RenderRows;
