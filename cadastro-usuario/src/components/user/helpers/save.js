import axios from "axios";
import appConfig from "../../../config/appConfig";
import { initialState } from "../context/UsersContext";

export default (e, users, setUsers) => {
  const empty = /[\s]*/;
  if (empty.test(users.user.name) || empty.test(users.user.email)) return; //Verifica se os campos foram preenchidos
  e.preventDefault();
  const user = users.user;
  const method = user.id != null ? "put" : "post"; //!= null => usando apenas um ig+ual o resultado pode nulo ou indefinido
  const url =
    user.id != null ? `${appConfig.baseUrl}/${user.id}` : appConfig.baseUrl;
  axios[method](url, user).then((resp) => {
    const list = getUpdatedList(users, resp.data, true);
    setUsers({ ...initialState, list });
  });
};

export const getUpdatedList = (users, user, add = true) => {
  const list = users.list.filter((u) => u.id !== user.id);
  if (add) list.unshift(user); //coloca um determinado elemento na primeira posição do array
  return list;
};

/*
 * verificar ca
 */
