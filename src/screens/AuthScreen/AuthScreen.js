import React, { useState } from "react";
import { Main } from "./Style";
import { Headers, Registra, Unete, Verifica } from "../../components";
import { StepsAuthentication } from "../../utils";

export function AuthScreen() {
  const [page, setPage] = useState(2);
  return (
    <div>
      <Headers
        page={page}
        setPage={setPage}
        header={StepsAuthentication[page]?.header}
      />
      <Main>
        <h1>{StepsAuthentication[page].title}</h1>
        {StepsAuthentication[page].subtitle ? (
          <h2>{StepsAuthentication[page].subtitle}</h2>
        ) : (
          <h2>
            Para poder revisar que se trata de una cuenta real, necesitamos la
            siguiente información
          </h2>
        )}
        <Unete />
        <Verifica />
        <Registra />
      </Main>
    </div>
  );
}
