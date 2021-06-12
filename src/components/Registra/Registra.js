import React, { useState } from "react";
import { Square } from "./Style";

export function Registra() {
  const [clicked, setClicked] = useState(false);
  return (
    <Square clicked={clicked} onClick={() => setClicked(!clicked)}>
      ✔
    </Square>
  );
}
