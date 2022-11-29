import axios from "axios";
const baseUrl = "http://localhost:3001/users";

export default (users, setUsers) => {
  const user = users.user;
  const method = user.id != null ? "put" : "post"; //!= null => usando apenas um ig+ual o resultado pode nulo ou indefinido
  const url = user.id != null ? `${baseUrl}/${user.id}` : baseUrl;
  axios[method](url, user).then((resp) => {
    const list = getUpdatedList(users, resp.data);
    setUsers({ ...users, list });
  });
};

const getUpdatedList = (users, user) => {
  const list = users.list.filter((u) => u.id !== user.id);
  list.unshift(user); //coloca um determinado elemento na primeira posição do array
  return list;
};
