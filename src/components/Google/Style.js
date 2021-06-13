import styled from "styled-components";
import { Theme } from "../../utils";

export const Main = styled.div`
  max-width: min(500px, 70vw);
  width: 500px;
  position: relative;
  margin-top: 30px;
  margin-right: 30px;
  height: 108px;
  border-radius: 6px;
  background: ${Theme.white};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 14px 1px rgba(0, 0, 0, 0.06);
  h1 {
    padding-left: 43px;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    text-align: center;
  }
`;

export const Separador = styled.div`
  max-width: min(500px, 70vw);
  width: 500px;
  position: relative;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: 45%;
    height: 0px;
    border: 0.5px solid ${Theme.lightBody};
  }
  h1 {
    font-size: 12px;
    line-height: 15px;
    margin-left: 35px;
    margin-right: 35px;
    color: ${Theme.lightBody};
  }
`;
