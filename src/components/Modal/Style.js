import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: fit-content;
  background: #ffffff;
  position: relative;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.07),
    0px 50.625px 34.875px rgba(0, 0, 0, 0.04725),
    0px 20px 13px rgba(0, 0, 0, 0.035),
    0px 4.375px 4.625px rgba(0, 0, 0, 0.02275);
`;

export const ModalBg = styled.div`
  position: fixed;
  z-index: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
`;