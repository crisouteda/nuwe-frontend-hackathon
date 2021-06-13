import React from "react";
import { ModalContainer, ModalBg } from "./Style";

export function Modal({ children, containerStyle }) {
  return (
    <ModalBg>
      <ModalContainer style={containerStyle}>{children}</ModalContainer>
    </ModalBg>
  );
}
