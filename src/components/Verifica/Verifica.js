import React, { useEffect, useState } from "react";
import { Guardar } from "../../screens/AuthScreen/Style";
import { InputComponent } from "../InputComponent";

export function Verifica({ continuar, setShowModal }) {
  const [card, setCard] = useState("");
  const [code, setCode] = useState("");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (code.length === 3 && card.length === 12) {
      setDisabled(false);
    }
  }, [code, card]);

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
      <Guardar disabled={disabled} onClick={() => setShowModal(true)}>
        {continuar}
      </Guardar>
    </>
  );
}
