import React from "react";
import { GoogleIcon } from "../../assets/Icons";
import { Main, Separador } from "./Style";

export function Google() {
  return (
    <>
      <Separador>
        <div />
        <h1>O</h1>
        <div />
      </Separador>
      <Main>
        <GoogleIcon />
        <h1>Regístrate con Google</h1>
      </Main>
    </>
  );
}
