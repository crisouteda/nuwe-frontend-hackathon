import React from "react";
import { Header, Volver, Steps, Login } from "./Style";
import { Arrow } from "../../assets/Icons";

export function Headers({ page, setPage, header }) {
  return (
    <div>
      {page === 0 ? (
        <Login>
          <h2>Ya tienes cuenta?</h2>
          <h3>Inicia Sesión</h3>
        </Login>
      ) : (
        <Header>
          <Volver onClick={() => setPage(page - 1)}>
            <Arrow /> <span>Volver</span>
          </Volver>
          <Steps>
            <h1>PASO 0{page}/03</h1>
            <h2>{header}</h2>
          </Steps>
        </Header>
      )}
    </div>
  );
}
