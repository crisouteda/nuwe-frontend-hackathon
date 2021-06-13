import styled from "styled-components";
import { IsPhone } from "../../utils";

export const ModalContainer = styled.div`
  -webkit-box-sizing: border-box; 
  -moz-box-sizing: border-box; 
  box-sizing: border-box; /
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: fit-content;
  background: #ffffff;
  position: relative;
  padding: 30px;
  box-shadow: 0px 8px 30px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
  @media (max-width: ${IsPhone}) {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    height: 100vh;
    padding: 20px 0 0 0;
    border-radius: 0;
  }
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
