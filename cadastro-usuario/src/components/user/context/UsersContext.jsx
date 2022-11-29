import React, { createContext, useState } from "react";

export const initialState = {
  user: { name: "", email: "" },
  list: [],
};

export const UsersContext = createContext();
const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState(initialState);

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
};
export default UsersProvider;
