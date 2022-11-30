import React, { useContext } from "react";
import { UsersContext } from "../context/UsersContext";
import clear from "../helpers/clear";
import save from "../helpers/save";
import updateField from "../helpers/updateField";

export default (props) => {
  const { users, setUsers } = useContext(UsersContext);

  return (
    <form className="form">
      <div className="row">
        <div className="col-12 col-md-6 col-xs-3">
          <div className="form-group">
            <label> Nome </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={users.user.name}
              onChange={(e) => updateField(e, users, setUsers)}
              placeholder="Digite o nome... "
              required
              pattern="[^\s]*"
            />
          </div>
        </div>

        <div className="col-12 col-md-6 col-xs-3">
          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              value={users.user.email}
              onChange={(e) => updateField(e, users, setUsers)}
              placeholder="Digite o email.."
              required
              pattern="[^\s]*"
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-12 d-flex justify-content-end">
          <button
            className="btn btn-primary"
            onClick={(e) => save(e, users, setUsers)}
          >
            Salvar
          </button>
          <button
            className="btn btn-secondary ml-2"
            onClick={(e) => clear(users, setUsers)}
          >
            Cancelar
          </button>
        </div>
      </div>
    </form>
  );
};
