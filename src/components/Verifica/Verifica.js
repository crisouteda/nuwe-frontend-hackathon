import React, { useState } from "react";
import { InputComponent } from "../InputComponent";

export function Verifica() {
  const [card, setCard] = useState("");
  const [code, setCode] = useState("");
  return (
    <>
      <InputComponent
        id="Card"
        value={card}
        onChange={setCard}
        label="Número de tarjeta"
        inputLength={12}
      />
      <InputComponent
        id="Code"
        value={code}
        onChange={setCode}
        label="Código secreto"
        inputLength={3}
      />
    </>
  );
}
