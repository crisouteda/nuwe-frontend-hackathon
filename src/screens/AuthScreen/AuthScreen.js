import React, { useEffect, useState } from "react";
import {
  Main,
  ModalTitle,
  ModalSubtitle,
  ModalButtonContainer,
  CloseModalButton,
} from "./Style";
import { Headers, Modal } from "../../components";
import { StepsAuthentication } from "../../utils";

export function AuthScreen() {
  const [page, setPage] = useState(0);
  const [currentScreen, setCurrentScreen] = useState(StepsAuthentication[0]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setCurrentScreen(StepsAuthentication[page]);
  }, [page]);

  return (
    <div>
      {showModal && (
        <Modal
          containerStyle={{
            alignItems: "flex-start",
            maxWidth: 706,
            padding: 40,
          }}
        >
          <ModalTitle>{currentScreen.modalTitle}</ModalTitle>
          <ModalSubtitle>{currentScreen.modalSubtitle}</ModalSubtitle>
          <ModalButtonContainer>
            <CloseModalButton onClick={() => setShowModal(false)}>
              Cerrar
            </CloseModalButton>
            {page === 3 && (
              <CloseModalButton secondary onClick={() => setShowModal(false)}>
                Vamos para Nuwe
              </CloseModalButton>
            )}
          </ModalButtonContainer>
        </Modal>
      )}
      <Headers page={page} setPage={setPage} header={currentScreen?.header} />
      <Main>
        <h1>{currentScreen.title}</h1>
        {currentScreen.subtitle ? (
          <h2>{currentScreen.subtitle}</h2>
        ) : (
          <h2>
            Para poder revisar que se trata de una cuenta real, necesitamos la
            siguiente información
          </h2>
        )}

        <currentScreen.component
          nextPage={setPage}
          setShowModal={setShowModal}
          continuar={currentScreen?.continuar}
        />
        {currentScreen?.safe}
        {StepsAuthentication[page]?.google}
      </Main>
    </div>
  );
}
