import styled from "styled-components";
import { IsPhone, Theme } from "../../utils";

export const Main = styled.div`
  width: 60%;
  margin-top: 70px;
  margin-left: 20%;
  @media (max-width: ${IsPhone}) {
    margin-left: 14%;
  }
  h1 {
    font-size: 30px;
    font-weight: bold;
  }
  h2 {
    font-size: 18px;
    color: ${Theme.lightBody};
  }
`;

export const Guardar = styled.button`
  margin-top: 48px;
  height: 64px;
  background: ${Theme.primary};
  border-radius: 6px;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  justify-content: center;
  color: ${Theme.white};
  max-width: min(500px, 70vw);
  width: 500px;
  position: relative;
  margin-top: 30px;
  cursor: pointer;
  border: none;
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

export const ModalTitle = styled.div`
  font-weight: bold;
  font-size: 24px;
`;

export const ModalSubtitle = styled.div`
  font-size: 17px;
  line-height: 24px;
  margin: 44px 0;
  text-align: left;
`;

export const ModalButtonContainer = styled.div`
  display: flex;
`;

export const CloseModalButton = styled.div`
  width: ${(props) => (props.secondary ? "280px" : "164px")};
  height: 56px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 6px;
  background: ${(props) => (props.secondary ? Theme.black : Theme.white)};
  color: ${(props) => (!props.secondary ? Theme.black : Theme.white)};
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  margin-right: 25px;
`;
