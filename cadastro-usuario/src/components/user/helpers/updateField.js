export default (event, users, setUsers) => {
  const newUser = { ...users.user }; //clonar o user para poder modificar o valor sem alterar o original
  newUser[event.target.name] = event.target.value;
  setUsers({ ...users, user: newUser });
};
