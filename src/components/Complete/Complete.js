import React, { useState } from "react";
import { Guardar } from "../../screens/AuthScreen/Style";
import { InputComponent } from "../InputComponent";

export function Complete({ nextPage, continuar }) {
  const [phone, setPhone] = useState("");
  const [adress, setAdress] = useState("");
  const [country, setCountry] = useState("");
  return (
    <>
      <InputComponent
        id="Phone"
        value={phone}
        onChange={setPhone}
        label="Número de teléfono"
        isPhone
      />
      <InputComponent
        id="Adress"
        value={adress}
        onChange={setAdress}
        placeholder="Introduce la dirección completa"
        label="Dirección"
      />
      <InputComponent
        id="Country"
        value={country}
        onChange={setCountry}
        placeholder="Selecciona uno"
        label="País de residencia"
        isCountry
      />
      <Guardar
        disabled={!country || !adress || !phone}
        onClick={() => nextPage(3)}
      >
        {continuar}
      </Guardar>
    </>
  );
}
