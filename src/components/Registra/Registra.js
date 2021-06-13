import React, { useState } from "react";
import { Guardar } from "../../screens/AuthScreen/Style";
import { InputComponent } from "../InputComponent";
import { Square, Acepto } from "./Style";

export function Registra({ nextPage, continuar, setShowModal }) {
  const [clicked, setClicked] = useState(false);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInput = (email) => {
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setShowModal(true);
    } else {
      nextPage(2);
    }
  };

  return (
    <>
      <InputComponent
        id="Nombre"
        value={nombre}
        onChange={setNombre}
        placeholder="Enter name"
        label="Nombre completo*"
      />
      <InputComponent
        id="Email"
        value={email}
        onChange={setEmail}
        placeholder="Enter email adress"
        label="Correo electrónico*"
      />
      <InputComponent
        id="Contraseña"
        value={password}
        onChange={setPassword}
        placeholder="Enter password"
        label="Contraseña*"
        isPassword
      />
      <Acepto>
        <Square clicked={clicked} onClick={() => setClicked(!clicked)}>
          ✔
        </Square>
        <h1>Acepto términos y condiciones</h1>
      </Acepto>
      <Guardar
        disabled={!clicked || !password || !email}
        onClick={() => handleInput(email)}
      >
        {continuar}
      </Guardar>
    </>
  );
}
