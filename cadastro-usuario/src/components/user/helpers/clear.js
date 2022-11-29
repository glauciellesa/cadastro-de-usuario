import { initialState } from "../context/UsersContext";

export default (users, setUsers) => {
  setUsers({ ...users, user: initialState.user });
};
