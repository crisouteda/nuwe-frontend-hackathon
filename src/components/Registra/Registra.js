import React, { useState } from "react";
import { InputComponent } from "../InputComponent";
import { Square } from "./Style";

export function Registra() {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <Square clicked={clicked} onClick={() => setClicked(!clicked)}>
        ✔
      </Square>
      <InputComponent id="cris" />
    </>
  );
}
