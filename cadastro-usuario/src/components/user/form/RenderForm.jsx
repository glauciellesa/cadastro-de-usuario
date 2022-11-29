import React, { useContext } from "react";
import { UsersContext } from "../context/UsersContext";
import clear from "../helpers/clear";
import save from "../helpers/save";
import updateField from "../helpers/updateField";

export default (props) => {
  const { users, setUsers } = useContext(UsersContext);

  return (
    <div className="form">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="form-group">
            <label> Nome </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={users.user.name}
              onChange={(e) => updateField(e, users, setUsers)}
              placeholder="Digite o nome... "
            />
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={users.user.email}
              onChange={(e) => updateField(e, users, setUsers)}
              placeholder="Digite o email.."
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-12 d-flex justify-content-end">
          <button
            className="btn btn-primary"
            onClick={(e) => save(users, setUsers)}
          >
            Salvar
          </button>
          <button
            className="btn btn-secondary ml-2"
            onClick={(e) => clear(setUsers)}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};
