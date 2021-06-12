import React, { useState } from "react";
import { InputComponent } from "../InputComponent";

export function Complete() {
  const [complete, setComplete] = useState("");
  return (
    <InputComponent
      id="cris"
      value={complete}
      onChange={setComplete}
      placeholder="hola cris"
      label="phone"
      isPhone
    />
  );
}
