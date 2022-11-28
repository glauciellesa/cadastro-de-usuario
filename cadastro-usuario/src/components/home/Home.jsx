import React from "react";
import Main from "../template/Main";

export default (props) => (
  <Main
    icon="home"
    title="Início"
    subtitle="Segundo projeto do capítulo de React."
  >
    <div className="display-4" style={{ boxShadow: "none" }}>
      Bem vindo!
    </div>
    <hr />
    <p className="mb-0">
      Sistema desenvolvido para exemplificar a construção de um cadastro
      desenvolvido em React!
    </p>
  </Main>
);