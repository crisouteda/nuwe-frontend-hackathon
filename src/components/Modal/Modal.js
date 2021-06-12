import React from "react";
import { ModalContainer, ModalBg } from "./Style";

export function Modal({ children }) {
  return (
    <ModalBg>
      <ModalContainer>{children}</ModalContainer>
    </ModalBg>
  );
}
