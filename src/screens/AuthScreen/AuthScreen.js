import React, { useState } from "react";
import { Guardar, Main } from "./Style";
import { Headers, Unete } from "../../components";
import { StepsAuthentication } from "../../utils";

export function AuthScreen() {
  const [page, setPage] = useState(0);
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

        {page === 0 ? (
          <Unete nextPage={setPage} />
        ) : (
          <>
            {StepsAuthentication[page]?.component}
            <Guardar onClick={() => setPage(page + 1)}>
              {StepsAuthentication[page]?.continuar}
            </Guardar>
          </>
        )}
        {StepsAuthentication[page]?.safe}
      </Main>
    </div>
  );
}
