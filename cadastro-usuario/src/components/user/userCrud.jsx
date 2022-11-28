import React, { useState } from "react";
import Main from "../template/Main";

const headerProps = {
  icon: "users",
  title: "Usuários",
  subtitle: "Cadastro de usuários: Incluir, Listar, Alterar e Excluir.",
};

export default (props) => {
  const [headerState /* , setHeaderState */] = useState(headerProps);

  return <Main {...headerState}>Cadastro de Usuário</Main>;
};
