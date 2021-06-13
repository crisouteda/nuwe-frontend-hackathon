import styled from "styled-components";
import { Theme } from "../../utils";

export const Main = styled.div`
  width: 60%;
  margin-top: 70px;
  margin-left: 20%;
  h1 {
    font-size: 30px;
    font-weight: bold;
  }
  h2 {
    font-size: 18px;
    color: ${Theme.lightBody};
  }
`;

export const Guardar = styled.div`
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
  &:hover {
    cursor: pointer;
  }
`;
